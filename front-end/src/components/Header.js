/**
 * Created by oh on 5/16/17.
 */
import React from 'react';
import { Button } from 'semantic-ui-react';

const Header = (props) => {
    return (
        <div className="Header">
            <span>JY Couple</span>
            <span>
                <Button onClick={() => props.showTodoInput()} icon="plus" size="small" color="brown" circular />
            </span>
        </div>
    )
};

export default Header;
