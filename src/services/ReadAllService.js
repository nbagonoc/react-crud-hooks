import {useState} from 'react';
import axios from 'axios';
import {API} from './Path';

const ReadAllService = () => {
  const [apiData, setApiData] = useState([]);
  const [fetchData, setFetchData] = useState(true);
  
  const getData = () => {
    axios
      .get(API)
      .then(res => {
        setApiData(res.data)
    })
  }
  
  return {apiData,fetchData,setFetchData,getData};
};

export default ReadAllService;
