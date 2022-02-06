import axios from 'axios';
import {API} from './Path'

const CreateService = (data) => {
	let {name, weight, size} = data;
	axios.post(API, {
		name,
		weight,
		size,
	});
}

export default CreateService;