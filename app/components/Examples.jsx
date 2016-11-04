var React = require('react');
var {Link} = require('react-router');

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
			<h1 className="text-center page-title">Examples</h1>
			<p> Here are a few example locations to try out</p>
			<ol>
				<li>
					<Link to='/?location=San Francisco'>San Francisco</Link>
				</li>
				<li>
					<Link to='/?location=Oakland'>Oakland</Link>
				</li>
			</ol>

		</div>	
	);
}

module.exports = Examples;