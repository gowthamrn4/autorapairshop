import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin-request-view',
  templateUrl: './admin-request-view.component.html',
  styleUrls: ['./admin-request-view.component.css']
})
export class AdminRequestViewComponent implements OnInit {
  id:any;
  list:any;
  bindData:any={
    name:'',
    email:'',
    phone:'',
    city:'',
    location:'',
    userPic:'',
    time:'',
    status:'',
    wheeler:'',
    wheelerNumber:''
  }
  constructor(private dataservice:DataserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getuserRequest().subscribe(res=>{
    this.list=res;
    for(let i=0;i<this.list.length;i++){
      if(this.id==this.list[i].id){
        this.bindData.name=this.list[i].name;
        this.bindData.email=this.list[i].email;
        this.bindData.phone=this.list[i].phone;
        this.bindData.city=this.list[i].city;
        this.bindData.location=this.list[i].location;
        this.bindData.wheeler=this.list[i].wheeler;
        this.bindData.wheelerNumber=this.list[i].wheelerNumber;
        this.bindData.time=this.list[i].time;
        this.bindData.status=this.list[i].status;
        this.bindData.userPic=this.list[i].userPic
      }
    }
    })
  }
  requestResponse(){
    let data = {
      id:this.id,
      status:'Completed'
    }
    this.dataservice.updateStatus(data).subscribe(res=>{
      if(res.id!==null){
        swal({
          title: "Request Completed  Successfully",
          text: "You clicked the button!",
          icon: "success",
        })
      }
    })
  }
}
