import template from './component1.jade';
import './component1.scss';
import $ from 'jquery';

let $div = $('#main');
$div.html( template( {message: "Cool component 1 works"}) );
