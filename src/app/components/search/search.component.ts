import { FormValidatorHintComponent } from './../../shared/components/form-validator-hint/form-validator-hint.component';
import { AddressService } from './../../services/address.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe, NgIf } from '@angular/common';
import { guidValidator } from 'src/app/validators/guid.validator';
import { Address } from 'src/app/models/address.model';
import { Subscription, catchError, map, of } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { AddressDialogComponent } from '../address-dialog/address-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    JsonPipe,
    ReactiveFormsModule,
    NgIf,
    MatSnackBarModule,
    MatCardModule,
    FormValidatorHintComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy{

  searchForm: FormGroup = new FormGroup({});
  addresses: Array<Address> = [];
  subscriptions: Subscription[] = [];

  constructor(
    private addressService: AddressService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.searchForm = new FormGroup({
      search: new FormControl(null, [Validators.required, guidValidator()])
    })
  }

  onSearch() {
    if (this.searchForm.valid) {
      this.subscriptions.push(
        this.addressService
        .getAddress(this.searchForm.get('search')?.value)
        .pipe(
          map((address: Address) => {
            address.addressId = this.searchForm.get('search')?.value;
            this.addresses.push(address);
            this.searchForm.reset();
            this.snackBar.open(`Success`, 'X', {
              duration: 2000
            });
          }),
          catchError((err: any) => {
            this.snackBar.open(`${err.statusText}`, 'X', {
              duration: 2000
            });
            return of(err)
          })
        )
        .subscribe()
      );

    }
  }

  onClear() {
    this.addresses = [];
  }

  openAddAddressDialog() {
    const addAddressDialogRef = this.dialog.open(AddressDialogComponent, {
      width: '60vw',
      height: '600px'
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub: Subscription) => sub.unsubscribe());
  }
}
