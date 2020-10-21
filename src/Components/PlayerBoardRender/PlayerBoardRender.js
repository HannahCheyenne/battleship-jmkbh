import React, {Component} from 'react'
import GridLayout from 'react-grid-layout';
import './playerboardrender.css'
import battleship from '../../Images/battleship.png'
import carrier from '../../Images/carrier.png'
import patrolboat from '../../Images/patrolboat.png'
import destroyer from '../../Images/destroyer.png'
import submarine from '../../Images/submarine.png'

export default class PlayerBoardRender extends Component {
    static defaultProps = {
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
            <div className="battleship" key='1Ship' data-grid={{x: 1, y: 9, w: 1, h: 5, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageBattleship" src={battleship} alt="battleship"/>
                </div>
            <div className="carrier" key='2Ship' data-grid={{x: 2, y: 9, w: 1, h: 4, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageCarrier" src={carrier} alt="carrier"/>
                </div>
            <div className="submarine" key='3Ship' data-grid={{x: 3, y: 9, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageSubmarine" src={submarine} alt="submarine"/>
                </div>
            <div className="destroyer" key='4Ship' data-grid={{x: 4, y: 9, w: 1, h: 3, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imageDestroyer" src={destroyer} alt="destroyer"/>
                </div>
            <div className="patrolboat" key='5Ship' data-grid={{x: 5, y: 9, w: 1, h: 2, static: true, isDraggable: true, isDroppable: true, preventCollision:true}}>
                <img className="imagePatrolboat" src={patrolboat} alt="patrolboat"/>
                </div>
            </GridLayout>
        </div>
        <div className="boardContainer">
        
        </div>
        </>
    )
  }
}