import {useState, useEffect} from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

      const response = await axios.get(url);
      setData(response.data);

    } catch(err) {
      setError(err.message);
      console.error("Problem retrieving data", err);
    }
  };

    fetchData();
  }, [url]);

  return {data, error};

}

export default useFetchData;