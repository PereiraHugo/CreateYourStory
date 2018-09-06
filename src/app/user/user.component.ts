import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../services/donnees.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  nom: string;
  age: number;
  email: string;
  hobby: hobby;

  constructor(private donnees: DonneesService) {
    this.nom = "Pereira";
    this.age = 26;
    this.email = "pereirahugo.h@gmail.com"
    this.hobby = {
      hobbyUn: "Code",
      hobbyDeux: "Sport",
      hobbyTrois: "Photo",
    }
   }

  ngOnInit() {}

  onClick () {
    alert("Aucune information supplémentaire pour le moment !")
  }
}

interface hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}