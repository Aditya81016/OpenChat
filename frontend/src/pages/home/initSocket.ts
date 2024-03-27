import HomePage from ".";

export default async function initSocket(page: HomePage) {
	return new Promise((resolve, _reject) => {
		page.client.onConnect = async () => {
			console.log(
				"Connected as",
				page.client.user?.name,
				page.client.user?.id
			);
			const rooms = await page.client.getRooms();
			const room = rooms.find(
				(room) =>
					room.clientName === "open-chat" && room.name === "global"
			);
			console.log(rooms, room);
			if (room) {
				await page.client.joinRoom(room.id);
			} else {
				await page.client.createRoom("global");
			}
			page.client.room.onUsersUpdate = page.setUsers;
			page.client.room.onDataUpdate = (data) => {
				if (typeof data === "object") page.setState({ ...data });
			};

			resolve(undefined);
		};
	});
}
