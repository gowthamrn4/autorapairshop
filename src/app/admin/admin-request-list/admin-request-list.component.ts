import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
@Component({
  selector: 'app-admin-request-list',
  templateUrl: './admin-request-list.component.html',
  styleUrls: ['./admin-request-list.component.css']
})
export class AdminRequestListComponent implements OnInit {
  list:any;
  bindData:any=[];
  constructor(private dataservice:DataserviceService) { }

  ngOnInit() {
    this.dataservice.getuserRequest().subscribe(res=>{
    this.list=res;
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].status=='Pending'){
        this.bindData.push(this.list[i])
      }
    }
    })
  }
  
}
