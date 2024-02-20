import { TestBed } from '@angular/core/testing';
import { AddressService } from './address.service';
import { HttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AddressService', () => {
  let service: AddressService;
  let spyHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideAnimations(),
        { provide: HttpClient, useValue: spyHttpClient }
       ]
    });
    service = TestBed.inject(AddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
