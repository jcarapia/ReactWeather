var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){	

		var that = this;
		
		//clear our the data when a search is started 
		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function(temp){
			
			that.setState({
				location: location, 
				temp: temp,
				isLoading: false
			})

		}, function(e){
			//alert(reason)
			//console.log(reason)
			that.setState({
				isLoading: false,
				errorMessage: e.message
			})
		})

	},
	componentDidMount: function(){
		var location = this.props.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			//clear the location query
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps){
		var location = newProps.location.query.location;

		if(location && location.length > 0){
			this.handleSearch(location);
			//clear the location query
			window.location.hash = '#/';
		}
	},
	render: function(){
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching weather...</h3>;
			} else if(temp && location) {
				return <WeatherMessage location={location} temp={temp} />
			}
		}

		function renderError(){
			if(typeof errorMessage === 'string'){
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch = {this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>	
		);
	}
});

module.exports = Weather; 

