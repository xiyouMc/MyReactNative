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
var REQUEST_URL = 'http://121.40.28.106:8097/api/rest/liveroom/latest';
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            text: '',
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ]),
            dataSourceMovie: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            loaded: false,
        };
    }
    componentDidMount() {
        this.fetchData();
    }

  fetchData() {
    fetch(REQUEST_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "authorization": "Basic vivasam=4aef31355d971066272917f8e12465e6",
                "content-type": "application/x-www-form-urlencoded"
            },
            body: "a={flag:'',count:20}&b='asdasda'&c='20160913154018961'&d='10000000'&e='763'&f='d4036f46d1df419d75c14dcc257f7415b7b9d1f5e0aa0110'"
        })
        .then((response) => response.json())
        // .then((res) => {console.log(res.json())})
        .then((responseData) => {
            console.log(responseData.data.latests);
            this.setState({
                dataSourceMovie: this.state.dataSourceMovie.cloneWithRows(responseData.data.latests),
                loaded: true,
            });
        })
        .done();
}

  render(){
    return (
      <View style={{flex: 1 ,flexDirection: 'row'}}>
          <ListView dataSource={this.state.dataSourceMovie}
          renderRow={this.renderMovie}
          style={styles.listView}
          />
      </View>
      );
  }

      renderMovie(live){
      return (
          <View style={styles.container}>

                     <Text style={styles.title}>{live.userName}</Text>

                  <View style={[{flex: 1, backgroundColor: '#fe0000', height: 400}]}>
                  <Image
                     source={{uri: live.thumbUrl}}
                     style={styles.thumbnail}
                 />
                 </View>
          </View>
        );

    }

}

const styles = StyleSheet.create({
    bigblue: {
        flex: 1,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        flex: 1,
        color: 'red',
    },
    text2: {
        flex: 1,
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    flexTest: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
          flex: 1,
          backgroundColor: '#F5FCFF',
      },
      thumbnail: {
          width: 400,
          height: 500,
      },
      year: {
          textAlign: 'center',
      },
    title: {
        fontSize: 20,
        width: 53,
        height: 81,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
