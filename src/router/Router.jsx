import { Route, Routes } from 'react-router-dom';

import Main from '../components/main/Main';
import User from '../pages/User';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/:userId' element={<User />} />
		</Routes>
	);
};

export default Router;
