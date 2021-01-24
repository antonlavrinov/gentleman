import React, { useState } from 'react';
import Logo from './Logo';
import { connect } from 'react-redux';
import { selectSectionLinks } from '../redux/sections/section.selectors';
import HeaderDropdown from './HeaderDropdown';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectCartItemsCount } from '../redux/cart/cart.selectors';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../assets/cart-icon.svg';
import { ReactComponent as SearchIcon } from '../assets/search-icon.svg';
import WhiteOverlay from './WhiteOverlay';
import Container from 'react-bootstrap/Container';
import { toggleOverlayVisible } from '../redux/overlay/overlay.actions';
import SearchDropdown from './SearchDropdown';
import { toggleCartVisible } from '../redux/cart/cart.actions';
import { toggleSignInDropdownVisible } from '../redux/sign-in-dropdown/sign-in-dropdown.actions';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';


const Header = ({ toggleCartVisible, cartCount, sections, currentUser }) => {
    const [sectionMain, setSection] = useState(null);
    const [searchDropdown, setSearchDropdown] = useState(false);
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);


    const toggleSearchDropdown = () => {
        setSearchDropdown(!searchDropdown)
    }

    const toggleHamburgerIsOpen = (boolean) => {
        if (typeof variable !== 'undefined') {
            setHamburgerIsOpen(boolean);
        } else {
            setHamburgerIsOpen(!hamburgerIsOpen);
        }

    }

    return (
        <header className="main-header">
            <div className="header">
                <Container>
                    <div className="header__block">
                        <div className="header__logo-and-nav">
                            <Logo additionalClass="header__logo" />
                            <Link to="/" className="header__logo_mobile">G.</Link>
                            <nav className={`header__sections ${hamburgerIsOpen && "header__sections_active"}`}>
                                <ul
                                    className="header__list"
                                    onClick={() => toggleHamburgerIsOpen(false)}>

                                    <li
                                        className="header__list-item"
                                        onClick={() => setSection(null)}
                                        onMouseEnter={() => setSection('clothing')}
                                        onMouseLeave={() => setSection(null)}>
                                        <Link className="header__list-link" to="/catalog/clothing">Одежда</Link>
                                        <HeaderDropdown
                                            sectionSelected={sectionMain}
                                            section={sectionMain === 'clothing' ? true : false} />
                                    </li>
                                    <li
                                        className="header__list-item"
                                        onClick={() => setSection(null)}
                                        onMouseEnter={() => setSection('shoes')}
                                        onMouseLeave={() => setSection(null)}>
                                        <Link className="header__list-link" to="/catalog/shoes">Обувь</Link>
                                        <HeaderDropdown
                                            sectionSelected={sectionMain}
                                            section={sectionMain === 'shoes' ? true : false} />
                                    </li>
                                    <li
                                        className="header__list-item"
                                        onClick={() => setSection(null)}
                                        onMouseEnter={() => setSection('accessories')}
                                        onMouseLeave={() => setSection(null)}>
                                        <Link className="header__list-link" to="/catalog/accessories">Аксессуары</Link>
                                        <HeaderDropdown
                                            sectionSelected={sectionMain}
                                            section={sectionMain === 'accessories' ? true : false} />
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__links">
                            <div onClick={toggleSearchDropdown} className="header__link header__link_search">
                                <SearchIcon className="header__link-icon" />
                                <div className="header__link-title">Поиск</div>
                            </div>
                            <div onClick={() => toggleCartVisible()} className="header__link header__link_cart">
                                <CartIcon className="header__link-icon" /><span>{cartCount}</span>
                                <div className="header__link-title">Корзина</div>
                            </div>
                        </div>
                        <Hamburger className="hamburger" onClick={toggleHamburgerIsOpen} />
                    </div>
                </Container>
            </div>
            <WhiteOverlay section={sectionMain} />
            <SearchDropdown searchDropdown={searchDropdown} toggleSearchDropdown={toggleSearchDropdown} />
        </header>


    )
}

const mapStateToProps = state => ({
    sections: selectSectionLinks(state),
    currentUser: selectCurrentUser(state),
    cartCount: selectCartItemsCount(state)
})



const mapDispatchToProps = dispatch => ({
    toggleOverlayVisible: (boolean) => dispatch(toggleOverlayVisible(boolean)),
    toggleCartVisible: () => dispatch(toggleCartVisible()),
    toggleSignInDropdownVisible: () => dispatch(toggleSignInDropdownVisible()),
})






export default connect(mapStateToProps, mapDispatchToProps)(Header);