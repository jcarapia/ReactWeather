var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function(){
// 		var {temp, location} = this.props;
// 		return (
// 			<p>The weather in {location} is {temp} degrees</p>
// 		);
// 	}
// });

var WeatherMessage = ({temp, location}) => {

	return (
		<h3 className="text-center">It is {temp} degrees in {location}</h3>
	);
}

module.exports = WeatherMessage; 

