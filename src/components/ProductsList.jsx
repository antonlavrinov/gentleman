import React from 'react';
import ProductItem from './ProductItem';
import { createStructuredSelector } from 'reselect';
import { selectFilter } from '../redux/filter/filter.selectors';
import {connect} from 'react-redux';


const ProductsList = ({products, filters}) => {


    const multiPropsFilter = (products, filters) => {
     
        // const filterKeys = Object.keys(filters);
        // return products.filter(item => {
        //   // validates all filter criteria
        //   return filterKeys.every(key => {
        //     // ignores non-function predicates
        //     if (typeof filters[key] !== 'function') return true;
        //     return filters[key](item[key]);
        //   });
        // });


            const filterKeys = Object.keys(filters);
            return products.filter(item => {
              // validates all filter criteria
              return filterKeys.every(key => {
                // ignores non-function predicates
                if (typeof filters[key] !== 'function') {
                    // return true;
                    if(!filters[key].length) return true;
                    if(Array.isArray(item[key])) {
                        return item[key].some(keyElem => filters[key].includes(keyElem))
                    }
                    return filters[key].includes(item[key])
                }
                return filters[key](item[key]);
              });
            });

        // const filterKeys = Object.keys(filters);
        // return products.filter(product => {
        //     return filterKeys.every(key => {
        //         if(!filters[key].length) return true;
        //         if(Array.isArray(product[key])) {
        //             return product[key].some(keyElem => filters[key].includes(keyElem))
        //         }
        //         return filters[key].includes(product[key])
        //     })
        // })
        // const filterKeys = Object.keys(filters);
        // return products.filter(item => {
        //   // validates all filter criteria
        //   return filterKeys.every(key => {
        //     // ignores an empty filter
        //     if (!filters[key].length) return true;
        //     return filters[key].find(filter => filter === item[key]);
        //   });
        // });
    }



    const filteredProducts = multiPropsFilter(products, filters);
    return (
        <div className="products-list">
        {filteredProducts && filteredProducts.map((product, idx) => {
            return <ProductItem key={idx} product={product}/> 
        })}
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    filters: selectFilter
})




export default connect(mapStateToProps)(ProductsList);