import React from 'react';
import { connect } from 'react-redux';
import { selectCategoryBySection } from '../redux/categories/category.selectors';
import { Link } from 'react-router-dom'


const SectionCollection = ({ clothingCategory, shoesCategory, accessoryCategory, match }) => {

    let sectionSelected;

    switch (match.params.sectionName) {
        case 'clothing':
            sectionSelected = clothingCategory;
            break;
        case 'shoes':
            sectionSelected = shoesCategory;
            break;
        case 'accessories':
            sectionSelected = accessoryCategory;
            break;
        default:
            sectionSelected = [];
    }
    return (
        <div className="section-collection">
            {sectionSelected.map((category, idx) => {
                return (
                    <Link className="section-collection__link" key={idx} to={category.linkUrl}>
                        <div className="section-collection__link-overlay">
                            <div className="section-collection__link-overlay-shadow"></div>
                            <div style={{ background: `url(${category.imageUrl})` }} className="section-collection__link-image">
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