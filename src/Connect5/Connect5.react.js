import Button from 'react-bootstrap/Button';
import Grid from './Grid.react'
import { pieceChar, testWin, connected } from './Connect5Helper.react'
import { useState } from 'react';
import './Connect5.css';

const boardRows = 10;
const boardCols = 10;

function Map(props) {
    const rowArr = Array.from({ length: boardRows }, (_, i) => i);
    const colArr = Array.from({ length: boardCols }, (_, i) => i);
    return (
        <div>
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
        </div>
    )
}



function Connect5() {
    const [pieces, setPieces] = useState(Array.from({ length: boardRows }, _ => Array.from({ length: boardCols }, _ => 0)));
    const [colors, setColors] = useState(Array.from({ length: boardRows }, _ => Array.from({ length: boardCols }, _ => 0)));
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
                    console.log(colorChangeList);
                    colorChangeList.forEach((pair, _) => {
                        console.log(pair);
                        newColors[pair[0]][pair[1]] = 1;
                    })
                    console.log(newColors);
                    setColors(newColors);
                }   
            }
        };
    }

    function rematchOnClick(){
        setPieces(pieces => {
            const newpieces = pieces.slice();
            for(var i = 0; i < boardRows; i++){
                for(var j = 0; j < boardCols; j++){
                    newpieces[i][j] = 0;
                }
            }
            return newpieces;
        });
        setColors(colors => {
            const newcolors = colors.slice();
            for(var i = 0; i < boardRows; i++){
                for(var j = 0; j < boardCols; j++){
                    newcolors[i][j] = 0;
                }
            }
            return newcolors;
        });
        setPlayer(1);
        setWinner(0);
    }

    const gridOnClicks = Array.from({ length: boardRows }, (_, r) => Array.from({ length: boardCols }, (_, c) => gridOnClick(r, c)));

    return (
        <div className="container">
            <div className='gameContainer'>
                <Map pieces={pieces} colors={colors} onClicks={gridOnClicks}/>
                <div className='buttonGroup'>
                    <Button variant='primary' onClick={rematchOnClick}> Rematch </Button>
                </div>
                <div>Current Player: {pieceChar(player)}</div>
                {winner !== 0 && (<div>Winner is: {pieceChar(winner)}</div>)}
            </div>
        </div>
    );
}

export default Connect5;
