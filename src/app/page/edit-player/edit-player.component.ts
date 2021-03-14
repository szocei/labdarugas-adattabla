import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Player } from 'src/app/model/player';
import { PlayerService } from 'src/app/service/player.service';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

   player$: Observable<Player> = this.activatedRoute.params.pipe(
    switchMap( params => this.playerService.get(params.id) )
  );

  constructor(
      private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router,
  ) { }

  updating:boolean=false;

  onUpdate(form: NgForm, player: Player): void {
    if(player.id===0){
      this.playerService.create(player)

    }else{
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
