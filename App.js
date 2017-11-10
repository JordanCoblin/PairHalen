import React, { Component } from 'react';
import { StyleSheet, Text, Button, TextInput, View, Image } from 'react-native';

class TeamMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPairing: false
    };
  }

  render() {
    return (
      <View style={styles.teamMember} >
        <Button 
        onPress={() => { this.props.handler(this.props.name) }}
        style={styles.teamMemberFont} 
        title = {this.props.name} />
      </View>
    );
  }
}


export default class ProjectDisco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nonPairingMembers : ["An", "Francisco", "Kayle"],
      pairingMembers : []
    };
  }

  onPressHandler = (txt) => {
    let nonPairingMembers = this.state.nonPairingMembers;
    let pairingMembers = this.state.pairingMembers;
    let index = nonPairingMembers.indexOf(txt);

    // member was no previously not pairing, move to pairing
    if (index >= 0) {
      nonPairingMembers.splice(index, 1);
      pairingMembers.push(txt);
    } 

    // member was previously pairing, move to non-pairing
    else {
      index = pairingMembers.indexOf(txt);
      pairingMembers.splice(index, 1);
      nonPairingMembers.push(txt);
    }

    let newState = {}
    newState["nonPairingMembers"] = nonPairingMembers;
    newState["pairingMembers"] = pairingMembers;

    this.setState(newState)
  }

  render() {

    let nonPairingMembers = this.state.nonPairingMembers;
    var nonPairingMembersViews = [];

    for (var i = 0; i < nonPairingMembers.length; i++) {
        nonPairingMembersViews.push(<TeamMember name={nonPairingMembers[i]} handler={this.onPressHandler} key={i} />);
    }

    let pairingMembers = this.state.pairingMembers;
    var pairingMembersViews = [];

    for (var i = 0; i < pairingMembers.length; i++) {
        pairingMembersViews.push(<TeamMember name={pairingMembers[i]} handler={this.onPressHandler} key={i} />);
    }

    return (
      <View style={{flex: 1}}>

        <View style={{flex: 0.3, justifyContent:'center', alignItems: 'center', backgroundColor: 'orange'}}>
          <Text style={styles.halenText}> Hey Halen! </Text>
          <Text style={styles.halenText}> Who's pairing? </Text>
        </View>

        <View style={{flex: 2, flexDirection: 'row'}} >
          <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'space-around'}} >
            {nonPairingMembersViews}
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue', alignItems:'center', justifyContent:'center'}} >
            {pairingMembersViews}
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
