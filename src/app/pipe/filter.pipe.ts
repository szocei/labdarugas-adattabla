import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

   transform(value: 
  any[] | null ,
  phrase: string,
  key: string = 'name',
  props?:{count:number
  }): any[] | null{
   
     if(!Array.isArray(value) || !phrase || !key ){
      if(Array.isArray(value) && !phrase && props?.count){

        props.count=value.length
        
      }
      return value;
     }

     phrase=(''+phrase).toLowerCase();
     
    const filtered= value.filter(item=>{
       const iKey:string=(''+item[key]).toLowerCase();
       return iKey.includes(phrase);
       });

      if(filtered.length>-1 && props?.count) {
        props.count=filtered.length
        if(props?.count>-1){
          props.count=filtered.length

        }
              }
     
      return filtered
}
}