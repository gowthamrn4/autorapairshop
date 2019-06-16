import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  currentProfile:any;

  constructor() { }
  setCurrentProfile(value){
    this.currentProfile=value;
    console.log(value)
   }
   getCurrentProfile(){
    return this.currentProfile;
  }
}
