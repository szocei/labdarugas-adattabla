import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string, irany:boolean ): any[] | null{
    
    if (!Array.isArray(value) || !key ){
      return value;
    }
    
      return value.sort(function(a:any,b:any):any{
        if (typeof a[key]==='number' && typeof b[key]==='number'){
          if (irany){
            return  a[key]-b[key];
          }else{
           return b[key]-a[key];
          }
          
        }else
        {
          if (irany){
        return (''+a[key]).toLowerCase().localeCompare((''+b[key]).toLowerCase());

        }else
        {
          return (''+b[key]).toLowerCase().localeCompare((''+a[key]).toLowerCase());

        }
      }
    }
      )
    }

}
