import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ShotService {
  configUrl = 'assets/shotList.json';
  posts:any ;
  arrayShot: BehaviorSubject<any>;
  loader: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.arrayShot  = new BehaviorSubject(null);
    this.loader  = new BehaviorSubject(null);
  }

  getConfig() {
    this.loader.next(true);

    this.http.get('http://api.mobile.design/api/shots?page=1&per_page=24', {observe: 'response'})
      .subscribe(response => {
        this.posts = response;
        this.arrayShot.next(response['body']['shots']);
        if (response.status) { // Ответ сервера. Запрос обработан успешно
          this.loader.next(false);
        }
      });
  }



  /*getImg() {
    $http({
      method: 'GET',
      url: '/someUrl'
    }).then(function successCallback(response) {

    }, function errorCallback(response) {

    });
  }*/
}
//все сервисы подключаются через констр
//сервисы - синглтоны. изменили в одном месте, он изменился везде.

