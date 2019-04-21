import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      data:[{title: "Vera", description: "Dob utca 110.", latitude: 47.5052011, longitude: 19.07369},
            {title: "Bors", description: "Rottenbiller 1.", latitude: 47.500137, longitude: 19.079378},
            {title: "Szabi", description: "Deák Ferenc tér", latitude: 47.497990, longitude: 19.054788}]}
  }

  showVera(){
    this.setState({data:[{ title: "Vera", description: "Dob utca 110.", latitude: 47.5052011, longitude: 19.07369}]});
  }

  showBors(){
    this.setState({data:[{ title: "Bors", description: "Rottenbiller 1.", latitude: 47.500137, longitude: 19.079378}]});
  }

  showSzabi(){
    this.setState({data:[{title: "Szabi", description: "Deák Ferenc tér", latitude: 47.497990, longitude: 19.054788}]});
  }

  showAll(){
    this.setState({data:[{title: "Vera", description: "Dob utca 110.", latitude: 47.5052011, longitude: 19.07369},
                {title: "Bors", description: "Rottenbiller 1.", latitude: 47.500137, longitude: 19.079378},
                {title: "Szabi", description: "Deák Ferenc tér", latitude: 47.497990, longitude: 19.054788}
      ]})
  }

  showMarker(){
    return (
    this.state.data.map((item, i) => {
      return (
        <MapView.Marker
          title={item.title}
          description={item.description}
          coordinate={{ latitude: item.latitude, 
                        longitude: item.longitude}}
        />)})
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.valaszto}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.showVera()}>
            <Text style={styles.buttonText}>
              Vera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.showBors()}>
            <Text style={styles.buttonText}>
              Bors
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.showSzabi()}>
            <Text style={styles.buttonText}>
              Szabi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.showAll()}>
            <Text style={styles.buttonText}>
              Mindenki
            </Text>
          </TouchableOpacity>
        </View>

        <MapView 
          style={styles.map}
          region={{
            latitude: 47.5052011,
            longitude: 19.07369,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          showsUserLocation 
          >
          {this.showMarker()}
        </MapView>
      </View>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  valaszto: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 50,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    position: 'relative',
    backgroundColor: '#003ba8',
    width: 80,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff'
  },
  map: {
    position: 'absolute',
    top: 50,
    left: 0,
    bottom: 0,
    right: 0
  }
};
