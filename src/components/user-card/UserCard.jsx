import { Link } from 'react-router-dom';
import {
	CardContainer,
	UserActive,
	UserContainer,
	UserDataContainer,
	UserImage,
	UserName,
	UserNick
} from './styles';

const UserCard = ({ name, nickName, image, active, userId }) => {
	// console.log('userId' + userId);

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
			<Link to={`/${userId}`}>
				<button>Ver detalles</button>
			</Link>
		</CardContainer>
	);
};

export default UserCard;
