import React, {Component} from 'react'
import GridLayout from 'react-grid-layout';
import './playerboardrender.css'

export default class PlayerBoardRender extends Component {
    static defaultProps = {
        // preventCollision: true,
        className:"layout",
        cols:8, 
        rowHeight:50, 
        width:450,
        margin:[2,2],
    }
    renderGrid = () => {
        let gridArr = []
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                gridArr.push(<button className="gridCell" key={`${j},${i}`} data-grid={{x: j, y: i, w: 1, h: 1, static: true}}/>)
            }
        }
        return gridArr;
    }

  render() {
    return (
        <>
        <div className="boardContainer">
        <GridLayout  
        
        {...this.props}>
            {this.renderGrid().map(coord => coord)}
            <div className="battleship" key='5Ship' data-grid={{x: 1, y: 9, w: 5, h: 1, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}/>
            <div className="battleship" key='3Ship' data-grid={{x: 1, y: 9, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}/>
        </GridLayout>
        </div>
        <div className="boardContainer">
        
        </div>
        </>
    )
  }
}