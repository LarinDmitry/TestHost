import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<Wrapper>
			<Title>
				<NameLink to='/'>
					<Name>Инна Ларина</Name>
					<Position>Дизайнер интерьеров</Position>
				</NameLink>
			</Title>
			<List>
				<ListItem>
					<StyleLink to='/'>Главная</StyleLink>
				</ListItem>
				<ListItem>
					<StyleLink to='/resume'>Резюме</StyleLink>
				</ListItem>
				<ListItem>
					<StyleLink to='/projects'>Проекты</StyleLink>
				</ListItem>
				<ListItem>
					<StyleLink to='/contacts'>Контакты</StyleLink>
				</ListItem>
			</List>
		</Wrapper>
	)
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 325px 1fr;
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  font-size: 24px;
  font-family: cursive;
  margin: auto 0 auto auto;
`;

const Title = styled.div``;

const StyleLink = styled(Link)`
  color: rgb(139, 139, 139);
  text-decoration: none;
`;

const NameLink = styled(Link)`
  color: rgb(77, 77, 77);
  text-decoration: none;
  text-align: right;
`;

const Name = styled.h1`
  font-family: cursive;
  font-size: 50px;
  margin: 0;
`;

const Position = styled.div`
	font-size: 25px;
  font-family: cursive;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 0 20px;
`;

export default Header;