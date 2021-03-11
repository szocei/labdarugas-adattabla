import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
apiUrl:string=`http://localhost:3000/players`;

  constructor(
    private http:HttpClient,
  ) { }

   
 listP$:BehaviorSubject<Player[]>=new BehaviorSubject<Player[]>([]);

 getAll(): void {
     this.http.get<Player[]>(this.apiUrl).subscribe(
       data => this.listP$.next(data)
     )
    }

  getAllsum():Observable<Player[]> {
return this.http.get<Player[]>(this.apiUrl);
  }  
 
  get(id: number | string): Observable<Player> {
   id = typeof id === 'string' ? parseInt(id, 10) : id;
   if (id!=0){
    return  this.http.get<Player>(`${this.apiUrl}/${id}`);
  }
  return of(new Player())
    }

 create(player:Player):void {
  this.http.post<Player>(
    `${this.apiUrl}`,
    player
    ).subscribe(
      () =>this.getAll()
    ); 
   }

    update(player:Player):void {
  this.http.patch<Player>(
    `${this.apiUrl}/${player.id}`,
    player
    ).subscribe(
      () =>this.getAll()
    );
  
}

remove(player:Player):void {
  this.http.delete<Player>(
    `${this.apiUrl}/${player.id}`
    ).subscribe(
      () =>this.getAll()
    );

}





}
