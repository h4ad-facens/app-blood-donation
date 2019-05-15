//#region Imports

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

//#endregion

//#region Components

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

//#endregion

//#region Components

/**
 * A classe que representa a página de login
 */
export class LoginPage {

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
   * Método que realiza o login
   */
  public async performLogin(): Promise<void> {
    await this.nav.navigateRoot('become-donor');
  }

  //#endregion

}

//#endregion

