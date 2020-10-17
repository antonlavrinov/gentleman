import React from 'react';
import {connect} from 'react-redux';
import { selectSectionLinks } from '../redux/sections/section.selectors';
import { Link } from 'react-router-dom'

const CatalogCollection = ({match, sections}) => {
    return (
        <div className="catalog-collection">
            {sections.map((section, idx) => {
                return (
                    <Link className="catalog-collection__link" key={idx} to={section.linkUrl}>
                        <div className="catalog-collection__link-overlay">
                            <div className="catalog-collection__link-overlay-shadow"></div>
                            <div style={{background: `url(${section.imageUrl})`, backgroundSize: '100%'}} className="catalog-collection__link-image">

                            </div>
                        </div>

                            <div className="catalog-collection__link-title">
                                {section.sectionTitle}
                            </div>
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    sections: selectSectionLinks(state)
})




export default connect(mapStateToProps)(CatalogCollection);