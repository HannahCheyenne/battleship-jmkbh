import React, { Component } from "react";
import Header from "../Header/Header";
import DemoAccount from '../Buttons/DemoAccount/DemoAccount'
// import spaceBackground from '../../Images/spaceBackground.jpg'
import "./landingpage.css";
import QuickGameButton from "../Buttons/QuickGameButton/QuickGameButton";

class LandingPage extends Component {
  render() {
    return (
      <div className="landingPage">
        <Header />
        {/* <div className="starmap"><img src={spaceBackground} alt="Logo" /></div> */}
        <h2>Home Content</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <DemoAccount history={this.props.history}/>
        <QuickGameButton history={this.props.history}/>
      </div>
    );
  }
}

export default LandingPage;