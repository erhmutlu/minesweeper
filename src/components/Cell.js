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
        return renderSquare(visibleContent, '-', onClick)
    }
}


export class MineCell extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visibleContent !== nextProps.visibleContent
    }

    render() {
        const { onClick, visibleContent } = this.props;
        return renderSquare(visibleContent, 'X', onClick)
    }
}

const renderSquare = (visibleContent, content, onClick) => {
    return (
        <StyledSquare h={Constants.DIMENSIONS.height} w={Constants.DIMENSIONS.width} onClick={() => onClick()}>
            {visibleContent ? <div>{content}</div> : <div></div>}
        </StyledSquare>
    )
}


Cell.propTypes = {
    visibleContent: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

MineCell.propTypes = {
    visibleContent: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
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