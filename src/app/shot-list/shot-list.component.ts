import { Component, OnInit } from '@angular/core';
import {ShotService} from "../services/shot.service";
import {ShotsComponent} from "../shot/shots.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css']
})

export class ShotListComponent implements OnInit {
  hPanelShot:number = 100;
  wPanelShot:number = 100;
  arr;
  visiShot:number = 0;
  arrVisi = [];

  constructor(private shotsServ: ShotService, shotComp: ShotsComponent, routeActiv: ActivatedRoute, private router: Router) {
    this.wPanelShot = shotComp.wWrapper;
    this.hPanelShot = shotComp.hWrapper;

    //Подгрузка данных с сервера
    this.shotsServ.getConfig().subscribe(val => {
      this.arr = val;

      //debugger
      //Определить какое к-во шотов влазит на экран
      var nW = Math.floor(window.innerWidth/this.wPanelShot);
      var nH = Math.ceil(window.innerHeight/this.hPanelShot);

      this.visiShot = nW * nH;

      for (var i = 0; i<this.visiShot; i++) {
        if (this.arr[i])
          this.arrVisi.push(this.arr[i]);
      }
    });
  }

  ngOnInit() {
    const classContext = this;

      //Действие скролла для ленивой загрузки
      window.onscroll = function (event) {
        if (document.body.offsetHeight > classContext.arr.length*classContext.hPanelShot) return;

        var nW =  Math.floor(window.innerWidth/classContext.wPanelShot);
        var kol =  Math.ceil(document.documentElement.clientHeight/classContext.hPanelShot);

        var nShot = Math.ceil((window.pageYOffset + document.documentElement.clientHeight)/classContext.hPanelShot)* nW;
        classContext.visiShot = nShot>classContext.visiShot ? nShot: classContext.visiShot;

        classContext.arrVisi.length = 0;
        for (var i = 0; i<classContext.visiShot; i++){
          if (classContext.arr[i])
            classContext.arrVisi.push(classContext.arr[i]);
        }
    };
  }

  down(event){
    this.router.navigate(['/shots', event.target.id]);
  }

  downDb(event){
    this.router.navigate(['/shots', event.target.id+0]);
  }
}
