import React, {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux';
import { selectFilterPrice } from '../redux/filter/filter.selectors';
import { createStructuredSelector } from 'reselect';
import { setFilterPrice } from '../redux/filter/filter.actions';
import PlusMinusFilter from './PlusMinusFilter';
import Slider from '@material-ui/core/Slider';
import { selectFiltersResetKey } from '../redux/filters-reset/filters-reset.selectors';


const PriceFilter = ({filterPrice, setFilterPrice, products, filtersResetKey}) => {
    const [plusMinus, setPlusMinus] = useState(true)
    //for MAX and MIN values of the slider
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 0
    })
    //for dynamic values change
    const [value, setValue] = React.useState([0, 100000]);



    useEffect(() => {
        let allPrice = [];
        products.forEach((item) => {
            allPrice.push(item.price)
        });
        let minValue = Math.min(...allPrice)
        let maxValue = Math.max(...allPrice)
        setPriceRange({min: minValue, max: maxValue})
        setValue([minValue, maxValue])
        console.log('EFECT', products)
        // setFilterPrice(price => price >= value[0] && price <= value[1])
    }, [])




    const triggerFiltering = () => {
        
        setFilterPrice(price => price >= value[0] && price <= value[1])


    }



    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <Accordion >

            <Card bsPrefix="filter-tab">
                <Accordion.Toggle bsPrefix="filter-tab__header" onClick={() => setPlusMinus(!plusMinus)}  as={Card.Header} variant="link" eventKey="0">
                    <div className="filter-tab__name">
                        Цена
                    </div> 
                    <PlusMinusFilter plusMinus={plusMinus}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body bsPrefix="filter-tab__body filter-tab__body_price" key={filtersResetKey}>
                        <div className="filter-price__inputs-wrapper">
                            <input type="text" id="min" value={value[0]}  readOnly/>
                            <input type="text" id="max" value={value[1]} readOnly />
                        </div>
                       
                      

                        <Slider
                            min={priceRange.min}
                            max={priceRange.max}
                            value={value}
                            step={100}
                            onChange={handleSliderChange}
                            onChangeCommitted={triggerFiltering}
                            valueLabelDisplay="off"
                            aria-labelledby="range-slider"

                        /> 
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}



const mapDispatchToProps = dispatch => ({
    setFilterPrice: price => dispatch(setFilterPrice(price)),
    
})


const mapStateToProps = createStructuredSelector({
    filterPrice: selectFilterPrice,
    filtersResetKey: selectFiltersResetKey
})



export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);