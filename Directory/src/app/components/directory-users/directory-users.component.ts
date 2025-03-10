import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../core/services/directory.service';

@Component({
  selector: 'app-directory-users',
  standalone: false,
  
  templateUrl: './directory-users.component.html',
  styleUrl: './directory-users.component.css'
})
export class DirectoryUsersComponent implements OnInit{

  users: any[] = [];

  constructor(private directoryService : DirectoryService) {}

  ngOnInit():void {
    this.directoryService.fetchUser().subscribe((response:any) => {
      this.users = response.data;
    }, 
    (error) => {
      console.log("Error", error);
    })
  }

}
