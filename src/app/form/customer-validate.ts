import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators{
    
    static forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
          return { 'nameIsForbidden': true };
        } else {
          return null;
        }
      }
    
      static forbiddenNamesAnsync(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject)=>{
          setTimeout(()=>{
            if(control.value==='Jimmy'){
              resolve({'nameIsForbiddenAnsync': true});
            }else{
              resolve(null);
            }
          } , 1500);
        });
        return promise;
      }

}