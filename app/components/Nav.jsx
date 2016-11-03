var React = require('react');
var {Link, IndexLink} = require('react-router');


// var Nav = React.createClass({
// 	render: function(){
// 		return (
// 			<div>
// 				<h2>This is the nav component</h2>
// 				<IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 				<Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
// 				<Link to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>

// 				<a href="#/about">Go to About</a>
// 			</div>
// 		);
// 	}
// });

//refactoring to stateless component

var Nav = (props) => {
	return (
		<div>
			<h2>This is the nav component</h2>
			<IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>

			<a href="#/about">Go to About</a>
		</div>
	);
}

module.exports = Nav;
