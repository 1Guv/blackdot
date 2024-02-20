import { FormValidatorHintComponent } from './../../shared/components/form-validator-hint/form-validator-hint.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { catchError, map, of } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';
import { postcodeValidator } from 'src/app/validators/guid.validator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-address-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormValidatorHintComponent
  ],
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss'
})
export class AddressDialogComponent implements OnInit{

  addAddressForm: FormGroup = new FormGroup({});

  constructor(
    private addressService: AddressService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddressDialogComponent>,
  ) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.addAddressForm = new FormGroup({
      addressee: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      street1: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      street2: new FormControl(null, [Validators.minLength(1), Validators.maxLength(50)]),
      town: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      county: new FormControl(null, [Validators.minLength(1), Validators.maxLength(50)]),
      postcode: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(8), postcodeValidator()]),
    })
  }

  onSaveAddress() {
    if (this.addAddressForm.valid) {
      this.addressService
        .createAddress(this.addAddressForm.value)
        .pipe(
          map((resp: Address) => {
            if (resp.addressId) {
              this.snackBar.open(`Success > GUID ${resp?.addressId}`, 'X', {});
              this.closeDialog();
              // this.dialogRef.close();
            }
          }),
          catchError((err: any) => {
            this.snackBar.open(`${err.statusText}`, 'X', {
              duration: 2000
            });
            return of(err);
          })
        )
        .subscribe()
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
