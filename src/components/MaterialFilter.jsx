import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { selectFilterMaterial } from '../redux/filter/filter.selectors';
import { createStructuredSelector } from 'reselect';
import { setFilterMaterial } from '../redux/filter/filter.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PlusMinusFilter from './PlusMinusFilter';



const MaterialFilter = ({ filterMaterial, setFilterMaterial, products }) => {

    const [plusMinus, setPlusMinus] = useState(true)
    const allMaterial = [];

    products.forEach((item) => {
        item.material.forEach((material) => {
            allMaterial.push(material)
        })
    });
    let materialCount = {};
    allMaterial.forEach(function (i) { materialCount[i] = (materialCount[i] || 0) + 1; });
    const materialArray = Object.entries(materialCount);



    const triggerFiltering = (material) => {

        const materialToRemove = filterMaterial.find((filtMaterial) => filtMaterial === material)

        if (materialToRemove) {

            //delete the tag
            const idx = filterMaterial.findIndex((el) => el === material);
            const before = filterMaterial.splice(0, idx)
            const after = filterMaterial.splice(idx + 1)
            const newArray = [...before, ...after]
            setFilterMaterial(newArray)

        } else {
            //add new tag
            const arrayOfMaterial = [...filterMaterial, material]
            setFilterMaterial(arrayOfMaterial)

        }

    }

    return (
        <Accordion >
            <Card bsPrefix="filter-tab">
                <Accordion.Toggle
                    bsPrefix="filter-tab__header"
                    onClick={() => setPlusMinus(!plusMinus)}
                    as={Card.Header}
                    variant="link"
                    eventKey="0">
                    <div className="filter-tab__name">
                        Состав
                    </div>
                    <PlusMinusFilter plusMinus={plusMinus} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body bsPrefix="filter-tab__body">
                        {materialArray.map((item, idx) => {
                            return (
                                <MaterialFilterItem item={item} key={idx} triggerFiltering={triggerFiltering} />
                            )
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

const MaterialFilterItem = ({ item, triggerFiltering }) => {
    const [check, toggleCheck] = useState(false)
    return (
        <div className="filter-tab__params" onClick={() => { toggleCheck(!check); triggerFiltering(item[0]) }}>
            <div className="filter-tab__left-param">
                <div className="checkbox__box" onClick={() => toggleCheck(!check)}>
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
    setFilterMaterial: material => dispatch(setFilterMaterial(material))
})


const mapStateToProps = createStructuredSelector({
    filterMaterial: selectFilterMaterial
})

export default connect(mapStateToProps, mapDispatchToProps)(MaterialFilter);