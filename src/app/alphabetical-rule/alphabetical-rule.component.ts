import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabetical-rule',
  templateUrl: './alphabetical-rule.component.html',
  styleUrls: ['./alphabetical-rule.component.css']
})

export class AlphabeticalRuleComponent implements OnInit {
  alphabet: string[]= [];
  
  constructor() { }

  ngOnInit() {
    this.alphabet=  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

}