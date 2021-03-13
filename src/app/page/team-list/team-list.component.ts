import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { isNgTemplate } from '@angular/compiler';
import {tap, map} from "rxjs/operators";
import { Team } from 'src/app/model/team';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
 teamCount:number=0;
  
  teamfilter:{count:number}={count:0}
  
  teamlist$:BehaviorSubject<Team[]>| Observable<Team[]>=this.teamService.teamList$.pipe(
    tap(teams=>this.teamCount=teams.filter(x=>x.id>0).length),
    tap(tea=>this.teamfilter.count=tea.length), 
     )
    filterKey: string = 'name';
filterKeys: string[] = Object.keys(new Team());

 constructor(
    private teamService: TeamService,
    private router:Router,
  ) { }
  
 irany:boolean=false;
   columnKey:string='';

onColumnSelect(key:string):void{
  this.columnKey=key;
  this.irany=!this.irany;
}

  ngOnInit(): void {
    this.teamService.getAll();
    this.teamService.getAllsum();
    // this.sum();
  }
oRemove(team:Team):void{
this.teamService.remove(team);
this.router.navigate(['team']);
// this.sum();

}
phrase:string='';

onChangePhrase(event:any): void{
    this.phrase = (event.target as HTMLInputElement).value;
    // this.sum();
   
  
  }
 onget():void{
   this.teamService.getAll()
 }

}
