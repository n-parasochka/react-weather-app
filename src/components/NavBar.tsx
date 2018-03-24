import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Layout, Menu, Row } from 'antd';
import { fetchingData } from '../redux/actions';
import { WeatherForm } from './WeatherForm';

const {Header} = Layout;

class NavBar extends React.Component<any, any> {
	constructor(props: any) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location: string) {
		this.props.fetchingData(location);
	};

	render() {
		return (
			<Header>
				<Row>
					<Col span={2}>
						<img src="assets/favicon.ico" width="40" height="30"
						     className="d-inline-block align-top" alt=""
						     style={{paddingRight: 5}}/>
					</Col>
					<Col span={18}>
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={['1']}
							style={{lineHeight: '63px'}}>
							<Menu.Item key="1">
								<NavLink exact activeClassName='active' to='/'>
									Weather
								</NavLink>
							</Menu.Item>
							<Menu.Item key="2">
								<NavLink activeClassName='active' to='/about'>
									About
								</NavLink>
							</Menu.Item>
							<Menu.Item key="3">
								<NavLink activeClassName='active' to='/d3_demo_app'>
									D3 Demo
								</NavLink>
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={4}>
						<div>
							<WeatherForm onSearch={this.handleSearch} isDisabled={this.props.isLoading}/>
						</div>
					</Col>
				</Row>
			</Header>
		);
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
		fetchingData
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);