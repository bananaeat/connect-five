import { pieceChar } from './Connect5Helper.react'

function Grid(props) {
    const gridStyle = {
        backgroundColor: (props.gridColor === 0 ? '#FFFFFF' : '#DFDFDF'),
    }
    return (
        <button className = "square" style={gridStyle} onClick={() => {props.onClick()}}>
            {pieceChar(props.gridPiece)}
        </button>
    )
}

export default Grid;