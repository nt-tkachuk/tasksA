import { Component, OnInit } from '@angular/core';
import {ShotService} from "./services/shot.service";
import {ShotsComponent} from "./shot/shots.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ // интерфес при инициализации implements OnInit{ - релиз интерфейс
  title = 'app';
  arr;
  visiShot = 0;
  hPanelShot = 0;

  arrVisi = [];

  constructor(private shotsServ: ShotService, shotComp: ShotsComponent) {
    this.hPanelShot = shotComp.hPanel;
    this.shotsServ.getConfig().subscribe(val => {
      this.arr = val;
      this.visiShot = Math.ceil(window.innerHeight/this.hPanelShot);

      for (var i = 0; i<this.visiShot; i++) {
        if (this.arr[i])
          this.arrVisi.push(this.arr[i]);
      }
    });
  }

  ngOnInit() {
    const classContext = this;

    window.onscroll = function (event) {
      if (document.body.offsetHeight > classContext.arr.length*classContext.hPanelShot) return;

      var kol =  Math.ceil(document.documentElement.clientHeight/classContext.hPanelShot);
      var nShot = Math.ceil((window.pageYOffset+document.documentElement.clientHeight)/classContext.hPanelShot);
      classContext.visiShot = nShot>classContext.visiShot ? nShot: classContext.visiShot;

      classContext.arrVisi.length = 0;
      for (var i = 0; i<classContext.visiShot; i++){
        if (classContext.arr[i])
          classContext.arrVisi.push(classContext.arr[i]);
      }
    };
  }
}
