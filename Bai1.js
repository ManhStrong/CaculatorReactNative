import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInputBase,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import IconAdd from 'react-native-vector-icons/Ionicons';
import IconMinus from 'react-native-vector-icons/AntDesign';
const Header = () => {
  const arrowLeftThin = <Icon name="arrow-left-thin" size={30} color="white" />;
  return (
    <View style={styles.header}>
      <Text>{arrowLeftThin}</Text>
      <Text style={styles.headerContent}>XUẤT HÀNG</Text>
      <Text></Text>
    </View>
  );
};

const Body = () => {
  const chevronRight = <Icon name="chevron-right" size={20} color="#9F9F9F" />;
  const [text, onChangeText] = React.useState('Useless Text');
  const search = <IconSearch name="search" size={20} color="black" />;
  const menuDowm = <Icon name="menu-down" size={24} color="black" />;
  const iconAdd = <IconAdd name="add" size={20} color="black"></IconAdd>;
  const iconMinus = (
    <IconMinus name="minus" size={20} color="black"></IconMinus>
  );

  const barCode = <Icon name="barcode" size={40} color="#55B270" />;
  const [number, setNumber] = useState(1);
  const [cost, setCost] = useState(150000);

  return (
    <View style={styles.body}>
      <View style={styles.contentBody}>
        <View style={styles.content}>
          <Text>Loại xuất hàng2</Text>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonSell}>Bán</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonNurture}>Hùm nuôi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text>Khách Hàng</Text>
          <Text>Khách lẻ {chevronRight}</Text>
        </View>
        <View style={styles.content}>
          <Text>Ngày xuất hàng</Text>
          <Text>7/11/2024 {chevronRight}</Text>
        </View>
      </View>
      <View style={[styles.buttonSearch]}>
        <View style={styles.temp}>
          <Text>{search}</Text>
          <TextInput
            style={{marginLeft: 10}}
            onChangeText={onChangeText}
            placeholder="Chọn hàng nhập"
            placeholderTextColor={'black'}
            fontSize={16}></TextInput>
        </View>
        <View style={styles.temp}>
          <Text
            style={{fontSize: 50, color: 'rgb(211,211,211)', marginRight: 10}}>
            |
          </Text>
          <View style={styles.codebar}>
            <Text style={{color: '#55B270', fontSize: 16}}>Quét mã vạch</Text>
            <Text>{barCode}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          backgroundColor: 'rgb(254,254,254)',
        }}>
        <View style={styles.image}>
          <Image
            style={styles.imageProduct}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></Image>
        </View>
        <View style={styles.infoProduct}>
          <Text style={{color: 'black', marginTop: -12, marginBottom: 6}}>
            TS 110ML
          </Text>
          <View
            style={{
              backgroundColor: 'rgb(235,238,247)',
              paddingBottom: 3,
              width: 160,
              borderRadius: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{paddingLeft: 6, color: 'black'}}>
              Đơn vị tính: Chai
            </Text>
            <Text>{menuDowm}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.addProduct}>
              <TouchableOpacity
                style={styles.iconMinus}
                onPress={() => {
                  let newValue = number - 1;
                  setNumber(newValue);
                  let newCost = cost - 150000;
                  setCost(newCost);
                }}>
                <Text>{iconMinus}</Text>
              </TouchableOpacity>
              <View style={styles.number}>
                <Text style={styles.fontSizeNumber}>|</Text>
                <Text style={styles.fontSizeNumber}>{number}</Text>
                <Text style={styles.fontSizeNumber}>|</Text>
              </View>
              <TouchableOpacity
                style={styles.iconAdd}
                onPress={() => {
                  let newValue = number + 1;
                  setNumber(newValue);
                  let newCost = cost + 150000;
                  setCost(newCost);
                }}>
                <Text>{iconAdd}</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'center', marginLeft: 30}}>
              <Text style={{color: 'green'}}>{cost} d</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailProduct}>
          <Text>{chevronRight}</Text>
        </View>
      </View>
    </View>
  );
};
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerContent}>
        Tổng thanh toán2:<Text style={{color: 'green'}}> 490.000 đ</Text>
      </Text>
      <View>
        <TouchableOpacity>
          <Text style={styles.footerButton}>XUẤT HÀNG(2)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const main = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'rgb(16,139,43)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerContent: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
  },
  body: {
    backgroundColor: 'rgb(225,229,232)',
    flex: 1,
  },
  contentBody: {
    backgroundColor: 'white',
    marginTop: 40,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginLeft: 16,
    paddingRight: 10,
  },

  buttonSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  temp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },
  codebar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },

  placeholderText: {
    fontSize: 24,
    color: 'red',
  },

  image: {
    flex: 1.2,
    backgroundColor: 'rgb(235,238,245)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  infoProduct: {
    flex: 3,
    backgroundColor: 'white',
    paddingLeft: 8,
  },
  detailProduct: {
    flex: 0.3,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addProduct: {
    backgroundColor: 'rgb(235,238,247)',
    flexDirection: 'row',
    width: 140,
    height: 38,
    borderRadius: 6,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageProduct: {
    width: 70,
    height: 96,
  },

  iconMinus: {
    flex: 1,
    alignItems: 'center',
  },
  number: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 80,
  },
  fontSizeNumber: {
    fontSize: 20,
  },
  iconAdd: {flex: 1, alignItems: 'center'},

  button: {
    flexDirection: 'row',
  },
  buttonSell: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 6,
    color: 'white',
  },
  buttonNurture: {
    backgroundColor: 'rgb(235,238,247)',
    paddingTop: 12,
    paddingLeft: 16,
    paddingBottom: 12,
    paddingRight: 16,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    color: '#000000 ',
  },

  footer: {
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  footerButton: {
    backgroundColor: 'rgb(0,143,53)',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 6,
    paddingTop: 16,
    paddingLeft: 20,
    paddingBottom: 16,
    paddingRight: 20,
  },
  footerContent: {
    color: 'black',
    fontSize: 14,
  },
});

export default main;
