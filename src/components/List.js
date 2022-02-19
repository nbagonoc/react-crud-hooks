import {useEffect,useState} from 'react'
import {Table,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

import DeleteService from '../services/DeleteService'
import ReadAllService from '../services/ReadAllService'

const List = () => {
  const {apiData,getData} = ReadAllService()
  const {deleteItem} = DeleteService()

  useEffect(() => {
    getData()
  },[apiData.length])

  // toDo
  // move this to a helper file
  const onDelete = (id) => {
    deleteItem(id)
    setTimeout(()=> getData(), 1000) //need to refactor. Figure out how to stop infinite loop with useEffect
  }

  return (
    apiData.length > 0 ? (
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
                <Button color="danger" onClick={()=>onDelete(data._id)}>Delete</Button>
                {/* <Button color="danger" onClick={()=>setID(data._id)}>Delete</Button> */}
              </td>
            </tr>
          )
        })}
      </tbody>
      </Table>
    ) : <h3>Loading...</h3>
  )
}

export default List