import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxSpinnerModule } from '@hardpool/ngx-spinner';
import { DataserviceService } from './dataservice.service';
import { HttpModule } from '@angular/http';
import { UserlandingPageComponent } from './user/userlanding-page/userlanding-page.component';
import { UserRequestComponent } from './user/user-request/user-request.component';
import { UserRequestlistComponent } from './user/user-requestlist/user-requestlist.component';
import { AdminLandingpageComponent } from './admin/admin-landingpage/admin-landingpage.component';
import { AdminRequestListComponent } from './admin/admin-request-list/admin-request-list.component';
import { ShareService } from './share.service';
import { AdminRequestViewComponent } from './admin/admin-request-view/admin-request-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserlandingPageComponent,
    UserRequestComponent,
    UserRequestlistComponent,
    AdminLandingpageComponent,
    AdminRequestListComponent,
    AdminRequestViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      { path:'',pathMatch:'full',redirectTo:'home' },
      { path:'home',component:HomeComponent },
      { path:'login',component:LoginComponent },
      { path:'signup',component:RegisterComponent },
      { path:'userlanding',component:UserlandingPageComponent,
    children:[
      { path:'userReq',component:UserRequestComponent },
      { path:'',pathMatch:'full',redirectTo:'userReq' },
      { path:'userrequestList',component:UserRequestlistComponent }
    ]} ,
    { path:'adminLanding',component:AdminLandingpageComponent ,
     children:[
      { path:'',pathMatch:'full',redirectTo:'admin_requestList' },   
      { path:'admin_requestList',component:AdminRequestListComponent },
      { path:'admin_requestViewlist/:id',component:AdminRequestViewComponent }
     ]
    }
    ]) 
  ],
  providers: [DataserviceService,ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
