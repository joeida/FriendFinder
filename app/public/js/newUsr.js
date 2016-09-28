$(document).ready(function(){	

	$('#submit').on('click', function () {
		var newFriend = {
			name: $('#usr').val().trim(),
			photo: $('#photo').val().trim(),
			scores: [
				$('#q1').val(),
				$('#q2').val(),
				$('#q3').val(),
				$('#q4').val(),
				$('#q5').val(),
				$('#q6').val(),
				$('#q7').val(),
				$('#q8').val(),
				$('#q9').val(),
				$('#q10').val()
			]
		};

		var siteUrl = window.location.origin + '/api/friends';

		$.post(siteUrl, newFriend)
			.done(function (data) {
				$('#compImg').attr('src', data.photo);
				$('.modal-title').text('Hi!  My Name is ' + data.name + '!');
				$('#myModal').modal('show');
			});

	});

});

