/**
 * Created by oh on 5/19/17.
 */
import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

const Filter = (props) => {
    const options =[
        {key: 1, text: '모두 보기', value: '0'},
        {key: 2, text: '미완료만 보기', value: '1'},
        {key: 3, text: '완료만 보기', value: '2'},
    ];
    return (
        <div className="FilterWrapper">
            <div className="FilterUpper">
                <span className="CategoryFilter">전체 14/20</span>
                <span className="CategoryFilter">먹을 것 12/14</span>
                <span className="CategoryFilter">갈 곳 4/7</span>
                <span className="CategoryFilter">할 것 2/4</span>
            </div>
            <div className="FilterLower">
                <Dropdown options={options} defaultValue='0' />
                <Input className="FilterInput" icon="search" transparent placeholder="Search ..." />
            </div>
        </div>
    )
};


export default Filter;
