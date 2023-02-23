import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Users } from '../store/users';
import {Observable} from 'rxjs';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(serviceFactory:EntityCollectionServiceFactory){
    this.userService = serviceFactory.create<Users>("User");
    this.allUsers$=this.userService.entities$;
   }
   userService: EntityCollectionService<Users> ;
  allUsers$: Observable<Users[]>;

  deleteModal:any;
  idToDelete:number=0;

  ngOnInit(): void {
    this.deleteModal=new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.userService.getAll();
  }

  openDeleteConfirm(id:number){
    this.idToDelete=id;
    this.deleteModal.show();
  }
  confirmDelete(){
    this.userService.delete(this.idToDelete)
    .subscribe(()=>{
      this.deleteModal.hide();
    }
    )
  }

}
