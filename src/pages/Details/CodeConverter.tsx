import { useState, useEffect } from "react";

export const CodeConverter = (props) => {
  const [data, setData] = useState([]);

  const code = props.toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/alpha/${code}?fields=name`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [code]);

  return { data };
};
