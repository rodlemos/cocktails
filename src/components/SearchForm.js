import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const serchValue = React.useRef('');
  React.useEffect(()=>{serchValue.current.focus()},[])

  const searchCocktail = ()=>{
    setSearchTerm(serchValue.current.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <section className="sec search">
      <form className="serch-form" onSubmit={handleSubmit}>
        <div className="form-control">
           <label htmlFor="name">Search for a cocktail</label>
           <input type="text" id="name" ref={serchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
