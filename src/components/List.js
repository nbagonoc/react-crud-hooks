import {useEffect} from 'react';
import {Table,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import ReadAllService from '../services/ReadAllService';

const List = () => {
  const {apiData,getData} = ReadAllService();

  useEffect(() => {
    getData();
  },[])

  return (
    <Table bordered>
  <thead>
    <tr>
      <th>Name</th>
      <th>Weight</th>
      <th>Size</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {apiData.map(data=>{
      return (
        <tr key={data._id}>
          <td>{data.name}</td>
          <td>{data.weight}</td>
          <td>{data.size}</td>
          <td>
            <Link to={`/update/${data._id}`} className='btn btn-primary mr-2'>Update</Link>
            <Button color="danger">Delete</Button>
          </td>
        </tr>
      )
    })}
  </tbody>
  </Table>
  );
};

export default List;