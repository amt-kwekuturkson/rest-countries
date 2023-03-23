import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import {
  CountryContext,
  CountryProvider,
} from "../../../components/CountryContext";
import { DataType, CountriesType } from "../../../components/CustomTypes";

interface BorderType {
  data: string[];
  description: string;
}

const noData = (props: string) => {
  return <p>{props}:</p>;
};
const DataItem = (props: BorderType) => {
  return (
    <p>
      {props.description}: {props.data}
    </p>
  );
};

const DataList = (props: BorderType) => {
  const arr: string[] = props.data;
  const value: DataType = useContext(CountryContext);

  const countries: CountriesType[] = value.countries;

  const navigate = useNavigate();

  const cardClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    let name: string = e.currentTarget.getAttribute("id")!;

    navigate(`/details/`, { state: { name: name } });
  };

  const Converter = (props: string) => {
    const output: CountriesType[] = countries;
    const result: CountriesType[] = output.filter((country) => {
      return country.cioc === props || country.alpha3Code === props;
    });
    let stored: string[] = result.map((item) => item.name);
    let final: string = stored[0];

    return { final };
  };

  return (
    <CountryProvider
      countries={countries}
      search={undefined}
      filter={undefined}
      load={true}
      word={""}
      error={null}
    >
      <p>{props.description} </p>
      {arr.map((el: string, index: number) => {
        const result = Converter(el);
        return (
          <button onClick={cardClicked} id={result.final} key={index}>
            <span>{result.final}</span>{" "}
          </button>
        );
      })}
    </CountryProvider>
  );
};

export const Borders = (props: BorderType) => {
  const data: string[] = props.data;
  const description: string = props.description;

  const check: boolean = !Array.isArray(data);

  if (check) {
    return DataItem(props);
  }
  if (!check) {
    return DataList(props);
  }
  return noData(description);
};
