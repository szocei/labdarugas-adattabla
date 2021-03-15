import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Team } from 'src/app/model/team';
import { TeamService } from 'src/app/service/team.service';


@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

   team$: Observable<Team> = this.activatedRoute.params.pipe(
    switchMap( params => this.teamService.get(params.id) )
  );

  constructor(
      private activatedRoute: ActivatedRoute,
    private teamService: TeamService,
    private router: Router,
  ) { }

  updating:boolean=false;

  onUpdate(form: NgForm, team: Team): void {
    if(team.id===0){
      this.teamService.create(team)

    }else{
      this.updating=true,
      this.teamService.update(team)
    }
    this.router.navigate(['team'])
    this.teamService.getAll()
    this.teamService.getAllsum()

    
  }

  ngOnInit(): void {
  }

}
