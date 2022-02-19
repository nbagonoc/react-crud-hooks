import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../services/Path'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link,useParams,useHistory} from 'react-router-dom'
import UpdateService from '../services/UpdateService'


const Update = () => {
  // Refactor. Move to service
  const[name,setName] = useState('')
  const[weight,setWeight] = useState('')
  const[size,setSize] = useState('')
  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    getDataFromAPI()
  },[])

  const getDataFromAPI = () => {
    axios
    .get(`${API}/${id}`)
    .then(res => {
      setName(res.data.name)
      setWeight(res.data.weight)
      setSize(res.data.size)
    })
  }

  const sendDataToAPI = (e) => {
    e.preventDefault()
    const data = {id,name,weight,size}
    UpdateService(data)
    history.push('/')
  }

  return (
    <>
      <h1 className=''>Create</h1>
      <Form onSubmit={sendDataToAPI}>
        <FormGroup>
          <Label>Item:</Label>
          <Input name='name' type='text' placeholder='enter item' value={name} onChange={e => setName(e.target.value)}></Input>
          <Label>Weight:</Label>
          <Input name='weight' type='text' placeholder='enter size' value={weight} onChange={e => setWeight(e.target.value)}></Input>
          <Label>Size:</Label>
          <Input name='size' type='text' placeholder='enter weight' value={size} onChange={e => setSize(e.target.value)}></Input>
        </FormGroup>
        <Button color='primary' type='submit'>Update</Button>
        <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
      </Form>
    </>
  )
}

export default Update
