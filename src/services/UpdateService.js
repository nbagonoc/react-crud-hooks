import axios from 'axios';
import {API} from './Path'

const UpdateService = (data) => {
	let {id, name, weight, size} = data;
	axios
		.put(`${API}/${id}`, {
			name,
			weight,
			size,
		});
}

export default UpdateService;