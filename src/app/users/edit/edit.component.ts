import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { combineLatest } from 'rxjs';
import { Users } from '../store/users';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 

  constructor(serviceFactory:EntityCollectionServiceFactory , private router : Router,
    private route: ActivatedRoute){
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
    let fetchFormData= combineLatest(
     [
      this.route.paramMap,
      this.userService.entities$
     ]
    ).subscribe(([params ,usersFromStore])=>{
      var id=Number(params.get('id'));
      var filtedUser=usersFromStore.filter((c)=>c.id==id)
      if(filtedUser){
        this.usersForm={...filtedUser[0]}
      }else{
        this.router.navigate(['/']);
      }
    })
  }

  update(){
   this.userService.update(this.usersForm)
   .subscribe(()=>{
    this.router.navigate(['/']);
   })
  }

}
