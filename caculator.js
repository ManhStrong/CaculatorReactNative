import {useState, useEffect} from 'react';

const {
  View,
  Dimensions,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} = require('react-native');
const height = Dimensions.get('window').height;

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius:
          Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ) / 2,

        backgroundColor: props.backgroundColor,
        margin: 7,
      }}>
      <Text
        style={{
          fontSize: 28,
          width: 80,
          height: height * 0.09,
          lineHeight: height * 0.09,
          textAlignVertical: 'center',
          textAlign: 'center',
          color: props.color,
          fontWeight: 'bold',
        }}>
        {props.value}
      </Text>
    </TouchableOpacity>
  );
};
const Body = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);
  const handleNumberPress = buttonValue => {
    setFirstNumber(firstNumber => firstNumber + buttonValue);
  };

  useEffect(() => {
    if (result !== null) {
      setSecondNumber(result);
    }
  }, [result, secondNumber]);

  useEffect(() => {
    if (firstNumber.toString().includes('.')) {
      setFirstNumber(firstNumber.toString().replace(/\.{1,}/, '.'));
    }
  }, [firstNumber]);

  const handleOperationpress = buttonValue => {
    if (firstNumber !== '') {
      calculateResult();
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber('');
    } else {
      setFirstNumber('');
      setOperation(buttonValue);
    }
  };

  const handleClickAddAndMinus = () => {
    if (firstNumber !== '') {
      setFirstNumber(prevNumber => {
        return prevNumber.startsWith('-')
          ? prevNumber.slice(1)
          : `-${prevNumber}`;
      });
    } else if (result !== null) {
      setResult(prevResult => -prevResult);
    }
  };

  const clickPercentButton = () => {
    if (firstNumber != 0) {
      setFirstNumber(firstNumber * 0.01);
    } else if (result !== null) {
      setResult(result * 0.01);
    }
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const calculateResult = () => {
    let tempResult;
    if (secondNumber !== '' && operation !== '') {
      switch (operation) {
        case '+':
          tempResult = parseFloat(secondNumber) + parseFloat(firstNumber);
          break;
        case '-':
          tempResult = parseFloat(secondNumber) - parseFloat(firstNumber);
          break;
        case '*':
          tempResult = parseFloat(secondNumber) * parseFloat(firstNumber);
          break;
        case '/':
          tempResult = parseFloat(secondNumber) / parseFloat(firstNumber);
          break;
        default:
          tempResult = 0;
          break;
      }
      if (tempResult.toString().includes('000000000000')) {
        let result = [];
        const tempResultSplit = tempResult.toString().split('');
        for (let i = 0; i < tempResultSplit.length; i++) {
          result.push(tempResultSplit[i]);
          if (tempResultSplit[i] !== '0' && tempResultSplit[i] !== '.') break;
        }
        result = Number(result.join(''));
        setResult(result);
      } else setResult(tempResult);
    }
  };

  const getResult = () => {
    calculateResult();
    setOperation('');
    setSecondNumber('');
    setFirstNumber('');
  };

  const getDisplayValue = () => {
    if (firstNumber !== '') {
      return firstNumber;
    } else if (secondNumber !== '') {
      return secondNumber;
    } else if (result !== null) {
      return result;
    } else if (firstNumber === '' && secondNumber === '' && result === null) {
      return 0;
    }
  };

  return (
    <View>
      <View style={{width: '100%', height: '40%'}}>
        <View>
          <Text style={styles.screenFirstNumber}>{getDisplayValue()}</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: '60%',
          paddingHorizontal: 10,
          backgroundColor: 'rgb(0,0,0)',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              value="AC"
              backgroundColor="rgb(164,164,164)"
              color="black"
              onPress={clear}></Button>
            <Button
              value="+/-"
              backgroundColor="rgb(164,164,164)"
              color="black"
              onPress={() => handleClickAddAndMinus('+/-')}></Button>
            <Button
              value="%"
              backgroundColor="rgb(164,164,164)"
              color="black"
              onPress={() => clickPercentButton()}></Button>
            <Button
              value="/"
              backgroundColor="rgb(254,161,6)"
              color="white"
              onPress={() => handleOperationpress('/')}></Button>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              value="7"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('7')}></Button>
            <Button
              value="8"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('8')}></Button>
            <Button
              value="9"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('9')}></Button>
            <Button
              value="x"
              backgroundColor="rgb(254,161,6)"
              color="rgb(249,249,249)"
              onPress={() => handleOperationpress('*')}></Button>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              value="4"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('4')}></Button>
            <Button
              value="5"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('5')}></Button>
            <Button
              value="6"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('6')}></Button>
            <Button
              value="-"
              backgroundColor="rgb(254,161,6)"
              color="rgb(249,249,249)"
              onPress={() => handleOperationpress('-')}></Button>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              value="1"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('1')}></Button>
            <Button
              value="2"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('2')}></Button>
            <Button
              value="3"
              backgroundColor="rgb(52,52,52)"
              color="rgb(249,249,249)"
              onPress={() => handleNumberPress('3')}></Button>
            <Button
              value="+"
              backgroundColor="rgb(254,161,6)"
              color="rgb(249,249,249)"
              onPress={() => handleOperationpress('+')}></Button>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => handleNumberPress('0')}
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get('window').width +
                      Dimensions.get('window').height,
                  ) / 2,
                backgroundColor: 'rgb(52, 52, 52)',
                marginTop: 7,
              }}>
              <Text
                style={{
                  width: 166,
                  height: height * 0.09,
                  lineHeight: height * 0.09,
                  textAlignVertical: 'center',
                  textAlign: 'center',
                  fontSize: 30,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'white',
                }}>
                0
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            value=","
            backgroundColor="rgb(52,52,52)"
            color="rgb(249,249,249)"
            onPress={() => handleNumberPress('.')}></Button>
          <Button
            value="="
            backgroundColor="rgb(254,161,6)"
            color="rgb(249,249,249)"
            onPress={() => getResult()}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenFirstNumber: {
    fontSize: 68,
    color: 'gray',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
});
const Caculator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Body></Body>
    </SafeAreaView>
  );
};
export default Caculator;
