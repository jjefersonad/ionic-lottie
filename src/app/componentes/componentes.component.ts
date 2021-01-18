import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-lottie',
  template: `
    <main lottie [options]="options" (animationCreated)="animationCreated($event)"></main>
  `,
})
export class ComponentesComponent {
  options: AnimationOptions = {
    path: '/assets/518-twitter-favorite-heart.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}