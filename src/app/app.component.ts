import { Component, OnInit } from '@angular/core';
import {ShotService} from "./services/shot.service";
import {ShotsComponent} from "./shot/shots.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ // интерфес при инициализации implements OnInit{ - релиз интерфейс
  title = 'app';
  constructor() {}
  ngOnInit() {}
}
