import {
	CardContainer,
	UserActive,
	UserContainer,
	UserDataContainer,
	UserImage,
	UserName,
	UserNick
} from './styles';

const UserCard = ({ name, nickName, image, active }) => {
	return (
		<CardContainer>
			<UserContainer>
				<UserImage src={image} alt={name} />

				<UserDataContainer>
					<UserName>{name}</UserName>
					<UserNick>@{nickName}</UserNick>
				</UserDataContainer>
			</UserContainer>
			<UserActive $activeState={active}>
				{active ? 'Activo' : 'Inactivo'}
			</UserActive>
		</CardContainer>
	);
};

export default UserCard;
