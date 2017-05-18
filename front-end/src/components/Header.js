/**
 * Created by oh on 5/16/17.
 */
import React from 'react';
import { Button } from 'semantic-ui-react';

const Header = () => {
    return (
        <div className="Header">
            <span>This is title</span>
            <span>
                <Button icon="plus" size="small" color="brown" circular />
            </span>
        </div>
    )
};

export default Header;
