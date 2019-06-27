import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

export default class Cell extends PureComponent {

    state = {
        isMine: this.props.isMine
    }

    render() {
        const { isMine } = this.state;
        return (
            <div>
                {isMine ? <div>Mayın</div> : <div>Boş</div>}
            </div>
        )
    }
}

Cell.propTypes = {
    isMine: PropTypes.bool.isRequired
};