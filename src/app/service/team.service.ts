import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

 //teamUrl:string=`http://localhost:3000/teams`;
 //teamUrl:string="../../../server/player.json/teams" ;

public teams:Team[] =[
    {
      id: 1,
      name: "Inter",
      country: "Italy",
      city: "Milano",
    bajnok: 20,
      kupa: 19,
      ertek: 4438353,
      color1: "primary",
      color2: "dark"
    },
    {
      id: 2,
      name: "Steaua",
      country: "Románia",
      city: "Bukarest",
      bajnok: 12,
      kupa: 5,
      ertek: 4303617,
      color1: "secondary",
      color2: "danger"
    },
    {
      id: 3,
      name: "MLS All-Stars",
      country: "United States",
      city: "San Luis",
      bajnok: 7,
      kupa: 5,
      ertek: 2041162,
      color1: "primary",
      color2: "dark"
    },
    {
      id: 4,
      name: "Minneapolis City",
      country: "United States",
      city: "Hamilton",
      bajnok: 1,
      kupa: 5,
      ertek: 2476523,
      color1: "primary",
      color2: "light"
    },
    {
      id: 5,
      name: "Minnesota United",
      country: "United States",
      city: "Chubek",
      bajnok: 6,
      kupa: 1,
      ertek: 3291902,
      color1: "warning",
      color2: "danger"
    },
    {
      id: 6,
      name: "Atlético Madrid",
      country: "Spain",
      city: "Madrid",
      bajnok: 9,
      kupa: 16,
      ertek: 3527687,
      color1: "danger",
      color2: "light"
    },
    {
      id: 7,
      name: "Borussia Dortmund",
      country: "Deutchland",
      city: "Dortmund",
      bajnok: 6,
      kupa: 11,
      ertek: 1928542,
      color1: "warning",
      color2: "dark"
    },
    {
      id: 8,
      name: "Schalke 04",
      country: "Deutchland",
      city: "Gelsenkirchen",
      bajnok: 13,
      kupa: 0,
      ertek: 1208906,
      color1: "light",
      color2: "primary"
    },
    {
      id: 9,
      name: "FC Barcelona",
      country: "Spain",
      city: "Barcelona",
      bajnok: 20,
      kupa: 20,
      ertek: 3317150,
      color1: "primary",
      color2: "danger"
    },
    {
      id: 10,
      name: "Haladás",
      country: "Magyarország",
      city: "Szombathely",
      bajnok: 0,
      kupa: 12,
      ertek: 959992,
      color1: "success",
      color2: "light"
    },
    {
      id: 14,
      name: "AC Milan",
      country: "Italy",
      city: "Milano",
      bajnok: 1,
      kupa: 14,
      ertek: 741785,
      color1: "danger",
      color2: "dark"
    },
    {
      id: 15,
      name: "Michigan Bucks",
      country: "Spanyolország",
      city: "Cireundang",
      bajnok: 0,
      kupa: 25,
      ertek: 3094627,
      color1: "light",
      color2: "warning"
    },
    {
      id: 16,
      name: "Liverpool",
      country: "England",
      city: "Liverpool",
      bajnok: 13,
      kupa: 9,
      ertek: 3752652,
      color1: "danger",
      color2: "danger"
    },
    {
      id: 18,
      name: "Motown",
      country: "Dánia",
      city: "Wuli",
      bajnok: 12,
      kupa: 10,
      ertek: 1314761,
      color1: "light",
      color2: "info"
    },
    {
      id: 19,
      name: "Montreal Impact",
      country: "Dánia",
      city: "Eguia",
      bajnok: 10,
      kupa: 4,
      ertek: 1118953,
      color1: "success",
      color2: "light"
    },
    {
      id: 22,
      name: "Norwich",
      country: "England",
      city: "Norwich",
      bajnok: 11,
      kupa: 15,
      ertek: 4291783,
      color1: "success",
      color2: "warning"
    },
    {
      id: 23,
      name: "Diósgyőr",
      country: "HUNGARY",
      city: "Miskolc",
      bajnok: 11,
      kupa: 23,
      ertek: 834249,
      color1: "light",
      color2: "danger"
    },
    {
      id: 24,
      name: "New Orleans Jesters",
      country: "Hollandia",
      city: "Kęty",
      bajnok: 17,
      kupa: 1,
      ertek: 1349746,
      color1: "danger",
      color2: "light"
    },
    {
      id: 27,
      name: "Győri ETO FC",
      country: "HUNGARY",
      city: "Győr ",
      bajnok: 4,
      kupa: 4,
      ertek: 1077437,
      color1: "success",
      color2: "light"
    },
    {
      id: 28,
      name: "Atlético Madrid",
      country: "Spanyolország",
      city: "Jingkou",
      bajnok: 7,
      kupa: 11,
      ertek: 69662,
      color1: "danger",
      color2: "success"
    },
    {
      id: 29,
      name: "Ajax",
      country: "Hollandia",
      city: "Amszterdam",
      bajnok: 30,
      kupa: 21,
      ertek: 4135194,
      color1: "danger",
      color2: "light"
    },
    {
      id: 30,
      name: "Róma",
      country: "Italy",
      city: "Roma ",
      bajnok: 9,
      kupa: 12,
      ertek: 4322684,
      color1: "danger",
      color2: "light"
    },
    {
      id: 31,
      name: "Börcs FC",
      country: "Magyarország",
      city: "Börcs",
      bajnok: 0,
      kupa: 0,
      ertek: 20000,
      color1: "success",
      color2: "light"
    },
    {
      id: 32,
      name: "Gyafa",
      country: "Magyarország",
      city: "Győrasszonyfa",
      bajnok: 0,
      kupa: 0,
      ertek: 19000,
      color1: "primary",
      color2: "light"
    }
  ]










  constructor(
    private http:HttpClient,
  ) { }

   
 teamList$:BehaviorSubject<Team[]>=new BehaviorSubject<Team[]>(this.teams);

