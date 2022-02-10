import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import InfoStat from '../components/InfoStat';

const InfoPage = () => {
  const { country } = useParams();
  const countries = useSelector((state) => state);
  const countryObj = countries.find((element) => element.Country === country);
  return (
    <div>
      <div className="infohead">
        <div className="infoheaderLeft">
          <img className="countryImgInfoPage" src={`/all/${countryObj.CountryCode.toLowerCase()}/vector.svg`} alt="" />
        </div>
        <div className="infoheaderRight">
          <h2>{countryObj.Country}</h2>
          <p>
            Total Cases:
            <br />
            {countryObj.TotalConfirmed}
            <br />
            **
          </p>
        </div>
      </div>
      <div className="mainTxtStripe">
        stats:
      </div>
      <InfoStat metric="New Confirmed Cases:" amount={countryObj.NewConfirmed} />
      <InfoStat metric="Total Confirmed Cases:" amount={countryObj.TotalConfirmed} />
      <InfoStat metric="New Confirmed Deaths:" amount={countryObj.NewDeaths} />
      <InfoStat metric="Total Confirmed Deaths:" amount={countryObj.TotalDeaths} />
    </div>
  );
};

export default InfoPage;
