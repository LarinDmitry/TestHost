import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '../components/Icons/PhoneIcon';
import MailIcon from './Icons/MailIcon';
import AddIcon from './Icons/AddIcon';
import RootIcon from './Icons/RootIcon';
import Facebook from './Icons/Facebook';

const Footer = () => {
	const mailLink = 'larin.dm.an@gmail.com';
	const letLink = '+38(093) 307 62 25';
	return (
		<Wrapper>
			<Block>
				<PhoneIcon/>
				<InfoWrapper>
					<BoldText>Звоните</BoldText>
					<Link href={`tel:${letLink}`}>{letLink}</Link>
				</InfoWrapper>
			</Block>
			<Block>
				<MailIcon/>
				<InfoWrapper>
					<BoldText>Пишите</BoldText>
					<Link href={`mailto:${mailLink}`}>{mailLink}</Link>
				</InfoWrapper>
			</Block>
			<Block>
				<AddIcon/>
				<InfoWrapper>
					<BoldText>Заходите</BoldText>
					<Social>
						<Link href='https://www.facebook.com/larinDmitriy' target='_blank'><Facebook/></Link>
					</Social>
				</InfoWrapper>
			</Block>
			<Block>
				<RootIcon/>
				<InfoWrapper>
					<Text>© Инна Ларина</Text>
					<Text>Сайт создан by <Link href='https://www.linkedin.com/in/larindmitriy/' target='_blank'>Larin Dmitro</Link></Text>
				</InfoWrapper>
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
  align-items: center;
`;

const Link = styled.a`
	color: white;
	text-decoration: none;
	
	&:hover {
		text-decoration: underline;
	}
`;

const Block = styled.div`
	display: grid;
  grid-template-columns: 50px 1fr;
`;

const InfoWrapper = styled.div`
  margin-left: 20px;
  color: white;
`;

const Text = styled.div``;

const Social = styled.div`
	display: flex;
`;

const BoldText = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export default Footer;