import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';
@Component({
  selector: 'app-user-requestlist',
  templateUrl: './user-requestlist.component.html',
  styleUrls: ['./user-requestlist.component.css']
})
export class UserRequestlistComponent implements OnInit {
  list:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  bindData:any=[];
  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    

    this.spinnerConfig = {
      placement: SPINNER_PLACEMENT.block_window,
      animation: SPINNER_ANIMATIONS.spin_1,
      size: "5rem",
      color: "#1574b3"
  };
    this.showSpinner =true;
    var currentUserDetails = JSON.parse(localStorage.getItem("userdetails"));
    let currentUser = currentUserDetails.user.email;
    console.log(currentUser)
    this.dataservice.getuserRequest().subscribe(res=>{
    this.list=res;
    this.showSpinner=false
    for(let i=0;i<this.list.length;i++){
      if(currentUser==this.list[i].email){
        this.bindData.push(this.list[i]);
        console.log(this.bindData)
      }
    }
    })
  }

}
