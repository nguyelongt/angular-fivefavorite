import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  newmovie: Favorite;

  favorites: Favorite[] = [
    new Favorite("John Wick: Chapter 2"),
    new Favorite("Baywatch"),
    new Favorite("The Fate of the Furious"),
    new Favorite("Guardians of the Galaxy Vol. 2")
  ];

  addmovie(): void {
    
  }

  

  constructor() { }

  ngOnInit() {
  }

}
