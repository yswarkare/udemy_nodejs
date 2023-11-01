const usersList = [
	{
		firstname: 'Jack',
		lastname: 'Parsons',
		username: 'jackparsons',
	},
	{
		firstname: 'Carl',
		lastname: 'Sagan',
		username: 'carlsagan',
	},
	{
		firstname: 'Dan',
		lastname: 'Cooper',
		username: 'dancooper',
	},
];

let strData = '<ul>';
for (let i = 0; i < usersList.length; i++) {
	const user = usersList[i];
	strData += `<li>${user.firstname} ${user.lastname}</li>`;
}
strData += '</ul>';

const userListDiv = document.getElementById('user-list');

userListDiv.innerHTML = strData;
