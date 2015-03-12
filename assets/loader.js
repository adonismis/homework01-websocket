requirejs.config({
	basUrl: 'assets/',
	paths:{
		'jquery':'jquery/dist/jquery',
		'backbone':'backbone/backbone',
		'underscore':'underscore/underscore',
		'bootstrap':'bootstrap/dist/js/bootstrap'
	},
	shim:{
		'backbone':{
			deps:['jquery','underscore'],
			exports:'Backbone'
		}
	}
});

require(
	[
		'jquery',
		'backbone',
		'assets/main.js' //加依序加入套件
	],function () {
		var app = app || {};
		app.Person = Backbone.Model.extend({
			//initialize 為Model的Constructor
			initialize: function() {
				console.log('Build');
			},
			//預設值
			defaults : {
				'name':'John',
				'age':'13'
			}
		});

		//建立Model
		var man = new app.Person({'name':'Johnson','age':'25'});

		//設定參數
		man.set('name','Tom');
		//取得參數
		console.log(man.get('name'));

		//將Model轉成JSON
		console.log(man.toJSON());





		
		app.SearchView = Backbone.View.extend({
			el: $("#doc"),
			initialize: function(){
				this.render();
			},
			events:{
				'click #search_button':'search'
			},
			search: function () {
				var search_input = this.$el.find('#search_input').val();
				alert(search_input);
				console.log('test='+search_input);
			},
			render: function(){
				// 參數
				var params = {
								search_label:"TEST",
								search_value:"搜尋"
							 };
				// Compile template
				var template = _.template(this.$el.find("#search_template").html(), params);
				// 將template寫入el中
				this.$el.html( template );
			}
		});

		app.search_view = new app.SearchView();





		
	}
);