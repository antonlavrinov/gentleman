import React from 'react';
import SectionCollection from '../components/SectionCollection';
import CategoryPage from './CategoryPage';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectSectionNavNames } from '../redux/sections/section.selectors';
import { Redirect } from 'react-router';


const SectionPage = ({ match, sectionLinks }) => {
    return (
        <>
            {sectionLinks.find((sectionLink => sectionLink === match.params.sectionName)) ? (
                <div className="section-page">
                    <Route path={`${match.path}`} exact component={SectionCollection} />
                    <Route path={`${match.path}/:categoryName`} component={CategoryPage} />
                </div>
            ) : (
                    <Redirect to="/" />
                )}
        </>
    )
}


const mapStateToProps = (state) => ({
    sectionLinks: selectSectionNavNames(state)
})


export default connect(mapStateToProps)(SectionPage);