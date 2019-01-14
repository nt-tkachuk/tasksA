import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {finalize, tap} from "rxjs/operators";

export class shotInterceptor implements HttpInterceptor {

  /**
   * в конструкторе обнулить
   *
   */


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newParams = new HttpParams({fromString: req.params.toString()});
    let strInStr = req.url.indexOf("per_page=");

    // если "per_page=" нет в строке, то добавляем per_page' , '20' к параметрам
    // создаем клон reg и добавляем в него новый параметр
    if (strInStr != -1) { //если строки нет
      newParams = newParams.append('per_page' , '20');
    }

    const clone = req.clone({
      params: newParams,
    });

    //clone.headers.set('', '');

    let ok: string;

    return next.handle(clone)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed'
        ),
        finalize(() => {
          const elapsed = 10;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok}`;

          console.trace("finalize", msg);
        })
      )

  }
}
