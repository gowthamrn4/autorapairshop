import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';
import { resolve, reject } from 'q';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show:any=3;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  base64textString = [];
  constructor(private dataservice:DataserviceService, private router: Router) { }

  ngOnInit() {
    this.spinnerConfig = {
      placement: SPINNER_PLACEMENT.block_window,
      animation: SPINNER_ANIMATIONS.spin_1,
      size: "5rem",
      color: "#1574b3"
  };
  }
  file(evt){
  
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
 
handleReaderLoaded(e) {
  this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  console.log(this.base64textString)
}
  sendData(value){
    if(this.show=='user'){
     let data ={
      email:value.email,
      name:value.name,
      password:value.password,
      role:value.role,
      vehicle1:value.vehicle1,
      vehicle2:value.vehicle2,
      profilePic:this.base64textString,
      phone:value.phone
     }
     this.showSpinner=true;
     this.dataservice.signup(data).subscribe(res=>{
      this.showSpinner=false;
      console.log('status');
      console.log(res.Status)
      if(res.id!==null){
        swal({
          title: "Regsiter Successfully",
          text: "You clicked the button!",
          icon: "success",
        }).then(()=>{
          this.router.navigate(["/login"]);
  
        })
      }
      })
    }else if(this.show=='admin'){
      this.dataservice.signup(value).subscribe(res=>{
        this.showSpinner=false;
        console.log('status');
        console.log(res.Status)
        if(res.id!==null){
          swal({
            title: "Regsiter Successfully",
            text: "You clicked the button!",
            icon: "success",
          }).then(()=>{
            this.router.navigate(["/login"]);
    
          })
        }
        })
    }
   
    //  this.showSpinner=true
  }
  change(value){
    this.show = value;
    console.log(this.show)
   }
}
