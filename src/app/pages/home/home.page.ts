//#region Imports

import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

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
  ) {}

  //#endregion

  //#region Public Methods

  /**
   * Método que abre a página para encontrar um doador
   */
  public async onClickFindDonor(): Promise<void> {
    await this.nav.navigateForward('all-donors');
  }

  //#endregion

}

//#endregion

