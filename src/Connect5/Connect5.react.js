import Button from 'react-bootstrap/Button';
import Grid from './Grid.react';
import { Row, Col } from "react-bootstrap";
import { pieceChar, testWin, connected } from './Connect5Helper.react';
import { rematchOnClick, exitOnClick } from './Connect5Button.react';
import { handleCreateOnlineGame, handleJoinOnlineGame } from './Connect5OnlineGame.react';
import { useState } from 'react';
import './Connect5.css';

export const boardRows = 10;
export const boardCols = 10;

function Map(props) {
    const rowArr = Array.from({ length: boardRows }, (_, i) => i);
    const colArr = Array.from({ length: boardCols }, (_, i) => i);
    return (
            <div>
                {rowArr.map(i => {
                    return ( <div key={i}>
                        {colArr.map(j => {
                            return  <Grid key={j}
                                        id={"grid" + toString(i*boardCols+j)}
                                        gridPiece={props.pieces[i][j]}
                                        gridColor={props.colors[i][j]}
                                        onClick={props.onClicks[i][j]}
                                    />;
                        })}
                    </div> );
                })}
            </div>   
    )
}



function Connect5() {
    const [pieces, setPieces] = useState(Array.from({ length: boardRows }, _ => Array.from({ length: boardCols }, _ => 0)));
    const [colors, setColors] = useState(Array.from({ length: boardRows }, _ => Array.from({ length: boardCols }, _ => 0)));
    const [gameState, setGameState] = useState(0);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(0);

    function gridOnClick(r, c){
        return () => {
            if(pieces[r][c] === 0 && winner === 0){
                const newpieces = pieces.slice();
                newpieces[r][c] = player;
                setPieces(newpieces);

                const newPlayer = player;
                setPlayer(player => 3 - player);

                const [t, lower, higher, win] = testWin(newpieces, r, c);
                if(win){
                    setWinner(newPlayer);
                    const newColors = colors.slice();
                    const colorChangeList = connected(t, lower, higher, r, c);
                    colorChangeList.forEach((pair, _) => {
                        newColors[pair[0]][pair[1]] = 1;
                    })
                    setColors(newColors);
                }   
            }
        };
    }

    const gridOnClicks = Array.from({ length: boardRows }, (_, r) => Array.from({ length: boardCols }, (_, c) => gridOnClick(r, c)));

    return (<Row>
                <Col/>
                <Col xs={16} sm={12} md={8} lg={6}>
                    <div className='gameContainer'>
                        <Map pieces={pieces} colors={colors} onClicks={gridOnClicks}/>
                        {gameState === 0 && (<div className='buttonGroup'>
                            <Button variant='primary' onClick={() => setGameState(1)}> Hot Seat Game </Button>
                            <Button variant='primary' onClick={() => handleCreateOnlineGame(setGameState, setPlayer)}> Create Online Game </Button>
                            <Button variant='primary' onClick={() => handleJoinOnlineGame(setGameState, setPlayer)}> Join Online Game </Button>
                        </div>)}
                        {gameState === 1 && (<div className='buttonGroup'>
                            <Button variant='primary' onClick={() => rematchOnClick(setPieces, setColors, setPlayer, setWinner)}> Rematch </Button>
                            <Button variant='primary' onClick={() => exitOnClick(setPieces, setColors, setPlayer, setWinner, setGameState)}> Exit </Button>
                        </div>)}
                        <div>Current Player: {pieceChar(player)}</div>
                        {winner !== 0 && (<div>Winner is: {pieceChar(winner)}</div>)}
                    </div>
                </Col>
                <Col/>
            </Row>
        );
}

export default Connect5;
