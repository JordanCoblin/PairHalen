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
        title = {this.props.name}
        color = 'white'
        />
      </View>
    );
  }
}


export default class ProjectDisco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nonPairingMembers : ["An", "Francisco", "Kayle", "Eliana", "Sophia", "Suyang", "Chris", "Jordan", "Owen"],
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

        <View style={{flex: 0.35, justifyContent:'center', alignItems: 'center', backgroundColor: 'orange'}}>
          <Text style={[styles.halenText, {paddingTop: 20}]}> Hey Halen! </Text>
          <Text style={[styles.halenText, {fontSize: 25}]}> Who's pairing? </Text>
        </View>

        <View style={{flex: 2, flexDirection: 'row'}} >
          <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'space-around', alignItems: 'center'}} >
            {nonPairingMembersViews}
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue', justifyContent: 'space-around', alignItems: 'center'}} >
            {pairingMembersViews}
          </View>

        </View>
      </View>
    );
  }
}

let RADIUS = 32

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
    height: RADIUS*1.8,
    borderRadius: RADIUS/2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0
  },

  teamMemberFont: {
    fontFamily: 'Helvetica',
    fontSize: 19, 
    color: 'white'
  }
})
