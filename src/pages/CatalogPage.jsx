import React from 'react';
import { Route } from 'react-router-dom';
import SectionPage from './SectionPage';
import CatalogCollection from '../components/CatalogCollection';
import Breadсrumbs from '../components/Breadcrumbs';

const CatalogPage = ({ match }) => {

    return (
        <div className="catalog-page">
            <Breadсrumbs />
            <Route exact path={`${match.path}`} component={CatalogCollection} />
            <Route path={`${match.path}/:sectionName`} component={SectionPage} />
        </div>
    )
}



export default CatalogPage;