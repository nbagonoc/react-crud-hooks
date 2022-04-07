import axios from 'axios';
import { useState } from 'react'
import {API} from './Path'

const CreateService = () => {
	const[name,setName] = useState('')
  const[weight,setWeight] = useState('')
  const[size,setSize] = useState('')
  
	const pushData = (data) => {
		let {name, weight, size} = data;
		axios
			.post(API, {
				name,
				weight,
				size,
			});
	}

	return {pushData,name,setName,weight,setWeight,size,setSize}
}

export default CreateService;