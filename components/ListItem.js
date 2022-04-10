import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet, Image } from 'react-native'

const ListItem = ({ name, symbol, currentPrice, price_change_24h, logoUrl }) => {

    const priceChangeColor = price_change_24h > 0 ? '#00BFA5' : '#EF5350'
    return (
        <View style={styles.itemWrapper}>

            {/* Left side */}
            <View style={styles.leftWrapper}>
                <Image source={{ uri: logoUrl }} style={styles.image} />
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>

            {/* Right side */}
            <View style={styles.rightWrapper}>
                <Text style={styles.title}>₹{currentPrice.toLocaleString('en-IN', { currency: 'INR' })}</Text>
                <Text style={[styles.subtitle, { color: priceChangeColor }]}>{price_change_24h.toFixed(2)}%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 48,
        height: 48,
    },
    titleWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#A9ABB1',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    }
})


export default ListItem