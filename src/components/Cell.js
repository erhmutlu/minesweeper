import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Cell extends PureComponent {

    state = {
        isMine: this.props.isMine
    }

    render() {
        const { isMine } = this.state;
        const { dimensions } = this.props;
        return (
            <StyledSquare h={dimensions.height} w={dimensions.width}>
                {isMine ? <div>X</div> : <div>O</div>}
            </StyledSquare>
        )
    }
}

Cell.propTypes = {
    isMine: PropTypes.bool.isRequired
};

const StyledSquare = styled.div`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 12px;
    font-weight: bold;
    line-height: 34px;
    height: ${props => props.h};
    width: ${props => props.w};
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
`;