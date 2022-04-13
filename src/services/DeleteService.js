import axios from 'axios'
import {API} from './Path'

const DeleteService = () => {
  const deleteItem = (id) => {
    axios.delete(`${API}/${id}`)
  }
  
  return {deleteItem}
}

export default DeleteService
