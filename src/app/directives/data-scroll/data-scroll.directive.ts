//#region Imports

import { AfterContentInit, AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

//#endregion

//#region Directive

@Directive({
  selector: '[dataScroll]'
})

//#endregion

//#region Class

export class DataScrollDirective implements AfterContentInit, OnDestroy {

  //#region Constructor

  constructor(
    private elementRef: ElementRef<HTMLElement>,
  ) {}

  //#endregion

  //#region Inputs

  /**
   * O elemento em que será adicionado o atributo
   */
  @Input()
  public targetElementAttribute: HTMLElement;

  //#endregion

  //#region Private Properties

  /**
   * Método que remove o Scroll Listener adicionado ao elemento quando essa diretiva é destruida
   */
  private removeScrollListener: () => void;

  //#endregion

  //#region LifeCycle

  /**
   * Método executado após a view carregar
   */
  public ngAfterContentInit(): void {
    // Verifica se há a algum elemento com a classe .inner-scroll
    // Se tiver, indica que a diretiva está atrelada a um ion-content
    // E o container de scroll é a div com essa classe.
    const nativeElement = this.elementRef.nativeElement;
    const scrollElement = nativeElement.shadowRoot && nativeElement.shadowRoot.querySelector<HTMLElement>('.inner-scroll') || nativeElement;
    const elementTargetAttribute = this.targetElementAttribute || nativeElement;

    elementTargetAttribute.dataset.scroll = '0';

    const onScrollEvent = this.debounce((event: any) => {
      elementTargetAttribute.dataset.scroll = scrollElement.scrollTop.toString();
    });

    scrollElement.addEventListener('scroll', onScrollEvent, { passive: true });

    this.removeScrollListener = () => {
      scrollElement.removeEventListener('scroll', onScrollEvent);
    };
  }

  /**
   * Método executado quando a diretiva é destruida
   */
  public ngOnDestroy(): void {
    this.removeScrollListener && this.removeScrollListener();
  }

  //#endregion

  //#region Private Methods

  /**
   * Método que realiza um debounce correto de acordo com o frame
   *
   * @param fn A função a ser executada
   */
  private debounce(fn): (...params: any) => void {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {

      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame);
      }

      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {

        // Call our function and pass any params we received
        fn(...params);
      });
    };
  }

  //#endregion

}

//#endregion
