import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Manager } from 'src/app/model/manager';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.scss']
})
export class EditManagerComponent implements OnInit {

  manager$: Observable<Manager> = this.activatedRoute.params.pipe(
    switchMap( params => this.managerService.get(params.id) )
  );

  constructor(
      private activatedRoute: ActivatedRoute,
    private managerService: ManagerService,
    private router: Router,
  ) { }

  updating:boolean=false;

  onUpdate(form: NgForm, manager: Manager): void {
    if(manager.id===0){
      this.managerService.create(manager)

    }else{
      this.updating=true,
      this.managerService.update(manager)
    }
    this.router.navigate(['manager'])
    this.managerService.getAll()
    this.managerService.getAllsum()

    
  }

  ngOnInit(): void {
  }

}