getAll(): void {
    this.teamList$.next(this.teams);
  }

  getAllsum():Observable<Team[]> {
return  of(this.teamList$.value);
  }  
  

get(id: number | string): Observable<Team | undefined > {
    id = parseInt(('' + id), 10);
    return of( this.teamList$.value.find( item => item.id === id ) );
  }




  update(team: Team): void {
    const index: number = this.teams.findIndex( item => item.id === team.id );
    this.teams.splice(index, 1, team);
    this.getAll();
  }
  
  create(team: Team): void {
    // const index: number = this.teams.findIndex( item => item.id === 0 );
    this.teams.push(team);
    this.getAll();
  }



remove(team: Team): void {
    const index = this.teams.findIndex( item => item.id === team.id );
    this.teams.splice(index, 1);
  }


like(key:string, value:string):Observable<Team[]>{
  key= `${key}_like`;
  const query = `${this.teams}?${key}=${value}`;
  return this.http.get<Team[]>(query)}


//  getAll(): void {
//      this.http.get<Team[]>(this.teamUrl).subscribe(
//        data => this.teamList$.next(data)
//      )
//     }

//   getAllsum():Observable<Team[]> {
// return this.http.get<Team[]>(this.teamUrl);
//   }  
 
//   get(id: number | string): Observable<Team> {
//    id = typeof id === 'string' ? parseInt(id, 10) : id;
//    if (id!=0){
//     return  this.http.get<Team>(`${this.teamUrl}/${id}`);
//   }
//   return of(new Team())
//     }

//  create(team:Team):void {
//   this.http.post<Team>(
//     `${this.teamUrl}`,
//     team
//     ).subscribe(
//       () =>this.getAll()
//     ); 
//    }

//     update(team:Team):void {
//   this.http.patch<Team>(
//     `${this.teamUrl}/${team.id}`,
//     team
//     ).subscribe(
//       () =>this.getAll()
//     );
  
// }

// remove(team:Team):void {
//   this.http.delete<Team>(
//     `${this.teamUrl}/${team.id}`
//     ).subscribe(
//       () =>this.getAll()
//     );

// }

// like(key:string, value:string):Observable<Team[]>{
//   key= `${key}_like`;
//   const query = `${this.teamUrl}?${key}=${value}`;
//   return this.http.get<Team[]>(query)
// }


}