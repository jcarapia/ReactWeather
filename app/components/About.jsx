var React = require('react');
var {Link} = require('react-router');

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
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application built on React. I built
				this for the Complete React Web Developer Course
			</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a>
					- This was the JS framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a>
					- I used Open Weather Map to search for weather data by city name.
				</li>
				<li>
					<a href="http://foundation.zurb.com/">Foundation</a>
					- The CSS framework use to style the application.
				</li>
			</ul>
		</div>
	);
}

module.exports = About; 

