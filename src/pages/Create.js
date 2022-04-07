import CreateService from '../services/CreateService'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'


const Create = () => {
  const history = useHistory()
  const {pushData,name,setName,weight,setWeight,size,setSize} = CreateService()

  const sendDataToAPI = () => {
    const data = {name,weight,size}
    pushData(data)
    history.push('/')
  }

  return (
    <>
      <h1 className=''>Create</h1>
      <Form onSubmit={sendDataToAPI}>
        <FormGroup>
          <Label>Item:</Label>
          <Input name='name' type='text' placeholder='enter item' onChange={e => setName(e.target.value)}></Input>
          <Label>Weight:</Label>
          <Input name='weight' type='text' placeholder='enter size' onChange={e => setWeight(e.target.value)}></Input>
          <Label>Size:</Label>
          <Input name='size' type='text' placeholder='enter weight' onChange={e => setSize(e.target.value)}></Input>
        </FormGroup>
        <Button color='primary' type='submit'>Submit</Button>
        <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
      </Form>
    </>
  );
};

export default Create;
