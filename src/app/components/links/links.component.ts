import {Component, Input, OnInit} from '@angular/core';
import {MovieLink} from "../../entities/movie-link";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Input() links: MovieLink[];

  constructor() { }

  ngOnInit(): void {
  }

}
