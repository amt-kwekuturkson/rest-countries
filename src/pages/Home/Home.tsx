import React from "react";
import CardList from "../../Components/CardList.tsx";
import FilterButton from "../../Components/FilterButton.tsx";
import SearchButton from "../../Components/SearchButton.tsx";
import { CountryProvider } from "../../Components/CountryContext.tsx";
import { useFetch } from "../../hooks/useFetch.tsx";


const Home = () => {

    const { countries, loading } = useFetch();

    
return (
    <div className="App">

      <div className="filter_container">
        <SearchButton />
        <FilterButton />
      </div>
      <CountryProvider data={countries} load={loading}>
           <CardList />
        </CountryProvider>
    </div>
)
}

export default Home;