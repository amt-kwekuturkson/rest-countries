import React,{ useState, useEffect} from "react"
import { CardList } from "../../Components/CardList.tsx";
import { CountryProvider } from "../../Components/CountryContext.tsx";

import { FilterButtons } from "../../Components/Filtering.tsx";


export const Home = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

     try{ const response = await fetch(
         'https://restcountries.com/v2/all?fields=name,capital,population,region,flag'
      );
      const data = await response.json();
      console.log(data);
      setCountries(data);
    }catch(error){ 
      console.log(error);
    }
   };
   fetchData();
  }, []);

return (
    <CountryProvider countries={countries}>
    <div className="App" >
      <FilterButtons />
        <div className="card_container">
            <CardList/>
            <div className="spaceShift"></div>
        </div>   
    </div>
  </CountryProvider>

)
}


