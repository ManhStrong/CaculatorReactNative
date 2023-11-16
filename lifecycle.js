import {Component} from 'react';
import React from 'react';
import {Text, View} from 'react-native';
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   AppRegistry,
// } from 'react-native';

// import React, {useState, useEffect} from 'react';

// export class lifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: 0,
//     };

//     console.log('Constructor');
//   }
//   componentWillMount() {
//     console.log('Component will mount');
//   }
//   clickMe() {
//     this.setState({
//       data: this.state.data + 1,
//     });
//   }

//   render() {
//     console.log('Rendering');
//     return (
//       <View>
//         <Text
//           onPress={() => {
//             {
//               this.clickMe(this);
//             }
//           }}>
//           Click Me
//         </Text>
//         <Text>{this.state.data}</Text>
//       </View>
//     );
//   }
//   componentDidMount() {
//     console.log('Component did mount');
//   }

//   //updateing
//   componentWillReceiveProps() {
//     console.log('componentWillReceiveProps');
//   }
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     console.log('Should component update ');
//     return true;
//   }

//   componentWillUpdate(nextProps, nextState, nextContext) {
//     console.log('Component will update');
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('componentDidUpdate');
//   }
//   //unmount
//   componentWillUnmount() {
//     console.log('component will unmound');
//   }
// }
// AppRegistry.registerComponent('LifeCycle', () => lifeCycle);

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor');
  }
  // componentWillMount() {
  //   console.log('Component will mount');
  // }

  componentDidMount() {
    console.log('component did mount');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Rendering');
    return (
      <View>
        <Text>You clicked {this.state.count} times</Text>
        <Text onPress={() => this.setState({count: this.state.count + 1})}>
          Click me2
        </Text>
      </View>
    );
  }
}
