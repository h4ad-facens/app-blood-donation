//#region Imports

import { Component } from '@angular/core';

import { BloodType } from '../../models/enums/blood.type';

//#endregion

//#region Class

@Component({
  selector: 'app-request-blood',
  templateUrl: './request-blood.page.html',
  styleUrls: ['./request-blood.page.scss'],
})
/**
 * A classe que representa a página que permite a pessoa requisitar por sangue
 */
export class RequestBloodPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() {}

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

}

//#endregion
