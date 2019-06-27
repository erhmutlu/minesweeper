import React, { Component } from 'react'
import Board from '../components/Board'

export default class Game extends Component {

    render() {
        return (
            <Board gameMap={gameMap} />
        )
    }
}

const gameMap = [
    [true, true, false],
    [false, true, false],
    [false, false, true]
]