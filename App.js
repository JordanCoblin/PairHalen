import React, { Component } from 'react';
import { Animated, StyleSheet, Text, Button, TextInput, View, Image, PanResponder, Dimensions } from 'react-native';

class TeamMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropZoneValues : null,
      pan: new Animated.ValueXY(),
      color: 'orange'
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder : () => true,
      onPanResponderMove : Animated.event([null, {
        dx : this.state.pan.x,
        dy : this.state.pan.y
      }]),
      onPanResponderRelease : (e, gesture) => {
        if(this.isDropZone(gesture)){
            this.setState({color: 'red'
          });
        }

        Animated.spring(
          this.state.pan,
          {toValue:{x:0, y:0}}
        ).start();
      }
    });
  }

  render() {
    return (
      <Animated.View {...this.panResponder.panHandlers} style={this.state.pan.getLayout()}>
        <View style={[styles.teamMember, {backgroundColor: this.state.color}]} >
          <Text style={styles.teamMemberFont}> {this.props.name} </Text>
        </View>
      </Animated.View>
    );
  }
}

export default class ProjectDisco extends Component {
  isDropZone(gesture){
      var dz = this.state.dropZoneValues;
      return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues : event.nativeEvent.layout
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.3, justifyContent:'center', alignItems: 'center', backgroundColor: 'orange'}}>
          <Text style={styles.halenText}> Hey Halen! </Text>
          <Text style={styles.halenText}> Who's pairing? </Text>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}} >
          <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'space-around'}} >
            <TeamMember name="An" />
            <TeamMember name="Francisco" />
            <TeamMember name="Kayle" />
          </View>
          <View 
          onLayout={this.setDropZoneValues.bind(this)}
          style={{flex: 1, backgroundColor: 'skyblue', alignItems:'center', justifyContent:'center'}} >
            <Text style = {styles.teamMemberFont}> Drag over here </Text>
          </View>
        </View>
      </View>
    );
  }
}

let RADIUS = 35

const styles = StyleSheet.create({
  halenText: {
    fontFamily: 'ChalkboardSE-Bold',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },

  teamMember: {
    width: RADIUS*3,
    height: RADIUS*2,
    borderRadius: RADIUS,
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'absolute'
  },

  teamMemberFont: {
    fontFamily: 'Helvetica',
    fontSize: 19, 
    color: 'white'
  }
})
