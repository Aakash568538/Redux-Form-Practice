import React from 'react';

const ProfileViewPageDetails = ({ users }) => {
	console.log(users);
	return (
		<div>
			<h4>
				User's Profile Details
    </h4>
				{users.map((user,i) => (
					<div>
						<img key={i} src={`data:image/png;base64,${user.picture}`}
							style={{
								width: '200px', maxWidth: '200px',
								height: '200px', flexGrow: 1, opacity: 1.5
							}} alt='' />
						<div>
							<h5>First Name: {user.firstName}</h5><br />
							<h5>Last Name: {user.lastName}</h5><br />
							<h5>Address: {user.address}</h5><br />
							<h5>City: {user.city}</h5><br />
							<h5>Email: {user.email}</h5><br />
						</div>
					</div>
				))
			}
				</div>
	);
};

export default ProfileViewPageDetails;
