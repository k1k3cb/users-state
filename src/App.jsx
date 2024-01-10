import FormFilter from './components/form-filter/FormFilter';

import { Title } from './styles/GlobalStyles';
import UsersTable from './components/users-table/UsersTable';
import { useState } from 'react';
import { USERS } from './constants/user';

const App = () => {
	const [isActive, setIsActive] = useState(false);
	const [orderBy, setOrderBy] = useState('0');
	const [search, setSearch] = useState('');
	let filteredUsers = filterByActive(USERS, isActive);
	filteredUsers = filterByName(filteredUsers, search);
	filteredUsers = sortedBy(filteredUsers, orderBy);
	return (
		<>
			<Title>Listado de usuarios</Title>
			<FormFilter
				setSearch={setSearch}
				setIsActive={setIsActive}
				setOrderBy={setOrderBy}
			/>

			<UsersTable filteredUsers={filteredUsers} />
		</>
	);
};

//* Función filtrar activos

const filterByActive = (users, isActive) => {
	if (!isActive) return [...users];
	else return users.filter(user => user.active);
};

//* Función ordenar por búsqueda

const filterByName = (users, search) => {
	const searchWord = search.toLowerCase();
	if (!searchWord) return [...users];
	return users.filter(user => user.name.toLowerCase().includes(searchWord));
};

//* Función ordenar: según la opción del select ordeno los usuarios

const sortedBy = (users, orderBy) => {
	const sortedUsers = [...users];
	if (orderBy === '0') return sortedUsers;
	else if (orderBy === '1')
		return sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
};

export default App;
