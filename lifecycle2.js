// import {useEffect, useState} from 'react';
// import {Text, TouchableOpacity, View} from 'react-native';
// const main = () => {
//   useEffect(() => {
//     console.log('Init');
//   }, []);
//   const [temp, setTemp] = useState(1);

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//           newValue = temp + 1;
//           setTemp(newValue);
//         }}>
//         <Text>Click me</Text>
//       </TouchableOpacity>
//       <Text>{temp}</Text>
//     </View>
//   );
// };
// export default main;

import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
  }, [count]);

  console.log('Rendering');

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Text onPress={() => setCount(count + 1)}>Click me</Text>
    </View>
  );
};

export default Example;
