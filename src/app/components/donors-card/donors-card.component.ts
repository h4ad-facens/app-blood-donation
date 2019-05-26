//#region Imports

import { Component, Input } from '@angular/core';

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
  constructor() {}

  //#endregion

  //#region Inputs

  /**
   * As informações sobre o conteúdo desse componente
   */
  @Input()
  public content: DonorProxy;

  //#endregion

}
