import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import { EntityDefinitionService } from '@ngrx/data';
import { userEntityMetadata } from './store/user-entity-metadata';
import { AddComponent } from './add/add.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { EditComponent } from './edit/edit.component';
import { UserSearchComponent } from './user-search/user-search.component';
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent,
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UsersModule { 

   constructor(entityDefinitionService : EntityDefinitionService){
    entityDefinitionService.registerMetadataMap(userEntityMetadata);
   }

}
