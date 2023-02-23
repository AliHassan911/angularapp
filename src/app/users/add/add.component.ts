import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Users } from '../store/users';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

   constructor(serviceFactory:EntityCollectionServiceFactory , private router : Router){
    this.userService = serviceFactory.create<Users>("User");

   }
   userService: EntityCollectionService<Users> ;


   usersForm : Users={
     id: 0,
     name: '',
     username: '',
     phone: 0,
     email: ''
   }

  ngOnInit(): void {
  }

  save(){
   this.userService.add(this.usersForm).subscribe(()=>{
   this.router.navigate(["/"]);
   })
  }

}
