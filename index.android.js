/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  ListView,
  Picker,
  Alert,
  TouchableHighlight
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
// <Blink text='Yes blinking is so great'
        // <Blink text='Why did they ever take this out of HTML'
        // <Blink text='Look at me look at me look at me'
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';
class AwesomeProject extends Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {text: '',
     dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ]),
     dataSourceMovie: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
     loaded:false,
     };
  }

   componentDidMount(){
         this.fetchData();
     }

  fetchData() {
         fetch(REQUEST_URL)
             .then((response) => response.json())
             .then((responseData) => {
                 this.setState({
                     dataSourceMovie: this.state.dataSourceMovie.cloneWithRows(responseData.movies),
                     loaded: true,
                 });
             })
             .done();
     }

  render(){
    return (
      <View style={{flex: 1 ,flexDirection: 'column'}}>
         <Text style={styles.text2}  >I love to blink</Text>
         <Text style={styles.flexTest}>flexTest</Text>
         <Text style={styles.bigblue}>bigblue</Text>
          <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>

         <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
       
       
          <ListView dataSource={this.state.dataSourceMovie}
          renderRow={this.renderMovie}
          style={styles.listView}
          />
        <Picker
  selectedValue={this.state.language}
  onValueChange={(lang) => this.setState({language: lang})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

<TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
          )}>
          <View style={styles.button}>
            <Text>Alert with message and default button</Text>
          </View>
        </TouchableHighlight>
      </View> 
      );
  }

      renderMovie(movie){
      return (
          <View style={styles.container}>
                 <Image
                     source={{uri: movie.posters.thumbnail}}
                     style={styles.thumbnail}
                 />
                 <View style={styles.rightContainer}>
                     <Text style={styles.title}>{movie.title}</Text>
                     <Text style={styles.year}>{movie.year}</Text>
                 </View>
          </View>
        );

    }

}

const styles = StyleSheet.create({
  bigblue: {
    flex:1,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    flex:1,
    color: 'red',
  },
  text2:{
    flex:1,
    width:50,
    height:50,
    backgroundColor:'powderblue'
  },
  flexTest:{
    flex:1,
    backgroundColor:'skyblue'
  }, 
  container: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
     },
     rightContainer: {
         flex: 1,
     },
     title: {
         fontSize: 20,
         marginBottom: 8,
         textAlign: 'center',
     },
     year: {
         textAlign: 'center',
     },
     thumbnail: {
         width: 53,
         height: 81,
     },
     listView: {
         paddingTop: 20,
         backgroundColor: '#F5FCFF',
     },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
