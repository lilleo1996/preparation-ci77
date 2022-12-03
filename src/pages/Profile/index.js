import {Outlet} from 'react-router-dom';

const Profile = () => {
	return (
		<div>
			<h3>This is profile page</h3>
			<Outlet />
		</div>
	)
};

export default Profile;