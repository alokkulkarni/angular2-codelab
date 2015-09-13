/// <reference path="../../typings/_custom.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

import {Card} from 'components/card/card';

@Component({
	selector: 'menu'
})
@View({
	templateUrl: './menu.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
@RouteConfig([{
	path: '/card',
	component: Card,
	as: 'card'
}])
export class Menu {
	
	constructor(){
	}
	
}