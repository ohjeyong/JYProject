/**
 * Created by oh on 5/24/17.
 */
import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterSearchInput } from '../actions';

const FilterSearchInput = (props) => {
    return (
        <Input
            className="FilterInput"
            icon="search"
            placeholder="Search ..."
            transparent
            onChange={(e, data) => props.filterSearchInput(data.value)}
        />
    )
};

export default connect(null, { filterSearchInput })(FilterSearchInput);
