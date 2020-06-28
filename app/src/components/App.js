import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';
import Footer from './Footer';

const App = () => (
	<Router>
		<PageWrapper>
			<Wrapper>
				<Header/>
				<Routes/>
			</Wrapper>
			<Footer/>
		</PageWrapper>
	</Router>
);

const PageWrapper = styled.div`
 background-color: rgb(234, 229, 229);
`;

const Wrapper = styled.div`
	display: grid;
  grid-template-rows: 135px auto;
  width: 80%;
  margin: auto;
`;

export default App;
