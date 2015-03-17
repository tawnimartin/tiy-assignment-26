
tm.views = {};

(function(views){

var PageOne = React.createClass({
	render: function() {
	return <div><h3>Page One</h3><p>Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit. Vestibulum sit amet est arcu. 
	Nullam rutrum velit sit amet urna ullamcorper, cursus sagi.</p></div>;
	}
});


var PageTwo = React.createClass({
	render: function() {
	return <div><h3>Page Two</h3><p>Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit. Vestibulum sit amet est arcu. 
	Nullam rutrum velit sit amet urna ullamcorper, cursus sagi.</p></div>;
	}
});

var Root = React.createClass({

	getView: function(show) {
		if(show === "pageOne") {
			return <PageOne/>;
		} else if (show === "pageTwo") {
			return <PageTwo/>;
		}
},

	onNav: function(show) {
	this.props.onShow(show);//resetting the onShow function with the param - "pageOne" or "pageTwo"

},

	render: function() {
	var showing = this.getView(this.props.show);
	return (
		<div>
			<div>
				<button onClick={this.onNav.bind(this, "pageOne")}>Page One</button>
				<button onClick={this.onNav.bind(this, "pageTwo")}>Page Two</button>
			</div>
			<div>{showing}</div>
			</div>
	);
}

});

views.Root = Root;

})(tm.views);


