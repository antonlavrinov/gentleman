import React from 'react';
import { ReactComponent as Search } from '../assets/search-icon.svg';


const SearchField = () => {
    return (
        <div className="search-field">
            <form action="post" className="search-field__form">
                <input type="text" placeholder="Поиск..." className="search-field__input"/>
                <button className="search-field__button"><Search className="search-field__icon"/></button>
            </form>
        </div>
    )
}

export default SearchField;