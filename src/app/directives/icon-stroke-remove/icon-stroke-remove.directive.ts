import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: 'ion-icon[src][removeSvgStroke]',
})
export class RemoveIonIconSvgStrokeDirective
  implements AfterViewInit, OnDestroy {
  private _noStrokeStyles?: HTMLStyleElement;
  private get ionIconShadowDom() {
    return (this.element.nativeElement as HTMLElement).shadowRoot;
  }
  private isBrowser: boolean;
  private get noStrokeStyles() {
    if (!this._noStrokeStyles) {
      this._noStrokeStyles = document.createElement('style');
      this._noStrokeStyles.innerHTML = `
      svg,
      .icon-inner {
        stroke: initial;
      }`;
    }

    return this._noStrokeStyles;
  }

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) platformId: string,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.applyNoStrokeStyles();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.removeNoStrokeStyles();
    }
  }

  private applyNoStrokeStyles() {
    // We have to wait for an event loop tick before the Ionic Icon shadow DOM
    // becomes accessible
    return Promise.resolve()
      .then(() => this.ionIconShadowDom.appendChild(this.noStrokeStyles));
  }

  private removeNoStrokeStyles() {
    this.ionIconShadowDom.removeChild(this.noStrokeStyles);
  }
}
