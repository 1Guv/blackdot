import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { HttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let spyHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post'])


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressComponent],
      providers: [
        { provide: HttpClient, useValue: spyHttpClient },
        provideAnimations()
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
