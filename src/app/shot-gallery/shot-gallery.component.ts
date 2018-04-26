import { Component, OnInit } from '@angular/core';
import {ShotService} from "../services/shot.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shot-gallery',
  templateUrl: './shot-gallery.component.html',
  styleUrls: ['./shot-gallery.component.css']
})
export class ShotGalleryComponent implements OnInit {
  arr = null;
  private routeActiv;
  private idVisiShop = null;
  private activIdShot:number = -1;

  private otstupBigPanel:number = 320;
  private hBigPanel:number = window.innerHeight;
  private leftBigPanel:number = this.otstupBigPanel;
  private wShot:number =  this.leftBigPanel;

  constructor(private route: ShotService, routeActiv: ActivatedRoute) {
    //Подгрузка данных с сервера
    this.route.getConfig().subscribe(val => {
      this.arr = val;
      this.getIdShotInArr(this.activIdShot);
      this.idVisiShop
    });

    this.routeActiv = routeActiv.params.subscribe(params=>{
      var id = params['shotId'];
      this.lookForActivIdArr(id);
    });
  }
  ngOnInit() {}

  private lookForActivIdArr(_id) {
    this.activIdShot = Number(_id);
    this.leftBigPanel = _id == undefined ? window.innerWidth:this.otstupBigPanel;
    this.wShot = this.leftBigPanel;
    this.getIdShotInArr(this.activIdShot);
  }

  //Поиск ид шота в арр по ид самого шота
  getIdShotInArr(_idShot:number) {
    if (this.arr == null) return false; //мог еще не подгрузиться
    for (var i = 0; i<this.arr.length ; i++){
      if (this.arr[i].id == _idShot) {
        this.idVisiShop = i;
        return true;
      }
    }
    return false;
  }

}
