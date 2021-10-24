import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
        flex: .10,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: 'maroon',
        alignSelf: 'stretch',
    },
    logo: {
        flexDirection: 'column',
        height: '100%',
        width: '20%',
        padding: 5,
        borderRadius: 100,
    },
    logoText: {
        flex: 1,
        fontSize: 20,
        padding: 10,
        flexDirection: 'row',
        color: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});