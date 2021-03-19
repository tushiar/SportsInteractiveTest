import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../Cards/card-style.css";
import dateFormat from "dateformat";

class PlayerCard extends Component {
  constructor(props) {
    super(props);
    
  }
  convertDate(matchDate) {
    var date = new Date(matchDate);
    return date;
  }
  render() {
    console.log(this.props.player.UpComingMatchesList[0].MDate + " UTC");
    return (
      <div className="spaceRow">
        <Card className="card-spacing">
          <Card.Img
            className="card-img"
            variant="top"
            src={"/player-images/" + this.props.player.Id + ".jpg"}
          />
          <Card.Body>
            <Card.Title>{this.props.player.PFName}</Card.Title>
            <Card.Text>{this.props.player.SkillDesc}</Card.Text>
            <Card.Text>{"$ " + this.props.player.Value}</Card.Text>
            <Card.Text>
              {this.props.player.CCode +
                " Vs " +
                this.props.player.UpComingMatchesList[0].VsCCode}
            </Card.Text>
            {/* <Card.Text>{ dateFormat(new Date(this.props.player.UpComingMatchesList[0].MDate +"UTC").toString, "dd-mm-yyyy h:mm:ss a")}</Card.Text> */}
            <Card.Text>
              {dateFormat(
                new Date(
                  this.props.player.UpComingMatchesList[0].MDate + " UTC"
                ).toString(),
                "dd-mm-yyyy h:mm:ss a"
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default PlayerCard;
