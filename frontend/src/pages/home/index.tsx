import { Component, FormEvent, ReactNode } from "react";
import HomeLayout, { UserListData } from "../../layouts/home.layout";
import Input from "../../lib/ui/input";
import Button from "../../lib/ui/button";
import { Variant } from "../../lib/modules/types";
import { getTime } from "../../lib/modules/utils";
import $ from "jquery";

import { SocketClient, User, UserJson } from "@plume.io/websocket-client";
import { faker } from "@faker-js/faker";
import initSocket from "./initSocket";

export default class HomePage extends Component {
	// Variables
	state = {
		chats: [],
		userList: [],
		actionList: [
			{
				text: "Administrate",
				callback: () => {
					console.log("Administrate");
				},
				icon: "user-gear",
			},
			{
				text: "GitHub",
				callback: () => {
					console.log("GitHub");
				},
				icon: "github",
				iconParent: "brands",
			},
			{
				text: "About",
				callback: () => {
					console.log("About");
				},
				icon: "info",
			},
		],
		value: "",
		sent: false,
	};

	// the dropdown tasks
	dropdownTasks = {
		// the key is the query for the dropdown targets
		// the value is an object with method to map to dropdown tasks
		".chat": {
			create: () => {
				console.log("Create");
			},
			read: () => {
				console.log("Read");
			},
			update: () => {
				console.log("Update");
			},
			delete: () => {
				console.log("Delete");
			},
		},
	};

	client = new SocketClient("open-chat");

	render(): ReactNode {
		const { chats, userList, actionList } = this.state;

		return (
			<HomeLayout
				chats={chats}
				TextForm={this.RenderedInput}
				dropdownTasks={this.dropdownTasks}
				userList={userList}
				actions={actionList}
				username={String(this.client.user?.name)}
			/>
		);
	}

	async componentDidMount() {
		this.toRecentChats();

		this.client.user = new User(faker.person.firstName());
		this.client.initialData = { chats: [] };
		this.client.connect();
		await initSocket(this);
		this.setUsers(this.client?.room?.users);
		const data = this.client.room.data;
		if (typeof data === "object") this.setState({ ...data });
	}

	setUsers = (users: User[]) => {
		console.log("set users");
		const userList = [
			{ username: this.client.user?.name, time: getTime() },
		];
		users.forEach((user) => {
			if (user.name !== this.client.user?.name)
				userList.push({
					username: user.name,
					time: getTime(),
				});
		});
		this.setState({
			userList,
		});
	};

	// Renders
	RenderedInput = () => {
		return (
			<form onSubmit={this.onSubmit}>
				<Input
					controllers={[this.state.value, this.setValue]}
					placeholder="Enter Text"
				/>
				<Button
					variant={Variant.primary}
					icon="paper-plane"
					type="submit"
				/>
			</form>
		);
	};

	// Methods
	setValue = (value: string): void => {
		this.setState({
			value,
		});
	};

	onSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const { chats, value } = this.state;

		if (this.state.value !== "") {
			const message = {
				username: this.client.user?.name,
				content: value,
				time: getTime(),
			};

			this.client.room.updateData({
				chats: [...chats, message],
			});

			this.setState({
				value: "",
			});

			this.toRecentChats();
		}
	};

	toRecentChats = (): void => {
		setTimeout(() => {
			$(".chats").scrollTop($(".chats").prop("scrollHeight"));
		});
	};

	get username() {
		return `${this.client.user?.name} (You)`;
	}
}
