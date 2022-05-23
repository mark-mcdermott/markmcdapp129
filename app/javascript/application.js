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

$.ajax({
	url: url,
	type: "POST",
	beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
	data: {
	score: {
		"val": 1015, 
	}
},
	success: function(resp){ json: 'SUCCESS WOO' }
});