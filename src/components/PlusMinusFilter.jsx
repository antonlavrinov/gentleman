import React from 'react'

const PlusMinusFilter = ({plusMinus}) => {
    return (
        <div className="filter-tab__plus">
            {plusMinus ? '+' : '-'}
        </div>
    )
}

export default PlusMinusFilter
