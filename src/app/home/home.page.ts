import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BaseComponentComponent } from '../componentes/base-component/base-component.component';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponentComponent{

  lottieConfig: any;
  constructor(
    public modalController: ModalController,
    public toastController: ToastController
  ) {
    super(toastController);
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

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async warningMessage() {
    this.presentToastWarning("Teste de alerta");
  }

  async successMessage() {
    this.presentToastSuccess("Teste de alerta");
  }

  async errorMessage() {
    this.presentToastError("Teste de alerta");
  }
  
}
