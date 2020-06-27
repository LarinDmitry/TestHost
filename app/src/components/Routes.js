import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import Main from './Pages/Main';

const Routes = () => {
	return (
		<Switch>
			<Route path='/resume'>
				<Resume/>
			</Route>
			<Route path='/projects'>
				<Projects/>
			</Route>
			<Route path='/contacts'>
				<Contacts/>
			</Route>
			<Route path='/'>
				<Main/>
			</Route>
		</Switch>
	)
}

export default Routes;