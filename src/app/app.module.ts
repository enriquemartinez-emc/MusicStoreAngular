import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router';
import { AppComponent } from './app.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { declarations } from './core';
import { SharedModule } from './shared/shared.module';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github } from 'angular-feather/icons';
import { HttpClientModule } from '@angular/common/http';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
};

const ngbModules = [NgbModule, NgbToastModule];

@NgModule({
  declarations: [AppComponent, declarations],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FeatherModule.pick(icons),
    AppRoutingModule,
    ...ngbModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
