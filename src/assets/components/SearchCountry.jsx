import React, { useRef, useState } from 'react';
import CountryInfo from './CountryInfo';

const SearchCountry = () => {
  const [countryInputValue, setCountryInputValue] = useState('');
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [incorrectCountryName, setIncorrectCountryName] = useState('');
  const [fetchError, setFetchError] = useState('');

  // const searchInput = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const countryName = countryInputValue.toLowerCase().trim();

    let API_URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data && data.length > 0) {
        setCountryData(data);
        setIncorrectCountryName('');
        setFetchError('');
      } else {
        setIncorrectCountryName('Please enter a correct country name');
      }
    } catch (error) {
      console.log('Error: ' + error);
      setFetchError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-slate-200 w-max flex flex-col items-center max-w-[100%] mx-auto rounded-lg shadow-md shadow-cyan-700 py-8 h-32 mt-[4rem] max-[420px]:mt-[2rem]'>
      <form
        onSubmit={handleSubmit}
        className='relative w-[550px] max-sm:w-[90%] mx-6 border-2 border-none outline-none mb-[1rem] flex items-center justify-center'
      >
        <input
          autoFocus
          // ref={searchInput}
          className='w-[100%] p-3 bg-slate-200 max-sm:text-[1rem] z-[555] max-[420px]:pr-[6rem] max-[360px]:pr-[1rem] py-4 pr-[9rem] rounded-md border-2 border-slate-500 placeholder:text-slate-500 focus:border-cyan-600 focus:text-cyan-600 focus:placeholder:text-cyan-600 font-[500] text-[1.2rem] outline-none transition-all duration-300 ease-in-out'
          type='text'
          placeholder='Enter country name...'
          onChange={(e) => setCountryInputValue(e.target.value)}
        />
        <input
          className={`${
            countryInputValue.length > 0
              ? 'w-[25%] max-sm:w-[28%] h-[100%] z-[666] opacity-1 max-sm:text-[1.03rem] scale-100 pointer-events-auto origin-right uppercase rounded-tr-md rounded-br-md transition-all duration-500 ease-in-out text-[#fff] font-[500] text-[1.3rem] inline-flex items-center justify-center bg-cyan-600 absolute right-0'
              : 'w-[25%] max-sm:w-[28%] h-[100%] opacity-0 max-sm:text-[1.03rem]  pointer-events-none scale-90 origin-right uppercase rounded-tr-md rounded-br-md transition-all duration-300 ease-in text-[#fff] font-[500] text-[1.3rem] inline-flex items-center justify-center cursor-none bg-cyan-600 absolute right-0'
          }`}
          type='submit'
          value='search'
        />
      </form>

      {countryData.length > 0 &&
        incorrectCountryName.length === 0 &&
        fetchError.length === 0 && (
          <CountryInfo countryData={countryData} loading={loading} />
        )}
      <div
        className={`${
          incorrectCountryName !== ''
            ? ' bg-slate-200 text-red-500 w-[100%] transition-all duration-300 ease-in-out opacity-100 max-w-[100%] rounded-md py-4 px-6 text-[1.5rem]'
            : 'opacity-0 transition-all w-[100%] duration-100 ease-in h-0'
        }`}
      >
        {incorrectCountryName}
      </div>

      <div
        className={`${
          fetchError !== '' && incorrectCountryName === ''
            ? 'bg-slate-200 w-[100%] text-red-500 transition-all duration-300 ease-in-out opacity-100 max-w-[100%] rounded-md py-4 px-6 text-[1.5rem]'
            : 'opacity-0 w-[100%] transition-all duration-100 ease-in h-0'
        }`}
      >
        Please check your internet connection
      </div>
    </div>
  );
};

export default SearchCountry;
