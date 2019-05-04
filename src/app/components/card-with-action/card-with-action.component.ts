//#region Imports

import { Component, EventEmitter, Input, Output } from '@angular/core';

//#endregion

//#region Components

@Component({
  selector: 'app-card-with-action',
  templateUrl: './card-with-action.component.html',
  styleUrls: ['./card-with-action.component.scss'],
})

//#endregion

//#region Class

/**
 * A classe que representa um componente que exibe um card com uma ação
 */
export class CardWithActionComponent {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor() {
    this.onClickButtonEvent = new EventEmitter(true);
  }

  //#endregion

  //#region Inputs

  /**
   * O texto exibido no botão
   */
  @Input()
  public buttonText: string;

  /**
   * O titulo do card
   */
  @Input()
  public title: string;

  /**
   * O subtitulo do card
   */
  @Input()
  public subtitle: string;

  //#endregion

  //#region Outputs

  /**
   * O evento executado quando o usuário clica no botão
   */
  @Output()
  public onClickButtonEvent: EventEmitter<void>;

  //#endregion

}

//#endregion

