import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingsPageComponent} from "./listings-page/listings-page.component";
import {DetailsPageComponent} from "./details-page/details-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {EditListingComponent} from "./edit-listing/edit-listing.component";
import {MyListingsPageComponent} from "./my-listings-page/my-listings-page.component";
import {NewListingsComponent} from "./new-listings/new-listings.component";

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path: 'listings/:id', component: DetailsPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
  {path: 'my-listings', component: MyListingsPageComponent},
  {path: 'new-listing', component: NewListingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
