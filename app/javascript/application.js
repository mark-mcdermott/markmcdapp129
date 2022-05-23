// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import jquery from 'jquery'

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})

window.jQuery = jquery
window.$ = jquery
$('#someDiv').css('border','1px solid red')

const url = '/scores/api';
var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
var xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.setRequestHeader('X-CSRF-Token', csrfToken);
xhr.onload = function () { console.log('SUCCESS WOO'); };
xhr.send(JSON.stringify({ score: { "val": 1017 }}));