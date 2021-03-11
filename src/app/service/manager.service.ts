import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Manager } from '../model/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

apiUrl:string=`http://localhost:3000/managers`;

  constructor(
    private http:HttpClient,
  ) { }

   
 list$:BehaviorSubject<Manager[]>=new BehaviorSubject<Manager[]>([]);

 getAll(): void {
     this.http.get<Manager[]>(this.apiUrl).subscribe(
       data => this.list$.next(data)
     )
    }

  getAllsum():Observable<Manager[]> {
return this.http.get<Manager[]>(this.apiUrl);
  }  
 
  get(id: number | string): Observable<Manager> {
   id = typeof id === 'string' ? parseInt(id, 10) : id;
   if (id!=0){
    return  this.http.get<Manager>(`${this.apiUrl}/${id}`);
  }
  return of(new Manager())
    }

 create(manager:Manager):void {
  this.http.post<Manager>(
    `${this.apiUrl}`,
    manager
    ).subscribe(
      () =>this.getAll()
    ); 
   }

    update(manager:Manager):void {
  this.http.patch<Manager>(
    `${this.apiUrl}/${manager.id}`,
    manager
    ).subscribe(
      () =>this.getAll()
    );
  
}

remove(manager:Manager):void {
  this.http.delete<Manager>(
    `${this.apiUrl}/${manager.id}`
    ).subscribe(
      () =>this.getAll()
    );

}





}
