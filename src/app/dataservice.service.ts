import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   singupData:any;
   request:any;
   baseURl = 'https://5c7fc48d12b7310014de2ad8.mockapi.io/api/v1/'
  constructor(private http:Http) { }

  signup(value){
    return this.http.post(this.baseURl+'autorepair',value)
   .pipe(map(data=>this.singupData=data.json()))
  }

  getUserlist(){
    return this.http.get(this.baseURl+'autorepair')
    .pipe(map(data=>this.singupData=data.json()))
  }

  userRequest(value){
    return this.http.post(this.baseURl+'userRequest',value)
    .pipe(map(data=>this.request=data.json()))
  }

  getuserRequest(){
    return this.http.get(this.baseURl+'userRequest')
    .pipe(map(data=>this.request=data.json()))
  }

  updateStatus(value){
    let data = {
      status:value.status
    }
    return this.http.put(this.baseURl+'userRequest/'+value.id,value)
    .pipe(map(data=>this.request=data.json()))
  }
}
