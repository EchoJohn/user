'use strict';

$(function (argument) {
	$('#btnsubmit').click(function (event) {
		event.preventDefault();
		$.ajax({
			url: '/receive',
			type: 'get',
			dataType: 'json',
			data: {
				username: $('#username').val()
			},
			success: function (data) {
				console.info(data);
			},
			error: function () {
				alert('error');
			}
		});
	});
});