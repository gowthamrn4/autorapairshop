import { Component, OnInit ,ViewChild} from '@angular/core';
import { ShareService } from '../../share.service';
import swal from 'sweetalert';
import { DataserviceService } from '../../dataservice.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {
  @ViewChild('myForm') myForm;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  CurrentUser:any={
    fname:'',
    email:'',
    address:'',
    city:'',
    phone:'',
    role:''
  }
  see:any=3;
  display:any=1;
  bindData:any;
  image:any;
  dp:any;
  constructor(private shareservice:ShareService,private dataservice:DataserviceService) { 
   
  }

  ngOnInit() {
    
    this.spinnerConfig = {
      placement: SPINNER_PLACEMENT.block_window,
      animation: SPINNER_ANIMATIONS.spin_1,
      size: "5rem",
      color: "#1574b3"
  };


    var currentUserDetails = JSON.parse(localStorage.getItem("userdetails"));
    this.bindData=currentUserDetails.user;
    // console.log(data);
    // this.CurrentUser.fname = data.name;
    // this.CurrentUser.email = data.email;
    // this.CurrentUser.address = data.address;
    // this.CurrentUser.city = data.city;
    // this.CurrentUser.phone = data.phone;
    // this.CurrentUser.role = data.role;
    //  console.log(this.CurrentUser)
    var currentUserDetails = JSON.parse(localStorage.getItem("userdetails"));
    this.bindData=currentUserDetails.user;
   this.image= currentUserDetails.user.profilePic;
   for(let i=0;i<this.image.length;i++){
    this.dp = this.image[i];
   }
  }
  change(value){
    this.see = value;
   }
   userRequest(value){
     this.showSpinner=true;
    let now = new Date();
     let data = {
       city:value.city,
       email:value.email,
       name:value.name,
       phone:value.phone,
       wheeler:value.wheeler,
       wheelerNumber:value.wheelerNumber.toUpperCase(),
       location:value.location,
       time:now,
       userPic:this.dp,
       status:'Pending'
     }
    console.log(data)
    this.dataservice.userRequest(data).subscribe(res=>{
      if(res.id!==null){
        this.showSpinner=false
        swal({
          title: "Request Sent Successfully",
          text: "You clicked the button!",
          icon: "success",
        }).then(()=>{
         this.myForm.reset();
        })
      }
    })
   }
}
