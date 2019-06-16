import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landingpage',
  templateUrl: './admin-landingpage.component.html',
  styleUrls: ['./admin-landingpage.component.css']
})
export class AdminLandingpageComponent implements OnInit {
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
  //   let data= this.shareservice.getCurrentProfile();
  //  console.log(data);
  //  this.CurrentUser.fname = data.name;
  //  this.CurrentUser.email = data.email;
  //  this.CurrentUser.address = data.address;
  //  this.CurrentUser.city = data.city;
  //  this.CurrentUser.phone = data.phone;
  //  this.CurrentUser.role = data.role;
  //   console.log(this.CurrentUser)
  }
  logout(){
    localStorage.removeItem('userdetails');
    this.router.navigate(['/login'])
  }
}
