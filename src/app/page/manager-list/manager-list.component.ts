import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../../service/manager.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Manager } from 'src/app/model/manager';
import { isNgTemplate } from '@angular/compiler';
import {tap, map} from "rxjs/operators";

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit {
  
  managerCount:number=0;
  teamsCount:number=0;
  summa:number=0;
  managerAvg:number=0;
  
  managerlist$:BehaviorSubject<Manager[]>| Observable<Manager[]>=this.managerService.list$.pipe(
    tap(managers=>this.teamsCount=managers.filter(x=>x.teamid>0).length),
    tap(man=>this.managerCount=man.length),
     )


      sum(): void {
   this.managerService.getAllsum().subscribe(data => {
        this.summa = data
        .map(item => item.age)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
       })
  }

   
   

  constructor(
    private managerService: ManagerService,
    private router:Router,
  ) { }

   

  ngOnInit(): void {
    this.managerService.getAll();
    this.managerService.getAllsum();
    this.sum();
  }
   onRemove(manager:Manager):void {
    this.managerService.remove(manager),
    this.sum(),
    // this.featuredCount(),
    // this.activeCount(),
    this.router.navigate(['manager'])
  }


}
