import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { selectFilterSizes } from '../redux/filter/filter.selectors';
import { createStructuredSelector } from 'reselect';
import { setFilterSize } from '../redux/filter/filter.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PlusMinusFilter from './PlusMinusFilter';


const SizeFilter = ({ filterSize, setFilterSize, products }) => {
    const [plusMinus, setPlusMinus] = useState(true)
    const allSizes = [];

    products.forEach((item) => {
        if (item.sizes) {
            item.sizes.forEach((size) => {

                allSizes.push(size)
            })
        }

    });

    let sizesCount = {};
    allSizes.forEach(function (i) { sizesCount[i] = (sizesCount[i] || 0) + 1; });
    const sizesArray = Object.entries(sizesCount);



    const triggerFiltering = (size) => {

        const sizeToRemove = filterSize.find((filtSize) => filtSize === size)

        if (sizeToRemove) {

            //delete the tag
            const idx = filterSize.findIndex((el) => el === size);
            const before = filterSize.splice(0, idx)
            const after = filterSize.splice(idx + 1)
            const newArray = [...before, ...after]
            setFilterSize(newArray)

        } else {
            //add new tag
            const arrayOfSizes = [...filterSize, size]
            setFilterSize(arrayOfSizes)
        }

    }

    return (
        <Accordion >
            <Card bsPrefix="filter-tab">
                <Accordion.Toggle
                    onClick={() => setPlusMinus(!plusMinus)}
                    bsPrefix="filter-tab__header"
                    as={Card.Header}
                    variant="link"
                    eventKey="0">
                    <div className="filter-tab__name">
                        Размер
                    </div>
                    <PlusMinusFilter plusMinus={plusMinus} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body bsPrefix="filter-tab__body">
                        {sizesArray.map((item, idx) => {
                            return (
                                <SizeFilterItem
                                    item={item}
                                    key={idx}
                                    triggerFiltering={triggerFiltering} />
                            )
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

const SizeFilterItem = ({ item, triggerFiltering }) => {
    const [check, toggleCheck] = useState(false)
    return (
        <div
            className="filter-tab__params"
            onClick={() => { toggleCheck(!check); triggerFiltering(item[0]) }}>

            <div className="filter-tab__left-param">
                <div
                    className="checkbox__box"
                    onClick={() => toggleCheck(!check)}>
                    {check ? <div className="checkbox__inside-box"><FontAwesomeIcon className="checkbox__icon" icon={faCheck} /></div> : null}
                </div>
                <div className="filter-tab__param-name">
                    {item[0]}
                </div>
            </div>
            <div className="filter-tab__right-param">
                <div className="filter-tab__param-count">
                    {item[1]}
                </div>
            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setFilterSize: size => dispatch(setFilterSize(size))
})


const mapStateToProps = createStructuredSelector({
    filterSize: selectFilterSizes
})

export default connect(mapStateToProps, mapDispatchToProps)(SizeFilter);