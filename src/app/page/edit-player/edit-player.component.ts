import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player.service';
import { TeamService } from '../../service/team.service';
import { Team } from '../../model/team';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

   player$: Observable<Player> = this.activatedRoute.params.pipe(
    switchMap( params => this.playerService.get(params.id) )
 
  );

  teamidconfig:Team=new Team();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
    private teamService:TeamService,
    ) { }
    
    search=(text$:Observable<string>)=>text$.pipe(
        debounceTime(300),
        switchMap(
          txt=>this.teamService.like('name',txt)
        )

      )
    

playerResultFormatter(team:Team):string {
  return `${team.name} ${team.country}`;
}
playerInputFormatter(team:Team):string {
  if(!team.id){
    return '';
  }
   return `${team.id} ${team.name} ${team.country}`;
  //return `${team.id}`;
}


  
  

  updating:boolean=false;

  onUpdate(form: NgForm, player: Player): void {
    if(player.id===0){
      player.teamId=this.teamidconfig.id,
      this.playerService.create(player)


    }else{
      player.teamId=this.teamidconfig.id,
      this.updating=true,
      this.playerService.update(player)
    }
    this.router.navigate(['player'])
    this.playerService.getAll()
    this.playerService.getAllsum()

    
  }
  
  ngOnInit(): void {
  }

}
