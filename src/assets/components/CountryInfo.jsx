import React from 'react';

const CountryInfo = ({ showCountryInfoBox, countryData, loading }) => {
  {
    // console.log(countryData);
    // console.log('Official Name: ', countryData[0].name.common);
    // console.log('Domain Name: ', countryData[0].tld[0]);
    // console.log('Capital: ', countryData[0].capital[0]);
    // console.log('Area: ', countryData[0].area + 'm2');
    // console.log('Continents: ', countryData[0].continents[0]);
    // console.log('Population: ', countryData[0].population);
    // console.log('Flag: ', countryData[0].flags.svg);
    // console.log('CoatOfArms:', countryData[0].coatOfArms.svg);
    // console.log('Currencies Name:', Object.keys(countryData[0].currencies)[0]);
    // console.log(
    //   'Currencies Description:',
    //   Object.values(countryData[0].currencies)[0].name
    // );
    // console.log('Currencies Symbol:', [
    //   // Object.values(data[0].currencies)[1].symbol,
    //   Object.values(countryData[0].currencies)[0].symbol,
    // ]);
    // ]);
  }

  return (
    <>
      <div
        className={`${
          loading !== false
            ? ' bg-slate-200 w-[100%] rounded-md p-8 block text-[2rem]'
            : 'hidden'
        }`}
      >
        Loading...
      </div>
      <div
        className={`${
          showCountryInfoBox !== false && loading !== true
            ? 'bg-slate-200 w-[100%] py-6 px-8 rounded-md opacity-1 block transition-all duration-300 ease-in'
            : 'bg-slate-200 w-[100%] py-6 px-8 rounded-md opacity-0 hidden transition-all duration-300 ease-in'
        } `}
      >
        <div className='flex justify-between items-center max-sm:justify-center max-sm:gap-y-[2rem] max-md:h-auto max-sm:flex-wrap gap-[2%] w-[100%] h-[200px] mb-[2rem]'>
          <img
            className='w-[260px] h-[180px]  max-sm:w-[320px] rounded-md'
            src={countryData[0].flags.png}
          />
          <hr className='w-[2px] max-sm:w-[90%] max-sm:h-[0.2rem] h-[100%] bg-cyan-700' />
          <img
            className='w-[200px] max-sm:w-[250px] h-[200px]'
            src={countryData[0].coatOfArms.png}
          />
        </div>
        <h1 className='text-center font-[900] text-[2rem] text-cyan-800 uppercase'>
          {countryData[0].name.common}
        </h1>

        <div className=' mt-[1rem] flex items-start justify-between max-sm:flex-wrap'>
          <div>
            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Capital:
              <span className='text-cyan-600 text-[1.2rem] underline ml-[0.8rem]'>
                {countryData[0].capital[0]}
              </span>
            </p>
            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Area:
              <span className='text-cyan-600 text-[1.2rem] ml-[0.8rem]'>
                {countryData[0].area} м²
              </span>
            </p>
            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Population:
              <span className='text-cyan-600 text-[1.2rem] ml-[0.8rem] max-sm:break-all'>
                {countryData[0].population}
              </span>
            </p>

            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Currencies:
              <span className='text-cyan-600 text-[1.2rem] ml-[0.8rem]'>
                {`${Object.keys(countryData[0].currencies)[0]}-${
                  Object.values(countryData[0].currencies)[0].name
                }
              (${Object.values(countryData[0].currencies)[0].symbol})
              `}
              </span>
            </p>
          </div>

          <div>
            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Continent:
              <span className='text-cyan-600 text-[1.2rem] ml-[0.8rem]'>
                {countryData[0].continents[0]}
              </span>
            </p>
            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Languages:
              <span className='text-cyan-600 text-[1.2rem] ml-[0.8rem]'>
                {Object.values(countryData[0].languages)
                  .toString()
                  .split(',')
                  .join(', ')}
              </span>
            </p>
            <p className='text-left font-[400] text-[1.4rem] mb-[0.3rem] text-slate-600'>
              Domain Name:
              <span className='text-cyan-600 text-[1.2rem] ml-[0.8rem]'>
                {countryData[0].tld[0]}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
