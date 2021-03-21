import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import {tap, map} from "rxjs/operators";
import { Player } from 'src/app/model/player';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  playerCount:number=0;
  teamsCount:number=0;
  summaage:number=0;
  playerAgeAvg:number=0;
   playerfilter:{count:number}={count:0}
  
  
 playerList$:BehaviorSubject<Player[]> | Observable<Player[]>=this.playerService.PlayList$.pipe(
   tap(play=>this.teamsCount=play.filter(x=>x.teamId>0).length),
    tap(play=>this.playerCount=play.length),
    tap(playe=>this.playerfilter.count=playe.length), 

 
  )
  constructor(
    private playerService:PlayerService,
    private router:Router,
  ) { }

  irany:boolean=false;
   columnKey:string='';

onColumnSelect(key:string):void{
  this.columnKey=key;
  this.irany=!this.irany;
}

filterKey: string = 'teamId';
filterKeys: string[] = Object.keys(new Player());


   sum(): void {
   this.playerService.getAllsum().subscribe(data => {
        this.summaage = data
        .map(item => item.age)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
        this.playerAgeAvg=parseInt(''+100*this.summaage/this.playerCount)/100;

       })
  }


  
  
  ngOnInit(): void {
    this.playerService.getAll()
    this.playerService.getAllsum()
    this.sum()
   
  }



oRemove(player:Player):void{
this.playerService.remove(player);
this.router.navigate(['player']);
this.sum();

}
phrase:string='';

onChangePhrase(event:any): void{
    this.phrase = (event.target as HTMLInputElement).value;
    this.sum();
   
  
  }
 onget():void{
   this.playerService.getAll()
 }

}
