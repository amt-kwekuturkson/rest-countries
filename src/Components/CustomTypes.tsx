export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
  Iso639_1: string;
  Iso639_2: string;
  name: string;
  nativeName: string;
}

export interface CountriesType {
  name: string;
  capital: string;
  population: number;
  region: string;
  flag: string;
  subregion: string;
  languages: Languages[];
  currencies: Currencies[];
  cioc: string;
  alpha3Code: string;
  borders: string[];
  topLevelDomain: string[];
  nativeName: string;
}

export interface DataType {
  countries: CountriesType[];
  filter: ((e: React.MouseEvent<HTMLLIElement>) => void) | undefined;
  search: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  word: string;
  error: boolean | null;
  load: boolean;
}
