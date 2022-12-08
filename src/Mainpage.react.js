import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './Mainpage.css';

function pieceChar(piece){
    switch(piece){
        case 0:
            return ' ';
        case 1:
            return 'O';
        case 2:
            return 'X';
        default:
            return ' ';
    }
}

function testWin(pieces, i, j){
    console.log(pieces, i, j);
    const player = pieces[i][j];
    var x = i; var y = j; var connected = 1;
    var lower = 0; var higher = 9;
    // Horizontal
    while(x - 1 > 0 && pieces[x-1][y] === player){
        x--;
        connected++;
    }
    lower = x;
    x = i;
    while(x + 1 < 10 && pieces[x+1][y] === player){
        x++;
        connected++;
    }
    higher = x;
    if(connected >= 5)
        return [1, lower, higher, true];

    // Vertical
    x = i; y = j; connected = 1;
    while(y - 1 > 0 && pieces[x][y-1] === player){
        y--;
        connected++;
    }
    lower = y;
    y = j;
    while(y + 1 < 10 && pieces[x][y+1] === player){
        y++;
        connected++;
    }
    higher = y;
    if(connected >= 5)
        return [2, lower, higher, true];
    
    // Left diagonal
    x = i; y = j; connected = 1;
    while(x - 1 > 0 && y - 1 > 0 && pieces[x-1][y-1] === player){
        x--; y--;
        connected++;
    }
    lower = x;
    x = i; y = j;
    while(x + 1 < 10 && y + 1 < 10 && pieces[x+1][y+1] === player){
        x++; y++;
        connected++;
    }
    higher = x;
    if(connected >= 5)
        return [3, lower, higher, true];
    
    // Right diagonal
    x = i; y = j; connected = 1;
    while(x - 1 > 0 && y + 1 < 10 && pieces[x-1][y+1] === player){
        x--; y++;
        connected++;
    }
    lower = x;
    x = i; y = j;
    while(x + 1 < 10 && y - 1 > 0 && pieces[x+1][y-1] === player){
        x++; y--;
        connected++;
    }
    higher = x;
    if(connected >= 5)
        return [4, lower, higher, true];
    
    return [0, lower, higher, false];
}

function Grid(props) {
    return (
        <button className = "square" onClick={() => {
            if(props.gridPiece === 0 && props.winner === 0){
                const newpieces = props.pieces.slice();
                const player = props.player;
                newpieces[props.gridRow][props.gridCol] = props.player;
                props.setPieces(newpieces);
                props.setPlayer(player => 3 - player);
                const [t, lower, higher, win] = testWin(newpieces, props.gridRow, props.gridCol);
                if(win){
                    props.setWinner(player);
                }
            }
        }}>
            {pieceChar(props.gridPiece)}
        </button>
    )
}

function Map(props) {
    return (
        <div>
            <div>
                {[0,1,2,3,4,5,6,7,8,9].map(i => {
                    return ( <div key={i}>
                        {[0,1,2,3,4,5,6,7,8,9].map(j => {
                            return  <Grid key={j}
                                        id={"grid" + toString(i*10+j)} 
                                        gridRow={i} 
                                        gridCol={j} 
                                        gridPiece={props.pieces[i][j]}
                                        pieces={props.pieces} 
                                        setPieces={props.setPieces}
                                        player={props.player} 
                                        setPlayer={props.setPlayer}
                                        winner={props.winner}
                                        setWinner={props.setWinner}
                                    />;
                        })}
                    </div> );
                })}
            </div>
        </div>
    )
}

const initialState = 
[[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]];

function Mainpage() {
  const [pieces, setPieces] = useState(initialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  return (
    <div className="container">
        <div className='gameContainer'>
            <Map pieces={pieces} setPieces={setPieces} player={player} setPlayer={setPlayer} winner={winner} setWinner={setWinner}/>
            <div className='buttonGroup'>
                <Button variant='primary' onClick={() => {
                    setPieces(pieces => {
                        const newpieces = pieces.slice();
                        for(var i = 0; i < 10; i++){
                            for(var j = 0; j < 10; j++){
                                newpieces[i][j] = 0;
                            }
                        }
                        return newpieces;
                    });
                    setPlayer(1);
                    setWinner(0);
                }}> Rematch </Button>
            </div>
            <div>Current Player: {pieceChar(player)}</div>
            {winner !== 0 && (<div>Winner is: {pieceChar(winner)}</div>)}
        </div>
    </div>
    
  );
}

export default Mainpage;
