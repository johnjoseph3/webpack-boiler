import template from './component2.jade';
import './component2.scss';
import $ from 'jquery';
import Router from '../router.js';

Router.routes.push({
	name: 'component2',
	template: template({message: "Cool component 2 works"})
});
