import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let spyHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'post'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideAnimations(),
        { provide: HttpClient, useValue: spyHttpClient }
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'blackdot-address-book-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('blackdot-address-book-challenge');
  });
});
