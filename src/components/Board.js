import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Cell from './Cell'

export default class Board extends Component {

    state = {
        gameMap: this.props.gameMap
    }

    calculateDimensions = (size) => {
        return { "width": "35px", "height": "35px" }
    }

    handleClick(rowIndex, columnIndex) {
        console.log(rowIndex + ":" + columnIndex);
      }

    renderCellsInRow = (row, rowIndex, dimensions) => {
        return (
            row.map((column, columnIndex) => {
                return (
                    <Cell key={"row" + rowIndex + "column" + columnIndex} isMine={column} dimensions={dimensions}
                        onClick={() => this.handleClick(rowIndex, columnIndex)} />
                )
            })
        )
    }

    render() {
        const { gameMap } = this.state;
        return (
            <Wrapper>
                {gameMap.map((row, index) => {
                    const dimensions = this.calculateDimensions(row.size);
                    return (
                        <BoardRow key={"row" + index}>
                            {this.renderCellsInRow(row, index, dimensions)}
                        </BoardRow>
                    )
                })}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BoardRow = styled.div`
    width: 60%;
    display: flex;
    flex-wrap: row nowrap;
    justify-content: center;
    align-items: center;
`;

Board.propTypes = {
    gameMap: PropTypes.array.isRequired
};