import React from "react";

interface CardProps {
  children: React.ReactNode;
};

interface CoutryCapitalProps {
  country: string;
  capital: string;
}

const countryCapitals = [
  { country: '日本', capital: '東京' },
  { country: 'アメリカ', capital: 'ワシントンD.C.' },
  { country: '中国', capital: '北京' },
  { country: 'イギリス', capital: 'ロンドン' },
];

export const Card = (props: CardProps) => {
  return (
    <div
      style={{ 
        borderRadius: 3,
        boxShadow: "0 0 3px #555",
        display: "inline-block",
        width: '160px',
        padding: "13px 15px",
        margin: "3px 5px",
      }}
    >
      {props.children}
    </div>
  );
};

const CountryCapitalItem = ({ country, capital }: CoutryCapitalProps) => {
  return (
    <>
      <div style={{
          fontSize: "0.7em",
        }}
      >
        {country}
      </div>
      <div style={{
          fontSize: "1.1em",
          fontWeight: "bold",
        }}
      >              
        {capital}
      </div>
    </>
  );
};

const CountryCapitalList = () => {
  return (
    <div>
      <h1>国の首都リスト</h1>
      {countryCapitals.map(countryCapital => {
        return (
          <Card key={countryCapital.country}>
            <CountryCapitalItem
              country={countryCapital.country}
              capital={countryCapital.capital}
            />
          </Card>
        );
      })}
    </div>
  );
};
export default CountryCapitalList;