import axios from 'axios';
import {useParams} from 'react-router-dom'
import {API} from './Path'
import { useState } from 'react'

const UpdateService = () => {
	const[name,setName] = useState('')
  const[weight,setWeight] = useState('')
  const[size,setSize] = useState('')
	const {id} = useParams()

	const readData = () => {
    axios
    .get(`${API}/${id}`)
    .then(res => {
      setName(res.data.name)
      setWeight(res.data.weight)
      setSize(res.data.size)
    })
  }
  
	const updateData = () => {
		axios
			.put(`${API}/${id}`, {
				name,
				weight,
				size,
			});
	}

	return {readData,updateData,name,setName,weight,setWeight,size,setSize}
}

export default UpdateService;