import axios from 'axios';

const CreateService = (data) => {
	let {name, weight, size} = data;
	axios.post(`http://localhost:5000/api/items`, {
		name,
		weight,
		size,
	});
}

export default CreateService;