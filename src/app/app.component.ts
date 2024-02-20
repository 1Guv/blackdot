import { Component } from '@angular/core';
import { AddressComponent } from './components/address/address.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AddressComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blackdot-address-book-challenge';
}
