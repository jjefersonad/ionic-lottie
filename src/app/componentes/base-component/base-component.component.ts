import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss'],
})
export class BaseComponentComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {}

  async presentToastWarning(text: any) {
    const toast = await this.toastController.create({
      message: '<ion-icon name="information-circle-outline"></ion-icon> ' + text,
      duration: 20000,
      color: "warning",
      position: "top",
      cssClass: "toast-warning"
    });
    toast.present();
  }

  async presentToastSuccess(text: any) {
    const toast = await this.toastController.create({
      message: '<ion-icon name="checkmark-circle-outline"></ion-icon> '+text,
      duration: 20000,
      color: "success",
      position: "top",
      cssClass: "toast-success"
    });
    toast.present();
  }

  async presentToastError(text: any) {
    const toast = await this.toastController.create({
      message: '<ion-icon style="font-size: 30px;" name="close-circle-outline"></ion-icon> '+text,
      duration: 20000,
      color: "danger",
      position: "top",
      cssClass: "toast-error",
      keyboardClose: true
    });
    toast.present();
  }

}
