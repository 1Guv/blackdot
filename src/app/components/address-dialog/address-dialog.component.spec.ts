import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDialogComponent } from './address-dialog.component';
import { AddressService } from 'src/app/services/address.service';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AddressDialogComponent', () => {
  let component: AddressDialogComponent;
  let fixture: ComponentFixture<AddressDialogComponent>;
  let spyAddressService = jasmine.createSpyObj('AddressService', ['createAddress'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressDialogComponent],
      providers: [
        provideAnimations(),
        provideHttpClient,
        { provide: AddressService, useValue:  spyAddressService },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
