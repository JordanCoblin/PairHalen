import React, { Component } from 'react';
import { StyleSheet, Text, Button, TextInput, View, Image } from 'react-native';

class TeamMember extends Component {
  render() {
    return (
      <View style={styles.teamMember} >
        <Text style={styles.teamMemberFont}> {this.props.name} </Text>
      </View>
    );
  }
}


export default class ProjectDisco extends Component {

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
    backgroundColor: 'orange',
    width: RADIUS*3,
    height: RADIUS*2,
    borderRadius: RADIUS,
    justifyContent: 'center',
    alignItems: 'center'
  },

  teamMemberFont: {
    fontFamily: 'Helvetica',
    fontSize: 19, 
    color: 'white'
  }
})
