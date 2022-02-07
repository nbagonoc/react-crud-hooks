import axios from 'axios';
import {API} from './Path'
import ReadAllService from './ReadAllService';

const DeleteService = () => {
  const {getData} = ReadAllService();

  const deleteItem = (id) => {
    axios
    .delete(`${API}/${id}`)
    .then(() => {
      getData();
    });
  }
  
  return {deleteItem}
};

export default DeleteService;
