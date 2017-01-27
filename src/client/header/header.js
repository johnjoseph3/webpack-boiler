import template from './header.jade';
import $ from 'jquery';
import Router from '../router.js';

let $div = $('#header');
$div.html( template( {message: "Cool component 1 works"}) );

$('#button-1').on('click', function(){
	let $div = $('#main');
	$div.html("");
	let template;
	for(let route of Router.routes) {
		if(route.name = 'component1') {
			console.log("true");
			template = route.template;
		}
	}
	$div.html( template );
});

$('#button-2').on('click', function(){
	let $div = $('#main');
	$div.html("");
	let template;
	for(let route of Router.routes) {
		if(route.name = 'component2') {
			console.log("true");
			template = route.template;
		}
	}
	$div.html( template );
});
