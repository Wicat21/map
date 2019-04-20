  showVera(){
    this.setState({ title: "Vera", description: "Dob utca 110.", latitude: 47.5052011, longitude: 19.07369 });
  }

  showBors(){
    this.setState({ title: "Bors", description: "Rottenbiller 1.", latitude: 47.500137, longitude: 19.079378})
  }

  showSzabi(){
    this.setState({title: "Szabi", description: "Deák Ferenc tér", latitude: 47.497990, longitude: 19.054788})
  }



            <MapView.Marker
            title={this.state.title}
            description={this.state.description}
            coordinate={{ latitude: this.state.latitude, 
                         longitude: this.state.longitude}}
          />


if (this.state.pressed===true) {