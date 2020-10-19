import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {selectItemsByCategory} from '../redux/products/products.selectors';
import { selectCategoryNavNames} from '../redux/categories/category.selectors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductsList from '../components/ProductsList';
import ProductsFilter from '../components/ProductsFilter';
import {Redirect} from 'react-router';
import { selectFilter } from '../redux/filter/filter.selectors';
import { selectFiltersResetKey } from '../redux/filters-reset/filters-reset.selectors';


const CategoryPage = ({products, match, categoryLinks, filters, filtersResetKey}) => {
    // const [categoryProducts, setCategoryProducts] = useState([]) 
    const [childKey, setChildKey] = useState(Math.random())

    return (


        <React.Fragment>
            {categoryLinks.find((categoryLink => categoryLink === match.params.categoryName)) ? (
                    <Row>
                        <Col lg={3}>
                            <ProductsFilter key={filtersResetKey} products={products}/>
                        </Col>
                        <Col>
                            <ProductsList products={products}/>
                        </Col>
                    </Row> 
                ) : (
                    <Redirect to="/"/>
                )
            }         
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    products: selectItemsByCategory(ownProps.match.params.categoryName)(state),
    categoryLinks: selectCategoryNavNames(state),
    filters: selectFilter(state),
    filtersResetKey: selectFiltersResetKey(state)
});




export default connect(mapStateToProps)(CategoryPage);