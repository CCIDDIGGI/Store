import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomepageLandingComponent } from './pages/Homepage/landing/landing.component';
import { counterReducer } from './pages/Homepage/store/reducers/homepage.reducer'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
