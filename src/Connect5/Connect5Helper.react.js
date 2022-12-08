export function pieceChar(piece){
    switch(piece){
        case 1:
            return 'O';
        case 2:
            return 'X';
        default:
            return ' ';
    }
}

export function testWin(pieces, i, j){
    const player = pieces[i][j];
    var x = i; var y = j; var connected = 1;
    var lower = 0; var higher = 9;
    // Horizontal
    while(x - 1 >= 0 && pieces[x-1][y] === player){
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
    while(y - 1 >= 0 && pieces[x][y-1] === player){
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
    while(x - 1 >= 0 && y - 1 >= 0 && pieces[x-1][y-1] === player){
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
    while(x - 1 >= 0 && y + 1 < 10 && pieces[x-1][y+1] === player){
        x--; y++;
        connected++;
    }
    lower = x;
    x = i; y = j;
    while(x + 1 < 10 && y - 1 >= 0 && pieces[x+1][y-1] === player){
        x++; y--;
        connected++;
    }
    higher = x;
    if(connected >= 5)
        return [4, lower, higher, true];
    
    return [0, lower, higher, false];
}

export function connected(type, lower, higher, r, c){
    var results = []; var i;
    switch(type){
        case 1:
            for(i = lower; i <= higher; i++){
                results.push([i, c]);
            }
            return results;
        case 2:
            for(i = lower; i <= higher; i++){
                results.push([r, i]);
            }
            return results;
        case 3:
            for(i = lower; i <= higher; i++){
                results.push([i, r - i + c]);
            }
            return results;
        case 4:
            for(i = lower; i <= higher; i++){
                results.push([i, i - r + c]);
            }
            return results;
        default:
            return results;
    }
}