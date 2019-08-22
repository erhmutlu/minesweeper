import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Constants from '../constants';

export class Cell extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visibleContent !== nextProps.visibleContent
    }

    render() {
        const { onClick, visibleContent } = this.props;
        return (
            <StyledSquare h={Constants.DIMENSIONS.height} w={Constants.DIMENSIONS.width} onClick={() => onClick()}>
                {visibleContent ? <div>-</div> : <div></div>}
            </StyledSquare>
        )
    }
}


export class MineCell extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visibleContent !== nextProps.visibleContent
    }

    render() {
        const { onClick, visibleContent } = this.props;
        return (
            <StyledSquare h={Constants.DIMENSIONS.height} w={Constants.DIMENSIONS.width} onClick={() => onClick()}>
                {visibleContent ? <div>X</div> : <div></div>}
            </StyledSquare>
        )
    }
}

Cell.propTypes = {
    visibleContent: PropTypes.bool.isRequired
};

MineCell.propTypes = {
    visibleContent: PropTypes.bool.isRequired
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