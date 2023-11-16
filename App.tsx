import {View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header =() =>{
  return(
    <View style  = {styles.header}>
      <Text style = {styles.headerTextBothSide}>Trở lại</Text>
      <Text style={[styles.headerTextBothSide, styles.headerTextCenter]}>SẢN PHẨM</Text>
      <Text style = {styles.headerTextBothSide}>Menu</Text>
    </View>
  )
}

const Product = (props: ProductProps) =>{
  return(
    <View style= {styles.product}>
     <Image style={styles.imageBody} source={{uri: props.image}}></Image>
     <View style = {styles.productContent}>
      <Text style = {styles.productName}>{props.name}</Text>
      <Text style = {styles.productType}>{props.type}</Text>
     </View>
    </View>
  )
}

const Footer =()=>{

  return(
    <View style  = {styles.footer}>
      <Text style = {styles.footerContent}>Tổng số sản phẩm: 14</Text>
      <View>
        <TouchableOpacity>
        <Text style = {styles.footerButton}>Thêm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
type ProductProps={
  image:string,
  name: string,
  type: string

}

const DATA = [
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 2',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 3',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 4',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 5',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 6',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 7',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    name: 'Nước ngọt cocacola',
    type: 'Nước ngọt 8',
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
];

const renderProduct = ({ item }: { item: ProductProps }) => {
  return <Product name={item.name} type={item.type} image={item.image} />;
};
const main =() =>{
  return (
    <SafeAreaView style = {{flex: 1}}>
      <Header></Header>
      <FlatList style = {styles.body}
        data={DATA}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
      />
      <Footer></Footer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  header:{
  height: 50,
  backgroundColor: "green",
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 headerTextCenter:{
  fontSize: 15,
  fontWeight: 'bold',
 },
 headerTextBothSide:{
  fontSize: 14,
  color: 'white',
  paddingHorizontal: 10
 },
 body:{
  backgroundColor: "green",
  flex: 1
 },
 imageBody:{
  width: 80,
  height: 80,
  borderRadius: 20
 },
 footer:{
  height:60,
  backgroundColor: "white",
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10
 },
 footerButton:{
  borderWidth: 1,
  borderColor: 'green',
  fontWeight: 'bold',
  color: 'green',
  borderRadius: 10,
  paddingTop: 8,
  paddingLeft: 20,
  paddingBottom: 8,
  paddingRight: 20
 },
 footerContent:{
  color: 'black',
  fontSize: 14
 },
 product:{
  flexDirection: "row",
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: "white",
  marginTop: 10
 },
 productContent:{
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  paddingHorizontal: 16
 },
 productName:{
  fontSize: 18,
  fontWeight: 'bold'
 },
 productType:{
  fontSize: 14
 }
})
export default main;