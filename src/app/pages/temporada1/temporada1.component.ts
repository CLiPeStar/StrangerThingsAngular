import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-temporada1',
  templateUrl: './temporada1.component.html',
  styleUrls: ['./temporada1.component.scss']
})
export class Temporada1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  reproduce(e: any): void {
    const d = document;
    const $trailerArea: any = d.getElementById('trailer');
    if (e.target.matches('.play') || e.target.matches(`.play *`)) {
      $trailerArea.classList.toggle('active');
    }
  }

  stopFilm(): void {
    const d = document;
    const $trailerArea = d.getElementById('trailer');
    const $film: any = d.getElementById('film');
    $trailerArea.classList.toggle('active');
    $film.pause();
    $film.currentTime = 0;

  }

  log(e: Event): void {
    console.log(e.target);
  }
}
