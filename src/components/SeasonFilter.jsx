import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { selectFilterSeason } from '../redux/filter/filter.selectors';
import { createStructuredSelector } from 'reselect';
import { setFilterSeason } from '../redux/filter/filter.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PlusMinusFilter from './PlusMinusFilter';


const SeasonFilter = ({ filterSeason, setFilterSeason, products }) => {
    const [plusMinus, setPlusMinus] = useState(true)

    const allSeason = [];

    products.forEach((item) => {
        allSeason.push(item.season)
    });
    let seasonCount = {};
    allSeason.forEach(function (i) { seasonCount[i] = (seasonCount[i] || 0) + 1; });
    const seasonArray = Object.entries(seasonCount);



    const triggerFiltering = (season) => {

        const seasonToRemove = filterSeason.find((filtSeason) => filtSeason === season)
        if (seasonToRemove) {
            //delete the tag
            const idx = filterSeason.findIndex((el) => el === season);
            const before = filterSeason.splice(0, idx)
            const after = filterSeason.splice(idx + 1)
            const newArray = [...before, ...after]
            setFilterSeason(newArray)

        } else {
            //add new tag
            const arrayOfSeason = [...filterSeason, season]
            setFilterSeason(arrayOfSeason)

        }

    }

    return (
        <Accordion >

            <Card bsPrefix="filter-tab">
                <Accordion.Toggle onClick={() => setPlusMinus(!plusMinus)} bsPrefix="filter-tab__header" as={Card.Header} variant="link" eventKey="0">
                    <div className="filter-tab__name">
                        Сезон
                    </div>
                    <PlusMinusFilter plusMinus={plusMinus} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body bsPrefix="filter-tab__body">
                        {seasonArray.map((item, idx) => {
                            return (
                                <SeasonFilterItem item={item} key={idx} triggerFiltering={triggerFiltering} />

                            )
                        })}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

const SeasonFilterItem = ({ item, triggerFiltering }) => {
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
    setFilterSeason: season => dispatch(setFilterSeason(season))
})


const mapStateToProps = createStructuredSelector({
    filterSeason: selectFilterSeason
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonFilter);