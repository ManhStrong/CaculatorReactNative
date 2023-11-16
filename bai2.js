import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerContent}>Cá Nhân</Text>
    </View>
  );
};

const Body = () => {
  const account = <Icon name="account" size={106} color="rgb(22,192,59)" />;
  const chevronRight = <Icon name="chevron-right" size={18} color="#9F9F9F" />;

  return (
    <View style={styles.body}>
      <View style={styles.avatar}>{account}</View>
      <View style={styles.contentBody}>
        <View>
          <Text
            style={{
              paddingLeft: 16,
              paddingBottom: 8,
              backgroundColor: 'rgb(225,229,232)',
            }}>
            TÀI KHOẢN:
          </Text>
        </View>
        <Item keyWord="Tên" value="Chưa đặt tên" icon={chevronRight}></Item>
        <Item
          keyWord="Số điện thoại"
          value="(+84)335676643"
          icon={chevronRight}></Item>
        <Item keyWord="Thay đổi mật khẩu" icon={chevronRight}></Item>
        <Item keyWord="Trợ giúp" value="Liên hệ(+84)3356766"></Item>
        <View>
          <Text
            style={{
              paddingTop: 22,
              paddingLeft: 16,
              paddingBottom: 8,
              backgroundColor: 'rgb(225,229,232)',
              borderTopWidth: 0.5,
              borderTopColor: 'gray',
              borderBottomWidth: 0.5,
              borderBottomColor: 'gray',
            }}>
            ỨNG DỤNG
          </Text>
          <Item keyWord="Phiên bản ứng dụng" value="1.0.1.60 beta"></Item>
          <Item
            keyWord="Chế độ developer"
            value="Tắt"
            icon={chevronRight}></Item>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonContent}>XÓA BỘ NHỚ CACHE</Text>
      </TouchableOpacity>
    </View>
  );
};
const Item = props => {
  return (
    <View style={styles.content}>
      <Text>{props.keyWord}</Text>
      <Text>
        {props.value}
        {props.icon}
      </Text>
    </View>
  );
};
const Footer = () => {
  const home = <Icon name="home" size={30} color="#717578" />;
  const dealerWarehouse = <Icon name="warehouse" size={30} color="#717578" />;
  const warehouse = (
    <Icon name="home-variant-outline" size={30} color="#717578" />
  );
  const notebookEditOutline = (
    <Icon name="notebook-edit-outline" size={30} color="#717578" />
  );
  const accountTie = <Icon name="account-tie" size={30} color="#4CB24E" />;
  const InfoFooter = props => {
    return (
      <TouchableOpacity style={styles.footerContent}>
        {props.icon}
        <Text>{props.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.footer}>
      <InfoFooter name="Trang trại" icon={home}></InfoFooter>
      <InfoFooter name="Kho" icon={warehouse}></InfoFooter>
      <InfoFooter name="Công việc" icon={notebookEditOutline}></InfoFooter>
      <InfoFooter name="Kho đại lý" icon={dealerWarehouse}></InfoFooter>
      <InfoFooter name="Cá nhân" icon={accountTie}></InfoFooter>
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
  },
  headerContent: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    lineHeight: 60,
  },
  body: {
    backgroundColor: 'rgb(225,229,232)',
    flex: 1,
  },

  footer: {
    height: 72,
    backgroundColor: 'FEFEFE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(225,229,232)',
  },
  contentBody: {
    backgroundColor: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomColor: 'gray',
    justifyContent: 'space-between',
    marginLeft: 16,
    paddingRight: 10,
  },
  button: {
    backgroundColor: 'rgb(254,244,243)',
    padding: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    borderRadius: 8,
  },
  buttonContent: {
    textAlign: 'center',
    color: '#C4713A',
  },
});

export default main;
