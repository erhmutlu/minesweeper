import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Cell extends Component {

    state = {
        visibleContent: false,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visibleContent !== nextProps.visibleContent
    }

    handleClickEvent = (onClick) => {
        // this.setState({contentVisible: true})
        console.log("clicked")
        onClick()
    }

    render() {
        const { dimensions, onClick, isMine, visibleContent } = this.props;
        return (
            <StyledSquare h={dimensions.height} w={dimensions.width} onClick={() => this.handleClickEvent(onClick)}>
                {visibleContent  ? 
                    (isMine) ?
                    <div>X</div>
                    :
                    <div>-</div>
                : <div></div>}
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