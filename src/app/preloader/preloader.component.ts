import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  @Input ('width') width = 100;
  _height :number = 100;
  hDiv:number = 100;
 // @Input ('height') height = 100;
  _activ:boolean = false;
  private nameImg:string = "preloaderImg";
  private elementImg;
  private angle:number = 0;


  constructor() { }

  ngOnInit() {
  }
  transform
  timer
  isDivVisible = false;

  move():void {
    if (this._activ == false) {
      clearInterval(this.timer);
    } else {
      this.angle = 0;
      this.timer = setInterval(() => {
        this.angle += Math.PI;
        this.transform = 'rotate('+ this.angle +'deg)';
      }, 10)

    }
  }

  @Input()
  set activ(_activ:boolean) {
    if (this._activ == _activ) return;
    this._activ = _activ;
    this.isDivVisible = this._activ;
    this.hDiv = this._activ == true?this._height: 0;
    this.move();
  }
  get activ() { return this._activ; }

  @Input()
  set height(_v:number) {
    if (this._height == _v) return;
    this._height = _v;
    this.hDiv = this._activ == true?this._height: 0;
  }
  get height() { return this._height; }
}
