import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  standalone: true,
  imports: [],
  templateUrl: './yes-no-button-group.component.html',
  styleUrl: './yes-no-button-group.component.css',
})
export class YesNoButtonGroupComponent {
  @Input()
  public value: string = null;

  @Input()
  public label: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public options = YesNoButtonGroupOptions;

  activate(value) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
