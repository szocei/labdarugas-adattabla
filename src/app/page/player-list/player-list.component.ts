import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

 playerCount:number=0;
  teamsCount:number=0;
  summa:number=0;
  playerAvg:number=0;
  
  playerlist$:BehaviorSubject<Player[]>| Observable<Player[]>=this.playerService.listP$.pipe(
    tap(players=>this.teamsCount=players.filter(x=>x.teamId>0).length),
    tap(man=>this.playerCount=man.length),
     )
      
     
     sum(): void {
   this.playerService.getAllsum().subscribe(data => {
        this.summa = data
        .map(item => item.age)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
       })
  }

   
   

  constructor(
    private playerService: PlayerService,
    private router:Router,
  ) { }
  
 irany:boolean=false;
   columnKey:string='';

onColumnSelect(key:string):void{
  this.columnKey=key;
  this.irany=!this.irany;
}

  ngOnInit(): void {
    this.playerService.getAll();
    this.playerService.getAllsum();
    //this.sum();
  }
   onRemove(player:Player):void {
    this.playerService.remove(player),
   // this.sum(),
    // this.featuredCount(),
    // this.activeCount(),
    this.router.navigate(['player'])
  }


}