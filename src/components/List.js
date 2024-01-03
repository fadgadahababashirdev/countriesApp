import React from 'react';

const List = ({ allCountries }) => {
  return (
    <ul className="list-unstyled">
      <div className="container-fluid">
        <div className="row">
          {allCountries.map((country, index) => {
            return (
              <div className="col-sm-3" key={country.id}>
                <div className="card mt-2 mx-2" style={{ width: '18rem',height:'25rem' }}>
                          <img
                            className="card-img-top"
                            src={country.flags.svg}
                            alt={`country image for ${country.name.common}`}
                          />
                      <div className="card-body">
                        <h5 className="card-title">{country.name.common}</h5>
                        <p className="card-text">Population: {country.population}</p>
                        <p className="card-text">Region: {country.region}</p>
                        <p className="card-text">Capital: {country.capital}</p>
                      </div>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
    </ul>
  );
};

export default List;
