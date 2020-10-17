import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as SearchIcon} from '../assets/search-icon.svg';
import { ReactComponent as ExitIcon} from '../assets/exit-icon.svg';
import {withRouter} from 'react-router'

const SearchDropdown = ({searchDropdown, toggleSearchDropdown, history}) => {
    const searchStyle = searchDropdown ? '' : 'search-dropdown_disabled';
    const [searchField, setSearchField] = useState('')
    const onSearchSubmit = (e) => {
        if(searchField) {
            e.preventDefault()
            toggleSearchDropdown()
            setSearchField('')
            history.push(`/search/${searchField}`)
        }
        e.preventDefault()

    }

    return (
        <React.Fragment>
            <div className={`search-dropdown ${searchStyle}`}>
                <CSSTransition in={searchDropdown} timeout={300} classNames="search-form" unmountOnExit>
                    <Container>
                        <div className="search-dropdown__block">
                            <form className="search-form" action="POST" onSubmit={onSearchSubmit} >
                                <input onChange={e => setSearchField(e.target.value)} value={searchField} autoFocus className="search-form__search" type="text" placeholder="Я ищу..."/>
                                <button className="search-form__button"><SearchIcon className="search-form__icon"/></button>
                            </form>
                            <div className="search-form__exit"><ExitIcon className="exit-icon" onClick={() => toggleSearchDropdown()}/></div>
                            
                            
                        </div>
                    </Container>
                </CSSTransition>
            </div>
            <CSSTransition in={searchDropdown} timeout={300} classNames="overlay" unmountOnExit onClick={toggleSearchDropdown} >
                <div className="overlay"></div>
            </CSSTransition>
        </React.Fragment>



    )
}

export default withRouter(SearchDropdown)
