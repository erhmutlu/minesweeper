import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Cell from './Cell'

export default class Board extends Component {

    state = {
        gameMap: this.props.gameMap
    }

    renderCells = (row) => {
        return (
            row.map((column, _) => {
                return (
                    <Cell isMine={column} />
                )
            })
        )
    }

    render() {
        const { gameMap } = this.state;
        return (
            <Wrapper>
                {gameMap.map((row, _) => {
                    return (
                        <BoardRow>
                            {this.renderCells(row)}
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