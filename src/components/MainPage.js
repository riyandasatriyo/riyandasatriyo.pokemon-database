import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Stack } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './PokeCard';
import axios from 'axios';
import Search from './Search';

const MainPage = () => {
  const[PokeList,setPokeList] = useState([])
  const[PokeSearh,setPokeSearch] = useState([])
  const[url,setUrl] = useState("")
  const[search,setSearch] = useState("")



  const getPokeData = async()=>{
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon")
    getPokeDetail(data.data.results)
  }
  const getPokeSearchs = async()=>{
    const dataSearch = await axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
    //console.log(dataSearch)
    getPokeSearch(dataSearch.data)
  }

  const getPokeDetail = async(data)=>{
    data.map(async(detail) => {
        const result = await axios.get(detail.url)
        //console.log(result.data)
        setPokeList(state =>{
            state = [...state, result.data]
            return state;
            
        })
        
    })
  }
  
  const getPokeSearch = async (dataSearch) =>{
    //console.log(dataSearch)
        setPokeSearch(state =>{
        state = [...state, dataSearch]
        console.log(state)
        return state;
        
    })
  }
  
  const handleClick = () => {
    setSearch(url)
  }
//   const handleSortClick = () =>{
//     const sort = PokeList.sort((a,b) => a.weight>b.weight ? 1:-1)
//     return setPokeList(sort)
//   }

    useEffect(() =>{
        getPokeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(() =>{
        getPokeSearchs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search])
    return (
    <div className="App">
      <header className="App-header">
        <h1>Poke Finder</h1>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              className="search" 
              type="text" 
              placeholder="Search by Name or Pokemon ID...."
              value={url}
              onChange = {e =>setUrl(e.target.value)
            }
              />
            <Button type="submit" variant="primary" onClick={handleClick}>Search</Button>
          </Stack>
          <button type="button" >Bookmark</button>
        </header>
            <button type="button" >Sort By Weight</button>
        <div className="Container">
            <h2>You have Searched:</h2>
        </div>
        <div className="Container">
            <Search pokemon={PokeSearh}/>  
        </div>
        <div className="Container">
            <h2>Another Pokemon: </h2>
        </div>
        <div className="Container">
            <PokeCard pokemon={PokeList}/>
        </div>
    </div>
  )
}

export default MainPage