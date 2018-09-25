import { Component, OnInit } from '@angular/core';
import { WordsService } from '../services/words-service.service';

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
  choseenLetter : string = "";
  numberWords : number = 0;

  constructor(private myWordsService: WordsService) { }

  ngOnInit() {
    this.alphabet = this.myWordsService.getAlphabet();
  }

  public retrieveWordsByLetter(event) {
    if (this.choseenLetter == "") {

    } else {
      this.myWordsService.getWordsByLetters(this.choseenLetter, this.numberWords).subscribe(data => {
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