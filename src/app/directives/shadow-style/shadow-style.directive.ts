//#region Imports

import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

//#endregion

//#region Directives

@Directive({
  selector: '[shadowStyle]'
})

//#endregion

/**
 * A classe que representa a diretiva que adiciona um style para o componente com shadow root
 */
export class ShadowStyleDirective implements AfterContentInit {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private element: ElementRef<HTMLElement>,
  ) {}

  //#endregion

  //#region Private Properties

  /**
   * O estilo a ser aplicado
   */
  private shadowStyleString: string;

  /**
   * A identificação do estilo para ser atualizado
   */
  private shadowStyleId: string;

  //#endregion

  //#region Public Properties

  /**
   * A propriedade de style que será aplicada dentro do componente
   */
  @Input()
  public set shadowStyle(style: string) {
    this.shadowStyleString = style;

    if (!this.shadowStyleId)
      return;

    setTimeout(() => this.updateStyle());
  }

  //#endregion

  //#region Public Methods

  /**
   * O método executado após o conteúdo da página carregar
   */
  public ngAfterContentInit(): void {
    const shadow = this.element.nativeElement.shadowRoot;

    if (!shadow) {
      setTimeout(() => this.ngAfterContentInit(), 100);

      return;
    }

    const style = document.createElement('style');

    style.id = this.shadowStyleId = Math.random().toString(36).slice(-5);

    shadow.insertBefore(style, shadow.querySelector('style'));

    setTimeout(() => this.updateStyle());
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que atualiza o estilo do componente
   */
  private updateStyle(): any {
    const shadow = this.element.nativeElement.shadowRoot;

    if (!shadow)
      return setTimeout(() => this.updateStyle(), 100);

    const style = shadow.getElementById(this.shadowStyleId);

    if (!style)
      return;

    if (!this.shadowStyleString)
      throw new Error('Essa diretiva não pode ser usada sem ser passado algum estilo.');

    requestAnimationFrame(() => style.innerHTML = this.shadowStyleString);
  }

  //#endregion

}
