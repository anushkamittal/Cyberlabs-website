import React, {Component} from "react";
import {management} from "../views/managementFields";


class Management extends Component {
  renderFields(item){
    return item.map(({name, img, position, place})=>{
            return  (<div className="grid-responsive">
                <img
                  src={`assets/img/${img}`}
                  alt="img"
                  height="230"
                  style={{
                  borderRadius: "50%"
                }}/>
                <center>
                  <h4 className="person-name">{name}</h4>
                  <h6 className="person-position">{position}<br/>{place}</h6>
                </center>
              </div>)
    })
  }
  render() {
    return (
      <div id="Management">
        <div className="content" id="ajax-content">
          <div className="text-intro" id="site-type">
            <center>
              <h1>Management</h1>
            </center>
          </div>
        </div>
        <div className="container">
            <div className="portfolio-grid">
              {this.renderFields(management)}
            </div>
          </div>
        </div>
      
    )
  }
}

export default Management;
