tm.Router = Backbone.Router.extend({

	routes: {
		""				: "",
		"show/pageOne":"pageOne",
		"show/pageTwo":"pageTwo"
	},

	initialize: function() {

		var elem = React.createElement(tm.views.Root, {
		onShow: this.onShow.bind(this)//onShow is a method on the object
		});

		this.comp = React.render(elem, document.body);
	},

	onShow: function(show) {//elem is wrapping this whole function up into the onShow method, the show props
		//are set on buttons and called by Nav
		if(show === "pageOne") {
			this.pageOne();
			this.navigate("show/pageOne");
		} else if (show === "pageTwo") {
			this.pageTwo();
			this.navigate("show/pageTwo");
		} else {
			this.clear();
			this.navigate("");
		}
	},


	pageOne: function() {

	this.comp.setProps({show: "pageOne"});

	},

	pageTwo: function() {

	this.comp.setProps({show: "pageTwo"});

	},

	clear: function() {

	this.comp.setProps({show: null});

	}

});