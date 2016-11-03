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
		<p>The weather in {location} is {temp} degrees</p>
	);
}

module.exports = WeatherMessage; 

