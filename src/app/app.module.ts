import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router';
import { AppComponent } from './app.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { declarations } from './core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, declarations],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbToastModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
