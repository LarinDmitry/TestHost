import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<Wrapper>
			<Title>
				<Name>Инна Ларина</Name>
				<Position>Дизайнер интерьеров</Position>
			</Title>
			<List>
				<ListItem>
					<Link to='/'>Главная</Link>
				</ListItem>
				<ListItem>
					<Link to='/resume'>Резюме</Link>
				</ListItem>
				<ListItem>
					<Link to='/projects'>Проекты</Link>
				</ListItem>
				<ListItem>
					<Link to='/contacts'>Контакты</Link>
				</ListItem>
			</List>
		</Wrapper>
	)
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const Title = styled.div``;

const Name = styled.div``;

const Position = styled.div``;

const ListItem = styled.li`
  list-style: none;
`;

export default Header;