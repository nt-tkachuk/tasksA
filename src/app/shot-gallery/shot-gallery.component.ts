import { Component, OnInit } from '@angular/core';
import {ShotListComponent} from "../shot-list/shot-list.component";
import {ShotService} from "../services/shot.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shot-gallery',
  templateUrl: './shot-gallery.component.html',
  styleUrls: ['./shot-gallery.component.css']
})
export class ShotGalleryComponent implements OnInit {
  arr = null;
  routeActiv;
  idVisiShop;
  activShot;

  otstupBigPanel = 320;

  hBigPanel = window.innerHeight;
  leftBigPanel = this.otstupBigPanel;
  wShot =  this.leftBigPanel;

  constructor(private route: ShotService, routeActiv: ActivatedRoute) {

    //Подгрузка данных с сервера
    this.route.getConfig().subscribe(val => {
      //debugger
      this.arr = val;
    });

    this.routeActiv = routeActiv.params.subscribe(params=>{
      //debugger
      var id = params['shotId'];
      this.someFun(id);
    });

  }

  ngOnInit() {}

  someFun(_id) {
    if (_id == undefined) {
      this.leftBigPanel = window.innerWidth;
    } else {
      this.leftBigPanel = this.otstupBigPanel;
    }
    this.wShot = this.leftBigPanel;

    var idS = this.getIdShotInArr(_id);
    if (idS != null) this.idVisiShop = idS;
  }

  //Поиск ид шота в арр по ид самого шота
  getIdShotInArr(_idShot) {
    if (this.arr == undefined) return null;
    for (var i = 0; i<this.arr; i++){
      if (this.arr[i].id == _idShot) {
        return i;
      }
    }
    return null;
  }
}
