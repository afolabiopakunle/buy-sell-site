import { Component, OnInit } from '@angular/core';
import {Listing} from "../types";
import {fakeMyListings} from "../fake-data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  myListings: Listing[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myListings = fakeMyListings;
    const id = this.route.snapshot.params.id
  }

  onDeleteClicked(listingId: string) {
    alert(`Deleting your ${listingId}`)
  }
}
