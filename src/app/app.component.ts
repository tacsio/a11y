import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YesNoButtonGroupComponent } from './shared/components/yes-no-button-group/yes-no-button-group.component';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    YesNoButtonGroupComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'a11y';
  form: FormGroup = null;

  public test = null;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: ['no'],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
