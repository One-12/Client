import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
  /**
   * Creates an instance of SafePipe.
   * @param {DomSanitizer} sanitizer
   * @memberof SafePipe
   */
  constructor(private readonly sanitizer: DomSanitizer) {}

  /**
   * Transforms value to sanitized value.
   * @param {*} value
   * @param {string} type
   * @returns {(SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl)}
   * @memberof SafePipe
   */
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
