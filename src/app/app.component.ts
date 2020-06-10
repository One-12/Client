import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'One12';

  public canShowScrollToTopButton: boolean;

  constructor() {
    console.log('   \\  X  / _   ) _  _   _ _   _    _)_ _  ');
    console.log('    \\/ \\/ )_) ( (_ (_) ) ) ) )_)   (_ (_) ');
    console.log('         (_                 (_            ');

    console.log(' .88888.  888888ba   88888888b    d88  d8888b. ');
    console.log('d8\'   `8b 88    `8b  88            88      `88 ');
    console.log('88     88 88     88 a88aaaa        88  .aaadP\' ');
    console.log('88     88 88     88  88            88  88\'     ');
    console.log('Y8.   .8P 88     88  88            88  88.     ');
    console.log(' `8888P\'  dP     dP  88888888P    d88P Y88888P ');
  }

  @HostListener('window:scroll')
  public checkCanScrollToTop(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.canShowScrollToTopButton = scrollPosition >= 100;
  }

  public onScrollToTopButtonClicked(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
