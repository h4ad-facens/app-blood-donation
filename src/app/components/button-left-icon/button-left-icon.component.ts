//#region Imports

import { Component, Input } from '@angular/core';

//#endregion

//#region Components

@Component({
  selector: 'app-button-left-icon',
  templateUrl: './button-left-icon.component.html',
  styleUrls: ['./button-left-icon.component.scss'],
})

//#endregion

//#region Class

/**
 * A classe que representa o componente que exibe um botão com um icone do lado
 */
export class ButtonLeftIconComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() { }

  //#endregion

  //#region Inputs

  /**
   * O nome do icone a ser exibido
   */
  @Input()
  public icon: string;

  /**
   * A cor do botão
   */
  @Input()
  public color: string = 'primary';

  /**
   * O formato do botão
   */
  @Input()
  public expand: string = 'block';

  //#endregion

}

//#endregion
