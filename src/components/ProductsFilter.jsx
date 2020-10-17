import React, {useState, useEffect} from 'react';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import SeasonFilter from './SeasonFilter';
import MaterialFilter from './MaterialFilter';
import PriceFilter from './PriceFilter';
import {ReactComponent as SettingsIcon} from '../assets/settings-icon.svg';


const ProductsFilter = ({colorFilter, products}) => {
    const [filterSize, setFilterSize] = useState([]);
    const [filterColor, setFilterColor] = useState([]);
    const [filterMaterial, setFilterMaterial] = useState([]);
    const [filterSeason, setFilterSeason] = useState([]);
    useEffect(() => {
        const sizes = [];
        const color = [];
        const season = [];
        const material = [];
        products.forEach(product => {
            if(product.sizes) {
                sizes.push(product.sizes)
            }
            if(product.color) {
                color.push(product.color)
            }
            if(product.material) {
                material.push(product.material)
            }
            if(product.season) {
                season.push(product.season)
            }
            return;
        })
        setFilterSize(sizes)
        setFilterColor(color)
        setFilterMaterial(material)
        setFilterSeason(season)

    }, [products])
    return (
        <div className="products-filter">
            <div className="products-filter__title">
                Фильтр <SettingsIcon/>
            </div>
            {products.length > 0 && filterColor.length > 0 && <ColorFilter products={products}/>}
            {products.length > 0 && filterSize.length > 0 && <SizeFilter products={products}/>}
            {products.length > 0 && filterSeason.length > 0 && <SeasonFilter products={products}/>}
            {products.length > 0 && filterMaterial.length > 0 && <MaterialFilter products={products}/>}
            {products.length > 0 ? <PriceFilter products={products}/> : null}
        </div>
    )
}




export default ProductsFilter