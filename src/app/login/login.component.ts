import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { ShareService } from '../share.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  constructor(public dataservice:DataserviceService, private router: Router, private shareservice:ShareService) { }

  ngOnInit() {
    this.spinnerConfig = {
      placement: SPINNER_PLACEMENT.block_window,
      animation: SPINNER_ANIMATIONS.spin_1,
      size: "5rem",
      color: "#1574b3"
  };
    this.showSpinner=true;
    if(localStorage.getItem('userdetails')){
      var name = JSON.parse(localStorage.getItem("userdetails"));
      if(name.user.role==="admin"){
        this.router.navigate(['/adminLanding']);
        this.showSpinner=false;
      }else if(name.user.role==="user"){
        this.router.navigate(["/userlanding"]);
        this.showSpinner=false;
      }
    }

    this.showSpinner=true;
    this.dataservice.getUserlist().subscribe(res=>{
    this.userList=res;
    console.log(res)
    this.showSpinner=false
    })
  }
  userData(value){
    console.log(value);
   for(let i=0;i<this.userList.length;i++){
     if(this.userList[i].email==value.email){
       if(this.userList[i].password==value.password){
        if(this.userList[i].role=='user'){
          this.shareservice.setCurrentProfile(this.userList[i]);
          localStorage.setItem('userdetails',JSON.stringify({user:this.userList[i]}));
          this.router.navigate(["/userlanding"]);
         }else if(this.userList[i].role=='admin'){
          this.shareservice.setCurrentProfile(this.userList[i]);
          localStorage.setItem('userdetails',JSON.stringify({user:this.userList[i]}));
          this.router.navigate(["/adminLanding"]);
         }
        break;
       }else{
        swal({
          title: "Password Icorrect",
          text: "You clicked the button!",
          icon: "error",
        });
         break;
       }
           }
   }
  }
}
