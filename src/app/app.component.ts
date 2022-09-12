import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UtentiSet';
  persone = [
    {nome: "pippo", cognome: "germano", isOnline: true, color: 'blue', livello: 2},
    {nome: "marco", cognome: "sushi", isOnline: true, color: 'red', livello: 3},
    {nome: "enzo", cognome: "anzi", isOnline: false, color: 'white', livello: 2},
    {nome: "remo", cognome: "marra", isOnline: true, color: 'black', livello: 1},
    {nome: "sten", cognome: "relo", isOnline: true, color: 'purple', livello: 0},

  ]
   onClick(){

    this.persone = [
      {nome: "sergej", cognome: "germano", isOnline: true, color: 'blue', livello: 2},
      {nome: "armando", cognome: "sushi", isOnline: true, color: 'red', livello: 3},
      {nome: "diego", cognome: "anzi", isOnline: false, color: 'white', livello: 0},
      {nome: "raul", cognome: "marra", isOnline: true, color: 'black', livello: 1},
      {nome: "blad", cognome: "relo", isOnline: true, color: 'purple', livello: 1},
    ]


   }
 
 
 
 
 
 
 




}
