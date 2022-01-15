import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {fakeListings} from "../fake-data";
import {Listing} from "../types";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email!: string;
  message!: string;
  listItem!: Listing | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this.listItem = fakeListings.find(listItem => listItem.id === id)
    this.message = `Hello, I am interested in buying ${this.listItem?.name.toLocaleLowerCase()}!`
  }

  sendMessage():void {
    alert('Your message has been sent');
    this.router.navigateByUrl('/listings')
  }
}
