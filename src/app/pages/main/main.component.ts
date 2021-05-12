import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _music = '🔊';
  private audio = new Audio('./assets/audio/sonidosRaros.mp3');


  constructor() {
  }

  ngOnInit(): void {
    this.audio.play();
  }

  changeMode(): void {
    const play = '🔊';
    const muted = '🔇';
    if (this._music === play) {
      this._music = muted;
      this.audio.pause();
    } else {
      this._music = play;
      this.audio.play();
    }
  }

  get music(): string {
    return this._music;
  }
}
