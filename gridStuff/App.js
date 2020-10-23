import React, {Component} from 'react';
import './App.css';
//import Drag from './Drag'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import GridDrop from './gridDrop'
//import ButtonShip from './buttonShip'


export default class App extends Component {
  render(){
    return (
      <div className="all">
        {/* <Drag/> */}
        <GridDrop/>
        {/*<ButtonShip/> */}
      </div>
    );
  }
}