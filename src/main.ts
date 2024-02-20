import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      HttpClientModule
    ),
    provideHttpClient(),
    provideAnimations()
  ]
}).catch((err: any) => console.error(err));

