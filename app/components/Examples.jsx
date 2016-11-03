var React = require('react');

// var Examples = React.createClass({
// 	render: function(){
// 		return (
// 			<h2> This is the examples page</h2>
// 		);
// 	}
// });

//refactoring to statelss component

var Examples = (props) => {
	return (
		<div>
			<h3>Examples</h3>
			<p> This is the examples page</p>
		</div>	
	);
}

module.exports = Examples;