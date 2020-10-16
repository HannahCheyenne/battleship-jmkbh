import React, { Component } from "react";
import "./dashboard.css";
import Header from "../Header/Header";
import BattleshipAPI from "../../services/battleship-api-service";
import CreatePrivateGame from "../Buttons/CreatePrivateGame/CreatePrivateGame";
import CreateAiGame from "../Buttons/CreateAiGame/CreateAiGame";
import JoinRandomGame from "../Buttons/JoinRandomGame/JoinRandomGame";
import StatsButton from "../Buttons/StatsButton/StatsButton";

class Dashboard extends Component {
  // state = {
  //   user: {},
  // };
  // componentDidMount() {
  //   BattleshipAPI.getUser()
  //   .then((data) => {
  //     this.setState({
  //       user: data,
  //     });
  //     console.log(data)
  //   });
  // }

  render() {
    return (
      <>
        <Header />
        <div>
        <CreatePrivateGame />
        <CreateAiGame />
        <JoinRandomGame />
        <StatsButton />
        </div>
      </>
    );
  }
}

export default Dashboard;
