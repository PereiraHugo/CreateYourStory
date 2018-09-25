import { Component, OnInit } from '@angular/core';
import { ApiData } from '../services/api-data.service';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-alphabetical-rule',
  templateUrl: './alphabetical-rule.component.html',
  styleUrls: ['./alphabetical-rule.component.css']
})

export class AlphabeticalRuleComponent implements OnInit {
  alphabet: string[] = [];
  response_api = {};
  choseenLetter = "";
  numberWords = 0;

  constructor(private myApiData: ApiData) { }

  ngOnInit() {
    this.alphabet = this.myApiData.getAlphabet();
  }

  public retrieveDataFromApi(event) {
    if (this.choseenLetter == "") {

    } else {
      this.myApiData.getWordsByLetters(this.choseenLetter, this.numberWords).subscribe(data => {
        this.response_api = data
      });
    }
  }

  public getLetter(event) {
    this.choseenLetter = event;
  }

  public getNumber(event) {
    this.numberWords = parseInt(event);
  }
}