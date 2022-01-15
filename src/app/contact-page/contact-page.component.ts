import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email!: string;
  message!: string;
  listing!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

}
