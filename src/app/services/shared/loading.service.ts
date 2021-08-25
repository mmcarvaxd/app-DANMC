import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: HTMLIonLoadingElement
  constructor(private loadingController: LoadingController) { }

  public async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Buscando informações....',
      duration: 5000
    });
    await this.loading.present();
  }

  public async dismissLoading() {
    await this.loading.dismiss()
  }
}
