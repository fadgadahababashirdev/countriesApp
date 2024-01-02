import React from 'react'

const Filter = ({continent,setContinent}) => {
  return (
    <div>
       <select class="form-select mx-5 formm" aria-label="Default select example"
     value={continent}
     onChange = {(e)=>setContinent(e.target.value)}
     >
            <option selected className='mt-2'>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Ocenia">Ocenia</option>
      </select>
    </div>
  )
}

export default Filter