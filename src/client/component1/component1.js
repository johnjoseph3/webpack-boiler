import template from './component1.jade';
import './component1.scss';
import $ from 'jquery';
import Router from '../router.js';

Router.routes.push({
	name: 'component1',
	template: template({message: "Cool component 1 works"})
})
