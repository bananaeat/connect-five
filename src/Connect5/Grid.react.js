import { pieceChar } from './Connect5Helper.react'

function Grid(props) {
    const w = Math.min(parseInt(window.innerWidth / 20), parseInt(window.innerHeight / 12), 40);
    const gridStyle = {
        backgroundColor: (props.gridColor === 0 ? '#FFFFFF' : '#DFDFDF'),
        width: w + 'px',
        height: w + 'px',
        lineheight: w + 'px',
        fontSize: w/2 + 'px', 
    }
    return (
        <button className = "square" style={gridStyle} onClick={() => {console.log(toString(w));props.onClick()}}>
            {pieceChar(props.gridPiece)}
        </button>
    )
}

export default Grid;