import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  standalone: true,
  imports: [],
  templateUrl: './yes-no-button-group.component.html',
  styleUrl: './yes-no-button-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {
  @Input()
  public value: string = null;

  @Input()
  public label: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public options = YesNoButtonGroupOptions;

  public onChange = (value: string) => {};
  public onTouched = () => {};

  activate(value) {
    this.writeValue(value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
