"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
const http_2 = require('@angular/http');
const angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
const in_memory_data_service_1 = require('./in-memory-data.service');
const app_component_1 = require('./app.component');
const app_routing_1 = require('./app.routing');
const heroes_component_1 = require('./heroes.component');
const dashboard_component_1 = require('./dashboard.component');
const hero_detail_component_1 = require('./hero-detail.component');
const hero_service_1 = require('./hero.service');
const hero_search_component_1 = require('./hero-search.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_search_component_1.HeroSearchComponent
        ],
        providers: [
            hero_service_1.HeroService,
            { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
            { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } // in-mem server data
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map