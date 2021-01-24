import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { selectFilterColors } from '../redux/filter/filter.selectors';
import { createStructuredSelector } from 'reselect';
import { setFilterColor } from '../redux/filter/filter.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PlusMinusFilter from './PlusMinusFilter';

const ColorFilter = ({ colorFilter, filterColor, setFilterColor, products }) => {

    const [plusMinus, setPlusMinus] = useState(true)
    const allColors = [];

    products.map((item) => {
        if (item.color) {
            item.color.forEach(itemColor => {
                allColors.push(itemColor)
            })
        }
    });

    let colorsCount = {};

    allColors.forEach(function (i) { colorsCount[i] = (colorsCount[i] || 0) + 1; });

    const colorsArray = Object.entries(colorsCount);

    const chooseColorHEXByName = (color) => {

        switch (color) {
            case 'голубой':
                return '#90c5e1'
            case 'синий':
                return '#3d5995';
            case 'серый':
                return '#c9d0d6';
            case 'черный':
                return '#27292f';
            case 'белый':
                return '#edeff4';
            case 'коричневый':
                return '#8b4513';
            case 'хаки':
                return '#8EA45B';
            case 'оранжевый':
                return '#ff8c00';
            case 'бежевый':
                return '#F5F5DC';
            default:
                return '';
        }
    }

    const triggerFiltering = (color) => {

        const colorToRemove = filterColor.find((filtColor) => filtColor === color)

        if (colorToRemove) {
            //delete the tag
            const idx = filterColor.findIndex((el) => el === color);
            const before = filterColor.splice(0, idx)
            const after = filterColor.splice(idx + 1)
            const newArray = [...before, ...after]
            setFilterColor(newArray)

        } else {
            //add new tag
            const arrayOfColors = [...filterColor, color]
            setFilterColor(arrayOfColors)

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
                    eventKey="0"
                >
                    <div className="filter-tab__name">
                        Цвет
                    </div>
                    <PlusMinusFilter plusMinus={plusMinus} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body bsPrefix="filter-tab__body">
                        {colorsArray.map((item, idx) => {
                            return (
                                <ColorFilterItem
                                    chooseColorHEXByName={chooseColorHEXByName}
                                    item={item}
                                    key={idx}
                                    triggerFiltering={triggerFiltering}
                                />
                            )
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

const ColorFilterItem = ({ item, chooseColorHEXByName, triggerFiltering }) => {
    const [check, toggleCheck] = useState(false)
    return (
        <div className="filter-tab__params" onClick={() => { toggleCheck(!check); triggerFiltering(item[0]) }}>

            <div className="filter-tab__left-param">
                <div className="checkbox__box" onClick={() => toggleCheck(!check)}>
                    {check ? <div className="checkbox__inside-box"><FontAwesomeIcon className="checkbox__icon" icon={faCheck} /></div> : null}
                </div>
                {/* <input className="filter-tab__param-checkbox" type="checkbox" checked={check} onChange={() => toggleCheck(!check)}/> */}
                <div className="filter-tab__param-name">
                    {item[0]}
                </div>
            </div>
            <div className="filter-tab__right-param">
                <div className="filter-tab__param-color" style={{
                    background: `${chooseColorHEXByName(item[0])}`,
                }}></div>
                <div className="filter-tab__param-count">
                    {item[1]}
                </div>
            </div>




        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setFilterColor: color => dispatch(setFilterColor(color))
})


const mapStateToProps = createStructuredSelector({
    filterColor: selectFilterColors
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorFilter);