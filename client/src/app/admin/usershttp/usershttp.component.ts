import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { ProductsService } from '../../service/products.service';
@Component({
  selector: 'app-usershttp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usershttp.component.html',
  styleUrl: './usershttp.component.css',
})
export class UsershttpComponent implements OnInit {
  users: any = [];
  constructor(private userService: ProductsService){}
  ngOnInit(): void {
    this.userService.getAllData().subscribe((data: any)=>{
      this.users = data;
    })
  }

  search(search: NgForm){
    let q = search.value.q;
    this.userService.getDataByQuery(q).subscribe((data: any)=>{
      this.users = data;
    })
  }
}
