import { Component, OnInit } from '@angular/core';
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

 playerList$:BehaviorSubject<Player[]> | Observable<Player[]>=this.playerService.PlayList$;
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
  
  
  ngOnInit(): void {
    this.playerService.getAll()
   // this.playerService.getAllsum()
  }

oRemove(player:Player):void{
this.playerService.remove(player);
console.log('Mi a fasz van?');
this.router.navigate(['player']);

}



}
