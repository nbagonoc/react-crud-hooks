import axios from 'axios';
import { useState } from 'react'
import {API} from './Path'

const CreateService = () => {
	const[name,setName] = useState('')
  const[weight,setWeight] = useState('')
  const[size,setSize] = useState('')
  
	const pushData = () => {
		axios
			.post(API, {
				name,
				weight,
				size,
			});
	}

	return {pushData,setName,setWeight,setSize}
}

export default CreateService;