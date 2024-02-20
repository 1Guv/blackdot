import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-validator-hint',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  styleUrl: './form-validator-hint.component.scss',
  template: `
     @if (!!customValidatorName && !!customValidatorErrorMessage && form.get(fieldControlName)?.hasError(customValidatorName)) {
          <mat-error class="mat-error">{{ customValidatorErrorMessage }}</mat-error>
      }

      @if (required && form.get(fieldControlName)?.hasError('required') && form.get(fieldControlName)?.touched) {
            <mat-error class="mat-error">{{ fieldName }} is required</mat-error>
      }

      @if (checkMax && form.get(fieldControlName)?.value?.length > max) {
        <mat-error class="mat-error">{{ fieldName }} has to be between 1-50 characters</mat-error>
      }
  `
})
export class FormValidatorHintComponent {

  @Input() fieldName: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() fieldControlName: string = '';
  @Input() customValidatorName: string = '';
  @Input() required: boolean = false;
  @Input() customValidatorErrorMessage: string = '';
  @Input() checkMax: boolean = false;
  @Input() checkMin: boolean = false;
  @Input() max: number = 0;
  @Input() min: number = 0;



}
