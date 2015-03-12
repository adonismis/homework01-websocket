
var app = app || {};

app.MessageView = Backbone.View.extend({
	//el:'#messageDiv',
	events:{
	//	'click #submit':'inputMessage'
	},
	//inputMessage:function (e) {
	//	alert("test");
	//}
});


app.Message = Backbone.Model.extend({
	defaults:{
		"type" : "message",
		"data" : {
				"message" : "hello",
				"username": "YOU",
				"timestamp": 14012341234
		}
		/*
		success: false,
		errors: [],
		errfor: {},
		message: 'No message Yet.'
		*/
	}
});


app.messageView = new app.MessageView();


$(document).ready(function(){
    $("#message").createWebSocket();
    $("#board").receiveWebSocket();
    $("#submit").on('click',function () {
        $.ajax({
            url: 'http://localhost:8080/send',
            type: "GET",
            dataType: "json",
            data: {
                m: $("#text").val(),
                u: $("#username").val(),
            },
        });
    });
});
