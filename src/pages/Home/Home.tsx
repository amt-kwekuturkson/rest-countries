import React from "react";
import CardList from "../../Components/CardList.tsx";
import FilterButton from "../../Components/FilterButton.tsx";
import SearchButton from "../../Components/SearchButton.tsx";
import { CountryProvider } from "../../Components/CountryContext.tsx";
import { useFetch } from "../../hooks/useFetch.tsx";
import { ErrorBoundary } from "../../Components/ErrorBoundary.tsx";


const Home = () => {

    const { countries, loading, search, region, error } = useFetch();

    
return (
    <div className="App">
 

   
      <div className="filter_container">
        <CountryProvider data ={countries}  filter={search} error={error}>
           <SearchButton />
        </CountryProvider>
       <CountryProvider data ={countries}  filter={region} error={error}>
         <FilterButton />
       </CountryProvider>
        
      </div>
      <ErrorBoundary >
      <CountryProvider data={countries} load={loading} error={error}>
           <CardList />
      </CountryProvider>
      </ErrorBoundary>
     
    </div>
)
}

export default Home;