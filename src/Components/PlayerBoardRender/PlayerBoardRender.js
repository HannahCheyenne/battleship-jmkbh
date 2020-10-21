import React, {Component} from 'react'
import GridLayout from 'react-grid-layout';

export default class GridDrop extends Component {

    renderGrid = () => {
        let gridArr = []
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                gridArr.push(<button className="aDiv" key={`${j},${i}`} data-grid={{x: j, y: i, w: 1, h: 1, static: true}}/>)
            }
        }
        return gridArr;
    }

  render() {
    return (
        <>
        <GridLayout className="layout" cols={10} rowHeight={20} width={300}>
            {this.renderGrid().map(coord => coord)}
            <div className="aDiv ship" key='4Ship' data-grid={{x: 1, y: 11, w: 4, h: 1, static: true, isDraggable: true, isDroppable: true}}/>
            <div className="aDiv ship" key='3Ship' data-grid={{x: 1, y: 11, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true}}/>
        </GridLayout>
        </>
    )
  }
}