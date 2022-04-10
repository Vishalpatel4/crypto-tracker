import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform } from 'react-native';
import ListItem from './components/ListItem'
import { cryptoList } from './utils/api';


export default function App() {

  const [loading, setLoading] = useState(false);
  const [cryptoCoinList, setCryptoCoinList] = useState([]);

  useEffect(() => {
    const callCryptoListApi = () => {
      setLoading(true);
      cryptoList((res) => {
        // console.log('res', res)
        setLoading(false);
        setCryptoCoinList(res);
      })
    }
    callCryptoListApi();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <Text style={styles.loading}>Loading...</Text> :
        <>
          <View style={styles.titleWrapper}>
            <Text style={styles.largeTitle}>Crypto List</Text>
          </View>
          <View style={styles.divider} />
          <FlatList
            keyExtractor={(item) => item.id}
            data={cryptoCoinList}
            renderItem={({ item }) =>
              <ListItem
                item={item.id}
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                price_change_24h={item.price_change_24h}
                logoUrl={item.image}
              />
            }
          />
          < StatusBar style="auto" />
        </>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: Platform.OS == "ios" ? 10 : 60,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  loading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  }
});
