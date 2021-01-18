import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lottieConfig: any;
  constructor(public modalController: ModalController) {

  }

  ngAfterViewInit() {
    this.lottieConfig = {
      path: 'assets/518-twitter-favorite-heart.json',
      autoplay: true,
      loop: true
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
