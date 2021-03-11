import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PlayerListComponent } from './page/player-list/player-list.component';
import { TeamListComponent } from './page/team-list/team-list.component';
import { ManagerListComponent } from './page/manager-list/manager-list.component';
import { EditPlayerComponent } from './page/edit-player/edit-player.component';
import { EditTeamComponent } from './page/edit-team/edit-team.component';
import { EditManagerComponent } from './page/edit-manager/edit-manager.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
path: 'player',
component:PlayerListComponent
  },
  {
path:'team',
component:TeamListComponent
  },
  {
    path:'manager',
    component:ManagerListComponent
  },
   {
path: 'player/:id',
component:EditPlayerComponent
  },
  {
path:'team/:id',
component:EditTeamComponent
  },
  {
    path:'manager/:id',
    component:EditManagerComponent
  },
  {
    path:'**',
    component:DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
