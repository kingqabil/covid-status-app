import React, { useEffect, useState } from 'react';
import { fetchCountryInfo, getAllData  } from '../API';
import { useDispatch, useSelector } from 'react-redux';
import MainBlock from '../components/MainBlock';

const Main = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCountryInfo())
  }, []);
  const Countries = useSelector((state) => state);

  return (
    <div>
      {Countries.map((countrObj) =>
        <MainBlock txt={countrObj} />
      )}
      hello
      
    </div>
  )
}

export default Main;
