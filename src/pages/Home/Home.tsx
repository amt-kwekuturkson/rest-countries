import React from "react";
import CardList from "../../Components/CardList.tsx";
import FilterButton from "../../Components/FilterButton.tsx";
import SearchButton from "../../Components/SearchButton.tsx";
import { CountryProvider } from "../../Components/CountryContext.tsx";
import { useFetch } from "../../hooks/useFetch.tsx";


const Home = () => {

    const { countries, loading, search, region } = useFetch();

    
return (
    <div className="App">

      <div className="filter_container">
        <CountryProvider data ={countries} load={loading} filter={search}>
           <SearchButton />
        </CountryProvider>
       <CountryProvider data ={countries} load={loading} filter={region}>
         <FilterButton />
       </CountryProvider>
        
      </div>
      <CountryProvider data={countries} load={loading}>
           <CardList />
        </CountryProvider>
    </div>
)
}

export default Home;