import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './page/player-list/player-list.component';
import { ManagerListComponent } from './page/manager-list/manager-list.component';
import { TeamListComponent } from './page/team-list/team-list.component';
import { EditTeamComponent } from './page/edit-team/edit-team.component';
import { EditPlayerComponent } from './page/edit-player/edit-player.component';
import { EditManagerComponent } from './page/edit-manager/edit-manager.component';
import { NavComponent } from './common/nav/nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    ManagerListComponent,
    TeamListComponent,
    EditTeamComponent,
    EditPlayerComponent,
    EditManagerComponent,
    NavComponent,
    DashboardComponent,
    SorterPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
