import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsAuthenticatedGuard } from './guard/isauthenticated.guard';
import { ProductsComponent } from './products/products.component';
import { HasRoleGuard } from './guard/has-role.guard';

const routes: Routes = [

 // {path:'', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[IsAuthenticatedGuard]},
  { path:'products',
    component:ProductsComponent, 
    canActivate:[IsAuthenticatedGuard, HasRoleGuard],
    data:{
      role:'ROLE_ADMIN',
    }
  }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
