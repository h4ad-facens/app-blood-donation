//#region Imports

import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

import { BloodType } from '../../models/enums/blood.type';

//#endregion

//#region Components

@Component({
  selector: 'app-become-donor',
  templateUrl: './become-donor.page.html',
  styleUrls: ['./become-donor.page.scss'],
})

//#endregion

//#region Class

export class BecomeDonorPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private nav: NavController,
  ) {}

  //#endregion

  //#region Public Properties

  /**
   * Os tipos sanguíneos listados
   */
  public bloodTypes: BloodType[] = [
    BloodType.A_MINUS,
    BloodType.A_PLUS,
    BloodType.AB_MINUS,
    BloodType.AB_PLUS,
    BloodType.B_MINUS,
    BloodType.B_PLUS,
    BloodType.O_MINUS,
    BloodType.O_PLUS,
  ];

  //#endregion

  //#region Public Methods

  /**
   * Método que realiza o registro de um doador
   */
  public async registerDonor(): Promise<void> {
    await this.nav.navigateRoot('home');
  }

  //#endregion

}

//#endregion
