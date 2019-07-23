import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorDisplayService } from './vendor-display.service';
import { HttpClientModule, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { ServiceDisplayComponent } from './service-display/service-display.component';
import { ServiceResultsComponent } from './service-results/service-results.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    ServiceListingComponent,
    ServiceDisplayComponent,
    ServiceResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
