import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ServiceListingComponent } from './service-listing/service-listing.component';
import { ServiceDisplayComponent } from './service-display/service-display.component';
import { ServiceResultsComponent } from './service-results/service-results.component';

const routes: Routes = [
  { path: '', component: SearchFilterComponent },
  { path: '', component: ServiceListingComponent},
  { path: 'display', component: ServiceDisplayComponent },
  { path: 'results', component: ServiceResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
