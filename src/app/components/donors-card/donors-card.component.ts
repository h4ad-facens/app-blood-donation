//#region Imports

import { Component, Input } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { DonorProxy } from '../../models/proxys/donor.proxy';

//#endregion

//#region Components

@Component({
  selector: 'app-donors-card',
  templateUrl: './donors-card.component.html',
  styleUrls: ['./donors-card.component.scss'],

})

//#endregion

/**
 * A classe que representa o card que exibe as informações de um doador
 */
export class DonorsCardComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private alert: AlertController,
  ) {}

  //#endregion

  //#region Inputs

  /**
   * As informações sobre o conteúdo desse componente
   */
  @Input()
  public content: DonorProxy;

  //#endregion

  //#region Public Methods

  /**
   * Método que executa uma ação ao clicar no telefone
   */
  public async onClickPhone(): Promise<void> {
    const alert = await this.alert.create({
      message: 'Quando for implementado, o aplicativo redirecionará o usuário para o WhatsApp, para que possa conversar com o doador ou quem está requisitando.',
      header: 'Sobre a implementação.',
      buttons: [
        { text: 'Ok!', handler: () => {} }
      ]
    });

    await alert.present();
  }

  //#endregion

}
