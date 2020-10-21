import React, {Component} from 'react'
import GridLayout from 'react-grid-layout';

export default class PlayerBoardRender extends Component {

    renderGrid = () => {
        let gridArr = []
        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                gridArr.push(<button className="aDiv" key={`${j},${i}`} data-grid={{x: j, y: i, w: 1, h: 1, static: true}}/>)
            }
        }
        return gridArr;
    }

  render() {
    return (
        <>
        <GridLayout className="layout" 
        cols={8} 
        rowHeight={50} 
        width={450}
        margin={[2,2]}>
            {this.renderGrid().map(coord => coord)}
            <div className="battleship" key='5Ship' data-grid={{x: 1, y: 9, w: 5, h: 1, static: true, isDraggable: true, isDroppable: true}}/>
            <div className="aDiv ship" key='3Ship' data-grid={{x: 1, y: 9, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true}}/>
        </GridLayout>
        </>
    )
  }
}