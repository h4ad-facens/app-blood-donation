//#region Imports

import { Component } from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';

//#endregion

//#region Components

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

//#endregion

//#region Class

/**
 * A classe que representa a página inicial do aplicativo
 */
export class HomePage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private nav: NavController,
    private alert: AlertController,
  ) {}

  //#endregion

  //#region Public Methods

  /**
   * Método que abre a página para encontrar um doador
   */
  public async onClickFindDonor(): Promise<void> {
    await this.nav.navigateForward('all-donors');
  }

  /**
   * Método que abre a página para ver as requisições por sangue
   */
  public async onClickSeeRequests(): Promise<void> {
    await this.nav.navigateForward('see-requests');
  }

  /**
   * Método que abre a pesquisa
   */
  public async onClickSearch(): Promise<void> {
    const alert = await this.alert.create({
      message: 'Quando for implementado, ele permitirá que você filtre as noticias.',
      header: 'Sobre o filtro.',
      buttons: [
        { text: 'Ok!', handler: () => {} }
      ]
    });

    await alert.present();
  }

  /**
   * Método que adicioana post
   */
  public async onClickAddPost(): Promise<void> {
    const alert = await this.alert.create({
      message: 'Quando for implementado, ele permitirá que você adicione postagens para outros usuários verem.',
      header: 'Sobre as noticias.',
      buttons: [
        { text: 'Ok!', handler: () => {} }
      ]
    });

    await alert.present();
  }

  //#endregion

}

//#endregion

