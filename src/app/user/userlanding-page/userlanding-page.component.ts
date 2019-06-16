import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlanding-page',
  templateUrl: './userlanding-page.component.html',
  styleUrls: ['./userlanding-page.component.css']
})
export class UserlandingPageComponent implements OnInit {
  image:any;
  bindData:any;
  dp:any;
  CurrentUser:any={
    fname:'',
    email:'',
    address:'',
    city:'',
    phone:'',
    role:''
  }
  constructor(private shareservice:ShareService,public router:Router) { 
   
  }

  ngOnInit() {
    var currentUserDetails = JSON.parse(localStorage.getItem("userdetails"));
    this.bindData=currentUserDetails.user;
   this.image= currentUserDetails.user.profilePic;
   for(let i=0;i<this.image.length;i++){
    this.dp = this.image[i];
   }
  //  console.log(this.image)
  //  this.CurrentUser.fname = currentUserDetails.user.name;
  //  this.CurrentUser.email = currentUserDetails.user.email;
  //  this.CurrentUser.address = currentUserDetails.user.address;
  //  this.CurrentUser.city = currentUserDetails.user.city;
  //  this.CurrentUser.phone = currentUserDetails.user.phone;
  //  this.CurrentUser.role = currentUserDetails.user.role;
  //   console.log(this.CurrentUser)
  }
  logout(){
    localStorage.removeItem('userdetails');
    this.router.navigate(['/login'])
  }
}
