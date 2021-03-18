import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

 teamUrl:string=`http://localhost:3000/teams`;

  constructor(
    private http:HttpClient,
  ) { }

   
 teamList$:BehaviorSubject<Team[]>=new BehaviorSubject<Team[]>([]);

 getAll(): void {
     this.http.get<Team[]>(this.teamUrl).subscribe(
       data => this.teamList$.next(data)
     )
    }

  getAllsum():Observable<Team[]> {
return this.http.get<Team[]>(this.teamUrl);
  }  
 
  get(id: number | string): Observable<Team> {
   id = typeof id === 'string' ? parseInt(id, 10) : id;
   if (id!=0){
    return  this.http.get<Team>(`${this.teamUrl}/${id}`);
  }
  return of(new Team())
    }

 create(team:Team):void {
  this.http.post<Team>(
    `${this.teamUrl}`,
    team
    ).subscribe(
      () =>this.getAll()
    ); 
   }

    update(team:Team):void {
  this.http.patch<Team>(
    `${this.teamUrl}/${team.id}`,
    team
    ).subscribe(
      () =>this.getAll()
    );
  
}

remove(team:Team):void {
  this.http.delete<Team>(
    `${this.teamUrl}/${team.id}`
    ).subscribe(
      () =>this.getAll()
    );

}

like(key:string, value:string):Observable<Team[]>{
  key= `${key}_like`;
  const query = `${this.teamUrl}?${key}=${value}`;
  return this.http.get<Team[]>(query)
}


  }