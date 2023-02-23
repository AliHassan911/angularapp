import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'add', component:AddComponent},
{path:'edit/:id', component: EditComponent},
{path:'search' , component:UserSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
