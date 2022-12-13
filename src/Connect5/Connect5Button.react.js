import { boardRows, boardCols } from './Connect5.react'

export function rematchOnClick(setPieces, setColors, setPlayer, setWinner){
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

export function exitOnClick(setPieces, setColors, setPlayer, setWinner, setGameState){
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
    setGameState(0);
    setPlayer(1);
    setWinner(0);
}