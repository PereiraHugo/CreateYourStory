import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words-service.service';

@Component({
  selector: 'app-category-rule',
  templateUrl: './category-rule.component.html',
  styleUrls: ['./category-rule.component.css']
})
export class CategoryRuleComponent implements OnInit {
  categories: string[] = [];
  response_api = {};
  choseenCategory: string = "";
  numberWords: number = 0;

  constructor(private myWordsService: WordsService) { }

  ngOnInit() {
    this.categories = this.myWordsService.getCategory();
  }

  public retrieveWordsByCategory(event) {
    if (this.choseenCategory == "") {

    } else {
      this.myWordsService.getWordsByCategory(this.choseenCategory, this.numberWords).subscribe(data => {
        this.response_api = data
      });
    }
  }

  public getCategory(event) {
    this.choseenCategory = event;
  }

  public getNumber(event) {
    this.numberWords = parseInt(event);
  }
}
