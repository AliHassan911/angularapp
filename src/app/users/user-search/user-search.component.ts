import { Component } from '@angular/core';
import { UserService } from '../../search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  searchTerm: string | any;
  searchResults: any[] = [];

  constructor(private userService: UserService) {}

  search() {
    this.userService.searchByEmail(this.searchTerm).subscribe(
      (data: any) => {
        this.searchResults = data as any[]; // cast the parameter type to any[]
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
