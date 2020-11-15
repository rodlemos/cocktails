import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails,loading} = useGlobalContext();

  if(loading){
    return <Loading/>
  }

  if(cocktails.length < 1){
    return(
    <h1 className="warning">No cocktails matched your search</h1>
    )
  }
  return (
    <section className="sec container">
      <h1 className="sec-title">Cocktails</h1>
      <div className="coctails-center">
        {cocktails.map((item)=>{
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
