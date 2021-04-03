import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl: string = `https://my-json-server.typicode.com/szocei/szocei.github.io/pla`;
  PlayList$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);

  constructor(
    private http:HttpClient
  ) { }

getAll(): void {
    this.http.get<Player[]>(this.playerUrl).subscribe(
      data => this.PlayList$.next(data)
    )
  }

   getAllsum(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl);
  }

  get(id: number | string): Observable<Player> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    if (id !== 0) {
      return this.http.get<Player>(`${this.playerUrl}/${id}`);
    }
    return of(new Player())
  }

   create(player: Player): void {
    this.http.post<Player>(
      `${this.playerUrl}`, player).subscribe(
        () => this.getAll()
      );
  }

  update(player: Player): void {
    this.http.patch<Player>(
      `${this.playerUrl}/${player.id}`, player).subscribe(
        () => this.getAll()
      );
  }

   remove(player: Player): void {
    this.http.delete<Player>(
      `${this.playerUrl}/${player.id}`).subscribe(
        () => this.getAll()
      );
  }

like(key:string, value:string,limit:number=10):Observable<Player[]>{
  key= `${key}_like`;
  const query = `${this.playerUrl}?${key}=${value}&_limit=${limit}`;
  return this.http.get<Player[]>(query)
}




}
