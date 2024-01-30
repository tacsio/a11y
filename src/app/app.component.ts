import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YesNoButtonGroupComponent } from './shared/components/yes-no-button-group/yes-no-button-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YesNoButtonGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'a11y';
  yesNoAnswer = 'no';
}
