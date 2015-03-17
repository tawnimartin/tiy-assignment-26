
tm.views = {};

(function(views){

var PageOne = React.createClass({displayName: "PageOne",
	render: function() {
	return React.createElement("div", null, React.createElement("h3", null, "Page One"), React.createElement("p", null, "Lorem ipsum dolor sit amet," + ' ' + 
	"consectetur adipiscing elit. Vestibulum sit amet est arcu." + ' ' + 
	"Nullam rutrum velit sit amet urna ullamcorper, cursus sagi."));
	}
});


var PageTwo = React.createClass({displayName: "PageTwo",
	render: function() {
	return React.createElement("div", null, React.createElement("h3", null, "Page Two"), React.createElement("p", null, "Lorem ipsum dolor sit amet," + ' ' + 
	"consectetur adipiscing elit. Vestibulum sit amet est arcu." + ' ' + 
	"Nullam rutrum velit sit amet urna ullamcorper, cursus sagi."));
	}
});

var Root = React.createClass({displayName: "Root",

	getView: function(show) {
		if(show === "pageOne") {
			return React.createElement(PageOne, null);
		} else if (show === "pageTwo") {
			return React.createElement(PageTwo, null);
		}
},

	onNav: function(show) {
	this.props.onShow(show);//resetting the onShow function with the param - "pageOne" or "pageTwo"

},

	render: function() {
	var showing = this.getView(this.props.show);
	return (
		React.createElement("div", null, 
			React.createElement("div", null, 
				React.createElement("button", {onClick: this.onNav.bind(this, "pageOne")}, "Page One"), 
				React.createElement("button", {onClick: this.onNav.bind(this, "pageTwo")}, "Page Two")
			), 
			React.createElement("div", null, showing)
			)
	);
}

});

views.Root = Root;

})(tm.views);


