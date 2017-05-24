/**
 * Created by oh on 5/19/17.
 */
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterCompleteState } from '../actions';

const CompleteStateDropdownContainer = (props) => {
    const options =[
        {key: 1, text: '모두 보기', value: '0'},
        {key: 2, text: '미완료만 보기', value: '1'},
        {key: 3, text: '완료만 보기', value: '2'},
    ];
    return (
        <Dropdown onChange={(e, data) => props.filterCompleteState(data.value) } options={options} defaultValue='0' />
    );
};

export default connect(null, { filterCompleteState })(CompleteStateDropdownContainer);
