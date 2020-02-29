import React from 'react'

const Search = () => {
    return (
        <div>
            <form className="form">
                <span>
                <input type="text" name="text" placeholder="Search matches...."/>
                
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </span>
            </form>
            
            
        </div>
    )
}

export default Search
