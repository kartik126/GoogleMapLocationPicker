import React, { Component } from "react";
import Map from "./Map";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      this.setState({
        latitude: lat,
        longitude: long,
      });
    });
  }

  render() {
    return (
      <div style={{ margin: "100px" }}>
        {/* <p>{this.state.latitude}</p> */}
        {this.state.latitude == "" && this.state.longitude == "" ? (
          <></>
        ) : (
          <Map
            google={this.props.google}
            center={{
              lat: parseFloat(this.state.latitude),
              lng: parseFloat(this.state.longitude),
            }}
            height="400px"
            zoom={15}
          />
        )}
      </div>
    );
  }
}

export default Home;
