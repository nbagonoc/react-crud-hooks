import { useEffect } from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import UpdateService from '../services/UpdateService'


const Update = () => {
  const {readData,updateData,name,setName,weight,setWeight,size,setSize} = UpdateService()
  const history = useHistory()

  useEffect(() => {
    readData()
  },[])

  const sendDataToAPI = (e) => {
    e.preventDefault()
    updateData()
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
