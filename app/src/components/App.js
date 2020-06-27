import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

const App = () => (
	<Router>
		<Wrapper>
			<Header/>
			<Routes/>
			<Footer/>
		</Wrapper>
	</Router>
);

const Wrapper = styled.div`
	display: grid;
  grid-template-rows: 100px auto 100px;
  width: 80%;
  margin: auto;
`;

export default App;
