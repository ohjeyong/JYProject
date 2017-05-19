/**
 * Created by oh on 5/19/17.
 */
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import FilterCategoryContainer from '../containers/FilterCategoryContainer';
import CategoryMovingBorderContainer from '../containers/CategoryMovingBorderContainer';
import CompleteStateDropdownContainer from '../containers/CompleteStateDropdownContainer';

class Filter extends Component {
    render() {
        return (
            <div className="FilterWrapper">
                <div className="FilterUpper">
                    <CategoryMovingBorderContainer />
                    <FilterCategoryContainer color="#88B04B" categoryValue="ALL" text="전체" />
                    <FilterCategoryContainer color="orange" categoryValue="FOOD" text="먹을 곳" />
                    <FilterCategoryContainer color="teal" categoryValue="PLACE" text="갈 곳" />
                    <FilterCategoryContainer color="blue" categoryValue="TODO" text="할 것" />
                </div>
                <div className="FilterLower">
                    <CompleteStateDropdownContainer />
                    <Input className="FilterInput" icon="search" transparent placeholder="Search ..." />
                </div>
            </div>
        )
    };
}


export default Filter;
