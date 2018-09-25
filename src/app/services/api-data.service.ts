import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiData {
  api_url = "";
  alphabet = [];
  
  constructor(private http: HttpClient) { }

  getAlphabet(){
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return this.alphabet
  }

  getData() {
    return this.http.get("http://localhost:3000/words/en")
  }
  getWordsByLetters(letter, number) {
    this.api_url = "http://localhost:3000/words/en/letters/" + letter + "?num=" + number;
    console.log(this.api_url);
    return this.http.get(this.api_url)
  }
}
