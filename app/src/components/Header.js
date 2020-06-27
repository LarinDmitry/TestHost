import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
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
	)
}

const List = styled.ul``;

const ListItem = styled.li``;

export default Header;