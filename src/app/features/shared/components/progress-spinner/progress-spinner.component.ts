import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'one12-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressSpinnerComponent {
  @Input() label = 'Loading';
}
