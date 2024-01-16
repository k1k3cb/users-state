import { Link, useParams } from 'react-router-dom';
import { USERS } from '../constants/user';
import { StyledButton, StyledContainer } from './styles';

const User = () => {
	const { userId } = useParams();
	// const currentUser = USERS.findOne(userId)
	const currentUser = USERS.find(user => user.userId === userId);
	console.log(currentUser);

	return (
		<StyledContainer>
			<Link to='/'>
				<StyledButton> Back To Users</StyledButton>
			</Link>
			<img src={currentUser.profileImage} alt={currentUser.name} />
			<h1>Hi! My name is {currentUser.name}</h1>
			<p>I´m {currentUser.age}</p>
			<p>My username is {currentUser.username}</p>
			<p>You can contact me in {currentUser.email}</p>
			<p>My Address is: {currentUser.address.street}</p>
			<p>{currentUser.address.city}</p>
			<p>{currentUser.address.zipCode}</p>
			<p>You can call me at {currentUser.phone}</p>
		</StyledContainer>
	);
};

export default User;
