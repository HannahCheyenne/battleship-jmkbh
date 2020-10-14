import React, { Component } from "react";
import "./dashboard.css";
import Header from "../Header/Header";
import BattleshipAPI from "../../services/battleship-api-service";
import CreatePrivateGame from "../Buttons/CreatePrivateGame";
import CreateAiGame from "../Buttons/CreateAiGame";
import JoinRandomGame from "../Buttons/JoinRandomGame";
import StatsButton from "../Buttons/StatsButton";

class Dashboard extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    BattleshipAPI.getStats()
    .then((data) => {
      this.setState({
        user: data,
      });
    });
  }

  render() {
    return (
      <>
        <Header />
        <CreatePrivateGame />
        <CreateAiGame />
        <JoinRandomGame />
        <StatsButton />
      </>
    );
  }
}

export default Dashboard;
