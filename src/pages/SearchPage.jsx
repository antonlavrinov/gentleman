import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {selectItemsBySearchInput} from '../redux/products/products.selectors';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductsList from '../components/ProductsList';
import ProductsFilter from '../components/ProductsFilter';


const SearchPage = ({products, match}) => {
    const [searchProducts, setSearchProducts] = useState([]) 
    useEffect(() => {
        setSearchProducts(products)
    }, [products]);
    return (
        <React.Fragment>
            {products.length > 0 ? (
                <Row>
                    <Col lg={3}>
                        <ProductsFilter products={searchProducts}/>
                    </Col>
                    <Col>
                        <ProductsList products={searchProducts}/>
                    </Col>
                    

                </Row> 
            ) : (
                <div className="search-page__not-found">Ничего не найдено...</div>
            )}


   
  


        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    products: selectItemsBySearchInput(ownProps.match.params.searchName)(state)
});

export default connect(mapStateToProps)(SearchPage);