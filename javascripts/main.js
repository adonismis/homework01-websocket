
(function($) {
	$.ajax({
		dataType:"json",
		type:"GET",//協定預設為GET
		url: 'http://localhost:3000/1/post/',
		//url: 'http://localhost/',
		success:function (data, jqXHR, textStatus) {
			var response = data;
			$('#postTemples')
				.tmpl(response.posts)
				.appendTo('#content');			
		},
		complete:function (jqXHR, textStatus) {
			$('[id="subject"]').each(function(index) {
				var me = $(this); //$()是帶入jqeury值

				me.on('click',function() {
					var id = me.data('id');
					$.ajax({
						dataType: 'json',
						url:'http://booklog.io/1/post/'+id,
						success:function (response, jqXHR, textStatus) {
							
							//無法傳值至前端
							$('#content')
								.html(
										'<p>'+
										response.post.content+
										'</p>'
									 );
						},
					});
				});

			});
		}
	});
})($);