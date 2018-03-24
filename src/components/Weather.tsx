import * as _ from 'lodash';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert, Col, Row, Spin } from 'antd';

import { fetchingData, fetchingDataFailure, fetchingDataSuccess, setAllWeatherDataIntoStore } from '../redux/actions';
import WeatherData from './WeatherData';
import {
	getCurrentWeatherByCity,
	getCurrentWeatherByCoordinates,
	getForecastByCity,
	getForecastByCoordinates
} from '../api/OpenWeatherMap';
import { getGeoCode, getTimeZone } from '../api/Google';
// For mock data
// import { timezone } from '../../sample/timezone';
// import { weather } from '../../sample/weather';
// import { forecast } from '../../sample/forecast';

interface WeatherState {
	previousFilter: string
}

class Weather extends React.Component<any, WeatherState> {
	constructor(props: any) {
		super(props);

		this.state = {
			previousFilter: ''
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	componentWillReceiveProps(nextProps: any) {
		if (this.state.previousFilter !== nextProps.filter) {
			this.setState({previousFilter: nextProps.filter});
			this.getWeatherData(0, 0);
		}
	}

	componentDidMount() {
		if (this.props.location.length === 0 && _.isEmpty(this.props.weather) && _.isEmpty(this.props.forecast)) {
			this.props.fetchingData('');
			// this.mockData();

			// For PROD
			navigator.geolocation.getCurrentPosition(location => {
				console.log('Got user location: ', location);
				getGeoCode(location.coords.latitude, location.coords.longitude).then(geocode => {
					if (geocode.status === 'OK') {
						console.log('Got Geo code from google');
						let sublocalityLocation: any = _.findLast(geocode.results, {'types': ["political", "sublocality", "sublocality_level_1"]});
						let location: any = _.findLast(geocode.results, {'types': ['administrative_area_level_1', 'political']});

						let city;
						if (sublocalityLocation) {
							city = sublocalityLocation.formatted_address;
						} else {
							city = location.formatted_address;
						}
						this.setState({previousFilter: city});
						this.props.fetchingData(city);
						this.getWeatherData(geocode.results[0].geometry.location.lat, geocode.results[0].geometry.location.lng);
					} else if (geocode.error_message) {
						this.searchByDefaultLocation(geocode.error_message + '. Use default location: Auckland, New Zealand');
					} else {
						this.searchByDefaultLocation('Cannot find your location. Use default location: Auckland, New Zealand');
					}
				});
			}, error => {
				this.searchByDefaultLocation(error.message + '. Use default location: Auckland, New Zealand');
			});
		}
	}

	// mockData() {
	// 	this.props.fetchingData('Auckland');
	// 	this.props.fetchingDataSuccess();
	// 	this.props.setAllWeatherDataIntoStore({
	// 		filter: 'Auckland',
	// 		location: 'Auckland, NZ',
	// 		weather: weather,
	// 		timezone: timezone,
	// 		forecast: forecast,
	// 		isLoading: false
	// 	});
	// }

	searchByDefaultLocation(message: string) {
		this.props.fetchingDataFailure(message);
		setTimeout(this.delayFetchData.bind(this), 3000);
	}

	delayFetchData() {
		this.setState({previousFilter: 'Auckland'});
		this.props.fetchingData('Auckland');
		this.getWeatherData(0, 0);
	}

	getTimeZoneAndForecast(lat: number, lon: number, weather: any, type: string) {
		getTimeZone(lat, lon).then(timezone => {
			if (timezone.status === 'OK') {
				if (type === 'city') {
					getForecastByCity(this.props.filter).then((forecast: any) => {
						if (forecast) {
							console.log('Got forecast by city');
							this.setDataToStore(this.props.filter, weather, timezone, forecast);
						}
					}, (errorMessage: any) => {
						this.props.fetchingDataFailure(errorMessage.data.message);
					});
				} else {
					getForecastByCoordinates(lat, lon).then((forecast: any) => {
						if (forecast) {
							console.log('Got forecast by coordinates');
							this.setDataToStore(this.props.filter, weather, timezone, forecast);
						}
					}, (errorMessage: any) => {
						this.props.fetchingDataFailure(errorMessage.data.message);
					});
				}
			} else if (timezone.error_message) {
				this.props.fetchingDataFailure(timezone.error_message);
			} else {
				this.props.fetchingDataFailure('Cannot get timezone');
			}
		});
	}

	getWeatherData(lat: number, lon: number) {
		if (lat !== 0 && lon !== 0) {
			getCurrentWeatherByCoordinates(lat, lon).then((weather: any) => {
				if (weather && weather.cod === 200) {
					console.log('Got current weather by coordinates');
					this.getTimeZoneAndForecast(lat, lon, weather, 'coordinates');
				}
			}, (errorMessage: any) => {
				this.props.fetchingDataFailure(errorMessage.message);
			});
		} else {
			getCurrentWeatherByCity(this.props.filter).then((weather: any) => {
				if (weather && weather.cod === 200) {
					console.log('Got current weather by city');
					let latitude = weather.coord.lat;
					let longitude = weather.coord.lon;
					this.getTimeZoneAndForecast(latitude, longitude, weather, 'city');
				}
			}, (errorMessage: any) => {
				this.props.fetchingDataFailure(errorMessage.message);
			});
		}
	}

	private setDataToStore(city: string, weather: any, timezone: any, forecast: any) {
		this.props.fetchingDataSuccess();
		this.props.setAllWeatherDataIntoStore({
			filter: city,
			location: city,
			weather: weather,
			timezone: timezone,
			forecast: forecast,
			isLoading: false
		});
	}

	handleSearch(location: string) {
		this.props.fetchingData(location);
		this.getWeatherData(0, 0);
	}

	render() {
		const {weather, location, isLoading, error} = this.props;

		const renderCurrentWeather = () => {
			if (isLoading) {
				return (
					<Row type="flex" justify="center">
						<h2 className='text-center'>Fetching weather </h2><Spin size="large"/>
					</Row>
				);
			} else if (weather && location) {
				return <WeatherData/>;
			} else if (error) {
				return (
					<Row type="flex" justify="center">
						<Col span={16}>
							<Alert
								message="Error"
								description={error}
								type="error"
								showIcon
							/>
						</Col>
					</Row>
				);
			}
		};

		return (
			<div style={{paddingTop: 40, paddingBottom: 40}}>
				{renderCurrentWeather()}
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		filter: state.filter,
		location: state.location,
		weather: state.weather,
		forecast: state.forecast,
		timezone: state.timezone,
		isLoading: state.isLoading,
		error: state.error
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return bindActionCreators({
		fetchingData,
		fetchingDataSuccess,
		fetchingDataFailure,
		setAllWeatherDataIntoStore
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
