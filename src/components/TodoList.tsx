import axios from "axios";
import { useState } from "react";
import { CardType } from "../type";
const url = import.meta.env.VITE_BACKEND_URL;

const TodoList = () => {
	const [name, setName] = useState("");
	const [img, setImg] = useState("");
	const [price, setPrice] = useState("");
	const [sold, setSold] = useState("");
	const [description, setDescription] = useState("");
	const [list, setList] = useState<CardType[]>([]);

	const getList = async () => {
		try {
			const response = (await axios.get(url)).data;
			console.log(response);
			setList(response);
		} catch (err) {
			console.error(err);
		}
	};
	4;
	const postList = async () => {
		const newCar = {
			name,
			img,
			price,
			sold,
			description,
		};

		try {
			const response = (await axios.post<CardType[]>(url, newCar)).data;
			console.log(response);
		} catch (err) {
			console.error(err);
		}
	};

	// const Delete = (_id: number) => {
	// 	setList(list.filter((todo) => todo._id !== _id));
	// };

	const editTodo = () => {};
	return (
		<div>
			<h1>Card</h1>
			<input
				type="text"
				placeholder="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				placeholder="img"
				type="url"
				value={img}
				onChange={(e) => setImg(e.target.value)}
			/>
			<input
				placeholder="price"
				type="number"
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<input
				placeholder="sold"
				type="text"
				value={sold}
				onChange={(e) => setSold(e.target.value)}
			/>
			<input
				type="text"
				placeholder="descripton"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button onClick={getList}>Add</button>
			<button onClick={postList}>Add log</button>
			{list.map((item) => (
				<div key={item._id}>
					<h1>{item.name}</h1>
					<img src={item.img} alt={item.name} />
					<p>{item.price}</p>
					<p>{item.sold}</p>
					<p>{item.description}</p>
					{/* <button onClick={Delete}>Delete</button> */}
					<button onClick={editTodo}>Edit</button>
				</div>
			))}
		</div>
	);
};

export default TodoList;
