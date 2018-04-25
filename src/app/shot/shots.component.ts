import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})

export class ShotsComponent implements OnInit {
  //hzdvfdbgb
  @Input('shot') myShot;
  imgSrc: string = "";
  @Input ('otstup') otstup = 20; // рамка to do перенести
  _hPanel: number = 100;
  _wPanel: number = 100;
  wWrapper: number  = this.wPanel + this.otstup;
  hWrapper: number  = this.hPanel + this.otstup;

  constructor() {}

  ngOnInit() {
    console.trace("aaaaaaaaaa")
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
