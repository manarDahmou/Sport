import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {

  players:any;
  constructor() { }

  ngOnInit() {
    this.players = [
      {id:1, name: 'Messi', nbr: 10, poste: "ATK", age: 35},
      {id:2, name: 'Buffon', nbr: 1, poste: "GK", age: 43},
      {id:3, name: 'Ramos', nbr: 4, poste: "DEF", age: 37}
    ]
  }

}
