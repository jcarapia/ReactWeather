var React = require('react');

// var About = React.createClass({
// 	render: function(){
// 		return (
// 			<h3>About Component</h3>
// 		);
// 	}
// });

//refactor to a stateless functional component. 

var About = (props) => {
	return (
		<div>
			<h3>About</h3>
			<p>This is the about page</p>
		</div>
	);
}

module.exports = About; 

