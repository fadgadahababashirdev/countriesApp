import React from 'react'
import {useState,useEffect} from 'react'
import Search from './Search'
import Filter from './Filter'
import List from './List'

const AllCountries = () => {
const [allCountries,setAllCountries] = useState([])
const[searchValue,setSearchValue] = useState('')
const[filterCountries,setFilterCountries] =useState ([]) 
const [continent,setContinent] = useState('')


// api data fetch 
useEffect(()=>{
    const fetchData = async()=>{
        try {
            const countriesApi = 'https://restcountries.com/v3.1/all'
            const fetchApi = await fetch(countriesApi)
            const jsonify = await fetchApi.json()
            setAllCountries(jsonify)
            console.log(jsonify)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    fetchData()
 },[])

 useEffect(()=>{
     let filterData = allCountries
    if(searchValue){
        filterData = filterData.filter((country)=>
            country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    if(continent){
        filterData = filterData.filter((country)=>
            country.region.toLowerCase().includes(continent.toLowerCase())
        )
    }
    setFilterCountries(filterData)
 },[searchValue,allCountries,continent])

  return (
    <div>
            <div className="container">
                <div className="row d-flex  mt-5">
                    <div className="col-sm-6 equal-width justify-content-start"> <Search searchValue={searchValue} setSearchValue={setSearchValue}/></div>
                    <div className="col-sm-6 equal-width justify-content-end"><Filter continent={continent} setContinent={setContinent}/></div>
                </div>
          </div>
             
           <List allCountries={filterCountries.length > 0 ?filterCountries:allCountries}/>
            

   

           
    </div>
  )
}

export default AllCountries
