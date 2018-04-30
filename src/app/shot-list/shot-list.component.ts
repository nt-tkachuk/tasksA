/* Компонет в котором инициилизируется, заполняется компоненты шот
* данные приходять с шотСервис
* Осуществляется подрузка шотов в завсимости от прокрутки скролл
* */
import { Component, OnInit, Input } from '@angular/core';
import {ShotService} from "../services/shot.service";
import {ShotsComponent} from "../shot/shots.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css']
})

export class ShotListComponent implements OnInit {

  _width:number = 100;
  _height:number = 100;

  arr = null;
  private arrVisi = []; // массив который будет отображаться. Зависит от скролл
  private visiShot:number = 0; // к-во видимых элементов
  private hPanelShot:number = 100;
  private wPanelShot:number = 100;

  private otstupShot:number = 0; // to do убрать

  constructor(private shotsServ: ShotService, shotComp: ShotsComponent, routeActiv: ActivatedRoute, private router: Router) {
    this.wPanelShot = shotComp.wWrapper = 300;
    this.hPanelShot = shotComp.hWrapper = 200;
    this.otstupShot = shotComp.otstup;

    //Подгрузка данных с сервера
    this.shotsServ.getConfig().subscribe(val => {
      this.arr = val;
      this.getStartArrVisiShot();
    });
  }

  //Определить какое к-во шотов влазит на экран при старте
  getStartArrVisiShot():void {
    if (this.arr == null) return;
    var nW = Math.floor(this._width/(this.wPanelShot+this.otstupShot));
    var nH = Math.ceil(window.innerHeight/(this.hPanelShot+this.otstupShot));

    this.visiShot = nW * nH;
    for (var i = 0; i<this.visiShot; i++) {
      if (this.arr[i])
        this.arrVisi.push(this.arr[i]);
    }
  }

  ngOnInit() {
    const classContext = this;
    this.getStartArrVisiShot();

    window.onscroll = function (event) {//= this.myScroll ?
      if (classContext.arr == null) return;
      if (document.body.offsetHeight > classContext.arr.length*classContext.hPanelShot) return;

      var nW =  Math.floor(classContext._width/classContext.wPanelShot);
      var kol =  Math.ceil(document.documentElement.clientHeight/classContext.hPanelShot);

      var nShot = Math.ceil((window.pageYOffset + document.documentElement.clientHeight)/classContext.hPanelShot)* nW;
      classContext.visiShot = nShot>classContext.visiShot ? nShot: classContext.visiShot;

      classContext.arrVisi.length = 0;
      for (var i = 0; i<classContext.visiShot; i++){
        if (classContext.arr[i])
          classContext.arrVisi.push(classContext.arr[i]);
      }
    }
  }

  down(event){
    console.trace("id",  event.target.id);
    this.router.navigate(['/shots', event.target.id]);
  }

  downDb(event){
    this.router.navigate(['/shots', event.target.id+0]);
  }

  @Input()
  set width(_width:number) {
    console.trace("widthwidthwidth");
    this._width = _width;
    this.getStartArrVisiShot();
  }
  get width() { return this._width; }

  @Input()
  set height (_height:number) {
    this._height = _height;
  }
  get height() { return this._height; }
}
