import React from "react";
import axios from "axios";

const Search = (props) => {

    const {search, setSearch} = props;

    const onSubmitHandler = (e) => {
    
        axios.get(`https://swapi.dev/api/${search.category}/${search.id}`)
            .then(response => {
                setSearch(response.data);
                console.log(response.data);
            })
            .catch(response => {
                setSearch({name: "Unknown"})
            });
        console.log("Se hizo la búsqueda");
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearch ({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="category">Search for:</label>
          
                <select className= "form-select" onChange={onChangeHandler} name="category" value={search.category}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
<br />
            <div>
                <label htmlFor="id">ID: </label>
                <input onChange={onChangeHandler} type="number" name ="id" value={search.id}></input>
            </div>
            <br />
            <div>
                <button className='btn btn-primary' >Search</button>
            </div>
            <br />
        </form>
    );
}

export default Search;