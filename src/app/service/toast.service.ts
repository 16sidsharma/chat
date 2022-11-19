import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastController: ToastController
  ) { }

  async messageToast(infoMessage: string) {
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 5000,
      position: 'top',
      cssClass: 'custom-toast-message'
    });
    toast.present();
  }
}
