import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Manager } from '../model/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

managerUrl:string=`https://my-json-server.typicode.com/szocei/szocei.github.io/managers`;

  constructor(
    private http:HttpClient,
  ) { }

   
 list$:BehaviorSubject<Manager[]>=new BehaviorSubject<Manager[]>([]);

 getAll(): void {
     this.http.get<Manager[]>(this.managerUrl).subscribe(
       data => this.list$.next(data)
     )
    }

  getAllsum():Observable<Manager[]> {
return this.http.get<Manager[]>(this.managerUrl);
  }  
 
  get(id: number | string): Observable<Manager> {
   id = typeof id === 'string' ? parseInt(id, 10) : id;
   if (id!=0){
    return  this.http.get<Manager>(`${this.managerUrl}/${id}`);
  }
  return of(new Manager())
    }

 create(manager:Manager):void {
  this.http.post<Manager>(
    `${this.managerUrl}`,
    manager
    ).subscribe(
      () =>this.getAll()
    ); 
   }

    update(manager:Manager):void {
  this.http.patch<Manager>(
    `${this.managerUrl}/${manager.id}`,
    manager
    ).subscribe(
      () =>this.getAll()
    );
  
}

remove(manager:Manager):void {
  this.http.delete<Manager>(
    `${this.managerUrl}/${manager.id}`
    ).subscribe(
      () =>this.getAll()
    );

}

like(key:string, value:string):Observable<Manager[]>{
  key= `${key}_like`;
  const query = `${this.managerUrl}?${key}=${value}`;
  return this.http.get<Manager[]>(query)
}




}
