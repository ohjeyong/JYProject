/**
 * Created by oh on 5/19/17.
 */
import React, { Component } from 'react';
import { Input, Dropdown } from 'semantic-ui-react';
import FilterCategoryContainer from '../containers/FilterCategoryContainer';
import CategoryMovingBorderContainer from '../containers/CategoryMovingBorderContainer';

class Filter extends Component {
    render() {
        const options =[
            {key: 1, text: '모두 보기', value: '0'},
            {key: 2, text: '미완료만 보기', value: '1'},
            {key: 3, text: '완료만 보기', value: '2'},
        ];
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
                    <Dropdown options={options} defaultValue='0' />
                    <Input className="FilterInput" icon="search" transparent placeholder="Search ..." />
                </div>
            </div>
        )
    };
}


export default Filter;
