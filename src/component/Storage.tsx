import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeSingleValue = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        const error = {
            'message': 'Error: storeSingleValue',
            'value': value,
            'error': e?.message
        }
        console.warn(error);
        throw new Error(error.message);
    }
}

export const storeObject = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        const error = {
            'message': 'Error: storeObject',
            'value': value,
            'error': e?.message
        }
        console.warn(error);
        throw new Error(error.message);
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {

        }
    } catch (e) {
        const error = {
            'message': 'Error: getData',
            'error': e?.message
        }
        console.warn(error);
        throw new Error(error.message);
    }
}
