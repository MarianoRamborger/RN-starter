import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useCtxValue } from '../../contexts/context';
import {useState} from 'react'

const ExampleView = ({navigation, route} : any) => {
    const [context, dispatch] : any = useCtxValue()
    const [inputValue, setInputValue] = useState("")
    const {testParam} = route.params

    return <View style={{alignItems: 'center', marginTop: 20}} >
        <Text style={styles.exampleText}> Using {testParam} </Text>


        <View style={styles.inputBox}>
            <TextInput style={styles.textInput} value={inputValue} onChangeText={(e)=>setInputValue(e)} />

            <Button title='Update title' onPress={()=> navigation.setOptions({title: inputValue})} />


        </View>

    </View>
}

const styles = StyleSheet.create({
    exampleText: {
        fontSize: 25
    },
    inputBox: {
        
    },
    textInput : {
        borderWidth: 1,
        borderColor: "#2196F3",
        marginVertical: 25
    }


})

export default ExampleView