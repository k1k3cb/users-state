import UserCard from '../user-card/UserCard';

const UsersTable = ({ filteredUsers }) => {
	return (
		<>
			{filteredUsers.map(user => (
				<UserCard
					key={user.userId}
					name={user.name}
					nickName={user.username}
					image={user.profileImage}
					active={user.active}
					userId={user.userId}
				/>
			))}
		</>
	);
};

export default UsersTable;
