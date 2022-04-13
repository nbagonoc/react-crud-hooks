import {useEffect} from 'react'
import {Table,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

import DeleteService from '../services/DeleteService'
import ReadAllService from '../services/ReadAllService'

const List = () => {
  const {apiData,fetchData,setFetchData,getData} = ReadAllService()
  const {deleteItem} = DeleteService()

  const onDelete = (id) => {
    deleteItem(id)
  }

  useEffect(() => {
    getData()
    setFetchData(false)
  },[fetchData])

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
        {apiData?.map(({_id,name,weight,size})=>{
          return (
            <tr key={_id}>
              <td>{name}</td>
              <td>{weight}</td>
              <td>{size}</td>
              <td>
                <Link onClick={()=>setFetchData(true)} to={`/update/${_id}`} className='btn btn-primary mr-2'>Update</Link>
                <Button color="danger" onClick={()=>[onDelete(_id),setFetchData(true)]}>Delete</Button>
              </td>
            </tr>
          )
        })}
      </tbody>
      </Table>
    ) : <h3>No entries...</h3>
  )
}

export default List