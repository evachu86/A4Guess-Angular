import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Number Guessing Game';
  private imgHolder: HTMLImageElement[]

  constructor(private loc: LocationStrategy) {

    // prevent backward
    history.pushState(null, '', window.location.href);
    this.loc.onPopState(() => {
      alert('No No!🙅‍♂️ You cannot go back. The game will restart.');
      window.location.href = 'new-attempt';
    });

    // preload img
    this.imgHolder = [];
    for(let i = 0; i < 3; i++) {
      this.imgHolder[i] = new Image();
    }
    this.imgHolder[0].src = this.getImgStr('acceptation-g9da03110f_1280.png');
    this.imgHolder[1].src = this.getImgStr('see-no-evil-gb7f6a3229_1920.jpg');
    this.imgHolder[2].src = this.getImgStr('statue-g3d04c1f61_1920.jpg');
  }

  getImgStr(filename:string) {
    return `assets/img/${filename}`;
  }

}
