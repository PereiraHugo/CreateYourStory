import { Component, OnInit } from '@angular/core';
import { ApiData } from '../services/api-data.service';
import { MatListItem } from '@angular/material'

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
  alphabet: string[]= [];
  response_api = {}

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor(private myApiData: ApiData) { }

  ngOnInit() {
    this.alphabet=  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    this.myApiData.getData().subscribe(data => {
      this.response_api = data
    });
  }

}