import React from 'react';
import {connect} from 'react-redux';
import { selectCategoryBySection } from '../redux/categories/category.selectors';
import { Link } from 'react-router-dom'


const SectionCollection = ({clothingCategory, shoesCategory, accessoryCategory, match}) => {
    const sectionSelected = (match.params.sectionName === 'clothing') ? (clothingCategory) : 
                            (match.params.sectionName === 'shoes') ? (shoesCategory) : 
                            (match.params.sectionName === 'accessories') ? (accessoryCategory) : 
                            ([]); 
    return (
        <div className="section-collection">
            {sectionSelected.map((category, idx) => {
                return (
                    <Link className="section-collection__link" key={idx} to={category.linkUrl}>
                        <div className="section-collection__link-overlay">
                            <div className="section-collection__link-overlay-shadow"></div>
                            <div style={{background: `url(${category.imageUrl})`}} className="section-collection__link-image">
                            </div>
                        </div>
                        <div className="section-collection__link-title">
                            {category.categoryTitle}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    clothingCategory: selectCategoryBySection('clothing')(state),
    shoesCategory: selectCategoryBySection('shoes')(state),
    accessoryCategory: selectCategoryBySection('accessories')(state),
})




export default connect(mapStateToProps)(SectionCollection);