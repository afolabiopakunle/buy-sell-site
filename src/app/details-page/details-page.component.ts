import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {fakeListings} from "../fake-data";
import {Listing} from "../types";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  id!: number;
  listItem!: Listing | undefined;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    const listItem = fakeListings.find((listing: Listing) => {
      return listing.id === id
    })
    this.listItem = listItem;
  }


}
