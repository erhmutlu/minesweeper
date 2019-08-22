import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { MineCell, Cell } from './Cell'

export default class Board extends Component {

    state = {
        gameMap: this.prepareExtendedGameMap(this.props.gameMap)
    }

    prepareExtendedGameMap(gameMap) {
        const map = []
        gameMap.map((row, rowIndex) => {
            map[rowIndex] = []
            return (
                row.map((column, columnIndex) =>
                    map[rowIndex][columnIndex] = { isMine: column, visibleContent: false }
                )
            )
        })
        return map
    }

    handleClick(rowIndex, columnIndex) {
        const { gameMap } = this.state;
        gameMap[rowIndex][columnIndex] = { ...gameMap[rowIndex][columnIndex], visibleContent: true } //burayı güncellemek lazım. dışarıdan Cell'in contentVisible prop'ını güncellemek lazım
        this.setState({ gameMap: gameMap });
    }

    renderCellsInRow = (row, rowIndex) => {
        return (
            row.map((column, index) => {
                const { isMine, visibleContent } = column;
                return (
                    isMine ?
                        <MineCell key={index} visibleContent={visibleContent}
                            onClick={() => this.handleClick(rowIndex, index)} />
                        :
                        <Cell key={index} visibleContent={visibleContent}
                            onClick={() => this.handleClick(rowIndex, index)} />
                )
            })
        )
    }

    render() {
        const { gameMap } = this.state;
        return (
            <Wrapper>
                {gameMap.map((row, index) => {
                    return (
                        <BoardRow key={index}>
                            {this.renderCellsInRow(row, index)}
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