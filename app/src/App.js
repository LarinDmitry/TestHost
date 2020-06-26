import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const App = () => (
	<Wrapper>
		<Header>
			<Img src={logo}/>
		</Header>
	</Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Img = styled.img.attrs({alt: 'logo'})`
  height: 40vmin;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
`;

export default App;
