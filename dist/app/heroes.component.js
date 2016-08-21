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
const router_1 = require('@angular/router');
const hero_service_1 = require('./hero.service');
let HeroesComponent = class HeroesComponent {
    constructor(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.addingHero = false;
    }
    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error);
    }
    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }
    close(savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    }
    deleteHero(hero, event) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) {
                this.selectedHero = null;
            }
        })
            .catch(error => this.error = error);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
};
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: 'app/heroes.component.html',
        styleUrls: ['app/heroes.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=heroes.component.js.map