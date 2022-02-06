import {useState} from 'react';
import axios from 'axios';
import {API} from './Path';

const ReadAllService = () => {
    const [apiData, setApiData] = useState([]);
    
    const getData = () => {
      axios
      .get(API)
      .then(res => {
        setApiData(res.data)
      })
    }
    
    return {apiData, getData};
};

export default ReadAllService;
