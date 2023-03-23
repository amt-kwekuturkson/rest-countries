import { useState, useEffect } from "react";
import { CountriesType } from "../components/CustomTypes";

const useFetch = () => {
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null | any>(null);
  let [view, setView] = useState<CountriesType[]>([]);
  const [regionKey, setRegionKey] = useState<string | null>(null);
  let [word, setWord] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response: Response = await fetch(
          "https://restcountries.com/v2/all?fields=name,capital,population,region,nativeName,flag,subregion,languages,currencies,borders,topLevelDomain,cioc,alpha3Code"
        );
        const data: CountriesType[] = await response.json();
        console.log(data);
        setLoading(false);
        setCountries(data);
        setView(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word: string = e.currentTarget.value.toLowerCase();
    setWord(word);
  };

  const region = (e: React.MouseEvent<HTMLLIElement>) => {
    const key: string = e.currentTarget.id.toLowerCase();

    let toDisplay: CountriesType[] = countries.filter((country) =>
      country.region.toLowerCase().includes(key)
    );
    setView(toDisplay);
    setRegionKey(key);
  };

  return { countries, view, region, search, regionKey, word, loading, error };
};

export default useFetch;
