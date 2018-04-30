import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShotService {
  configUrl = 'assets/shotList.json';

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
//все сервисы подключаются через констр
//сервисы - синглтоны. изменили в одном месте, он изменился везде.

