import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit{
  items: any[] = [];

  constructor(private router: Router, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((data: any) => {
        this.items = data;
        this.items.forEach(item => {
          console.log(item);
        })
    });
  }
    
  }