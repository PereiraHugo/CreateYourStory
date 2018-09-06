import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-rule',
  templateUrl: './category-rule.component.html',
  styleUrls: ['./category-rule.component.css']
})
export class CategoryRuleComponent implements OnInit {
  categories: string[]= [];
  constructor() { }

  ngOnInit() {
    this.categories = ['Horror','Romantic','Aventure','Realistic','Futuristic','Suspense','Heroic'];
  }

}
