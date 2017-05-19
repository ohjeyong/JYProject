/**
 * Created by oh on 5/19/17.
 */
import React from 'react';

const FilterCategory = (props) => {
    const style = {
        color: 'gray'
    };
    if(props.filter.category === props.categoryValue){
        style.color = props.color;
        style.fontWeight = '600';
    }
    return (
        <span
            className="CategoryFilter"
            style={style}
            onClick={() => props.filterCategory(props.categoryValue)}>
            {props.text}
        </span>
    );
};

export default FilterCategory;
