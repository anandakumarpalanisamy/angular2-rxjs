import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { MdIconRegistry } from '@angular2-material/icon/icon-registry';
import { provideStore } from '@ngrx/store';
import { todosReducer } from './app/reducers';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  MdIconRegistry,
  HTTP_PROVIDERS,
  JSONP_PROVIDERS,
  provideStore({ todos: todosReducer })]);
