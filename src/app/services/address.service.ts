import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  server = 'http://localhost:5062/address';

  constructor(
    private http: HttpClient
  ) { }

  getAddress(id: string): Observable<any> {
    return this.http.get(this.server + '/' + id);
  }

  createAddress(address: Address): Observable<any> {
    return this.http.post(this.server, address);
  }
}
