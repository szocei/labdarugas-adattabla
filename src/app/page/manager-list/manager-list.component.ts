import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../../service/manager.service';
import { Observable } from 'rxjs';
import { Manager } from 'src/app/model/manager';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {

  constructor(
    private managerService: ManagerService,
    private router:Router,
  ) { }

    managerlist$:Observable<Manager[]>=this.managerService.list$;

  ngOnInit(): void {
    this.managerService.getAll();
  }
   onRemove(manager:Manager):void {
    this.managerService.remove(manager),
    // this.sum(),
    // this.featuredCount(),
    // this.activeCount(),
    this.router.navigate(['manager'])
  }

}
