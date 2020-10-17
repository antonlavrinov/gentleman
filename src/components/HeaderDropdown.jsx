import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { selectCategoryBySection } from '../redux/categories/category.selectors';
import clothing from '../assets/clothing-category.jpg';
import shoes from '../assets/shoes-category.jpg';
import accessories from '../assets/accessories-category.jpg';
import { resetFilter } from '../redux/filter/filter.actions';
import {resetFiltersComponent} from '../redux/filters-reset/filters-reset.actions';

const HeaderDropdown = ({section,resetFiltersComponent, sectionSelected, clothingCategory, accessoriesCategory, shoesCategory, resetFilters}) => {
    const categoryImg = sectionSelected === 'clothing' ? (clothing) : 
                        (sectionSelected === 'shoes') ? (shoes) : 
                        (sectionSelected === 'accessories') ? (accessories) : null;

    return (
        <div>
            {section ? (
                <div className="header__section-dropdown">
                    <div className="header__section-dropdown-list">
                        {sectionSelected && eval(`${sectionSelected}Category`).map((category, idx) => {
                            return (
                                <div key={idx} className="header__category-links">
                                    <div  className="header__category-item">
                                        <Link onClick={() => {resetFilters(); resetFiltersComponent()}} className="header__category-link" to={`${category.linkUrl}`}>
                                            {category.categoryTitle}
                                        </Link>
                                        
                                    </div>

                                </div>
                            )
                        })}
                    </div>

                    <img src={categoryImg} alt="category" className="header__category-image"/>
            </div> 
            ) : null}
            {/* <CSSTransition in={section}  timeout={10} classNames="header__section-dropdown" unmountOnExit> */}

            {/* </CSSTransition> */}
        </div>

    )   
}

const mapStateToProps = (state) => ({
    clothingCategory: selectCategoryBySection('clothing')(state),
    shoesCategory: selectCategoryBySection('shoes')(state),
    accessoriesCategory: selectCategoryBySection('accessories')(state),
})

const mapDispatchToProps = dispatch => ({ 
    resetFilters: () => dispatch(resetFilter()),
    resetFiltersComponent: () => dispatch(resetFiltersComponent())
  })




export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);