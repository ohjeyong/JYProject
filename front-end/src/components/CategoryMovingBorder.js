/**
 * Created by oh on 5/19/17.
 */
import React from 'react';

const CategoryMovingBorder = (props) => {
    const style = {};
    if(props.filter.category === 'ALL'){
        style.borderColor = '#88B04B';
        style.left = '0';
    }else if(props.filter.category === 'FOOD'){
        style.borderColor = 'orange';
        style.left = '25%';
    }else if(props.filter.category === 'PLACE'){
        style.borderColor = 'teal';
        style.left = '50%';
    }else if(props.filter.category === 'TODO'){
        style.borderColor = 'blue';
        style.left = '75%';
    }
    return (
        <div style={style} className="CategoryMovingBorder"></div>
    )
};

export default CategoryMovingBorder;