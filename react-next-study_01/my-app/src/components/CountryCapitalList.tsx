const countryCapitals = [
  { country: '日本', capital: '東京' },
  { country: 'アメリカ', capital: 'ワシントンD.C.' },
  { country: '中国', capital: '北京' },
  { country: 'イギリス', capital: 'ロンドン' },
];

const CountryCapitalList = () => {
  return (
    <div>
      <h1>国の首都リスト</h1>
      {countryCapitals.map(countryCapitals => {
        return (
          <div key={countryCapitals.country}
          style={{ 
            borderRadius: 3,
            boxShadow: "0 0 3px #555",
            display: "inline-block",
            width: '160px',
            padding: "13px 15px",
            margin: "3px 5px",
          }}>
            <div style={{
                fontSize: "0.7em",
            }}>
              {countryCapitals.country}
            </div>
            <div style={{
                fontSize: "1.1em",
                fontWeight: "bold",
              }}>              
              {countryCapitals.capital}
            </div>
          </div>
        )
      })}
    </div>
  );
};
export default CountryCapitalList;