import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Wrapper>
			<Block>
				<Icon>Icon</Icon>
				<Text>Звоните</Text>
				<Phone>+3(8093) 307 62 25</Phone>
			</Block>
			<Block>
				<Icon>Icon</Icon>
				<Text>Пишите</Text>
				<Mail>larin.dm.an@gmail.com</Mail>
			</Block>
			<Block>
				<Icon>Icon</Icon>
				<Text>Заходите</Text>
				<Facebook>FB</Facebook>
				<Instagramm>IN</Instagramm>
			</Block>

			<Block>
				<Icon>Icon</Icon>
				<Text>(c) Инна Ларина</Text>
				<Roots>Сайт создан by Larin Dmitro</Roots>
			</Block>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100px;
	background-color: rgb(232, 53, 86);
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  justify-content: center;
`;

const Block = styled.div`
	
`;

const Phone = styled.div`
	
`;

const Mail = styled.div`
	
`;

const Icon = styled.div`
	
`;

const Facebook = styled.div`
	
`;

const Instagramm = styled.div`
	
`;

const Text = styled.div`
	
`;

const Roots = styled.div`
	
`;

export default Footer;