import { StyleSheet, Text, View, Button } from 'react-native';
import { useCtxValue } from '../../contexts/context';


const Home  = ({navigation} : any) => {  /* Navigation prop is passed to all screens */ 
    const [context, dispatch] : any = useCtxValue()

    return <View style={styles.mainView}>
        <Text> {context.test} </Text>

        <Button title="Link example" onPress={()=> navigation.navigate("Example")} />
    </View>
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "red"
    }
})

export default Home