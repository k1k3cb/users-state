import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: space-between;
	padding: 0.5rem;
	margin: 1rem auto;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
	border-radius: 0.75rem;
	width: 500px;
`;

export const UserContainer = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
`;

export const UserImage = styled.img`
	border-radius: 50%;
	width: 50px;
	margin-right: 1rem;
`;

export const UserDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
`;

export const UserName = styled.h2`
	font-size: 1.5;
	margin: 0.25rem 0px;
`;
export const UserNick = styled.p`
	font-size: 1rem;
	margin: 0px;
`;

export const UserActive = styled.span`
	color: ${({ $activeState }) =>
		$activeState ? 'rgb(19, 177, 118)' : 'rgb(206, 49, 49)'};
	margin-right: 1.875rem;
	font-weight: bold;
`;
