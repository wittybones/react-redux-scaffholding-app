import React from 'react'
import { Route } from 'react-router-dom'
import SamplePage from './Sample'
import Header from '../components/Header'
import SamplePage2 from './Sample2'
import MoviesList from '../containers/movieList';

const App = () =>
	<div>
		<Header />
		<Route exact path="/" component={MoviesList} />
		<Route exact path="/sample" component={SamplePage} />
		<Route exact path="/sample-page-2" component={SamplePage2} />
	</div>


export default App
