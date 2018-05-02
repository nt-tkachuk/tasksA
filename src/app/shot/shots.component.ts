/* Компонет в котором отображается информация
 *
 */
import {Component, Input, OnInit} from '@angular/core';
//declare var $:any;
declare var jquery:any
declare var $ :any;

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})

export class ShotsComponent implements OnInit {
  @Input('shot') myShot;
  @Input ('otstup') otstup = 20; // отступ для рамки
  _hPanel: number = 100;// высота шота
  _wPanel: number = 100;// ширина

  private imgSrc: string = "";
  wWrapper: number  = this._wPanel + this.otstup;
  hWrapper: number  = this._hPanel + this.otstup;

  constructor() {}

  ngOnInit():void {
    if (this.myShot)
      this.imgSrc = this.myShot.thumbnail;
  }

  panelOut (event):void{
    this.imgSrc = this.myShot.thumbnail;
    //event.target.src = shot.sabmail; //если сделать через цсс, то будет 2 картинки и они будут подгружены сразу
  }

  panelOver (event):void {
    this.imgSrc = this.myShot.avatar;
  }

  /*saveUrlAsFile(url, fileName) {
    var link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.click();
  }

  $('button').on('click', function(e){
    var isAdmin = confirm("Скачать?");
    if(isAdmin){
      this.saveUrlAsFile($(e.target).attr('src'), 'image.jpg');
    }
  });


   ngAfterViewInit(){
     $('button').click(function(e){
       console.trace("aaaaaaaaaaaaaaaaaaaaa")
     $var isAdmin = confirm("Скачать?");
     if(isAdmin){
       this.saveUrlAsFile($(e.target).attr('src'), 'image.jpg');
     }
   });
  }*/

  @Input()
  set hPanel(_h:number) {
    this._hPanel = _h;
    this.hWrapper = this._hPanel + this.otstup;
  }
  get hPanel() { return this._hPanel; }

  @Input()
  set wPanel(_w:number) {
    this._wPanel = _w;
    this.wWrapper = this._wPanel + this.otstup;
  }
  get wPanel() { return this._wPanel; }
}
