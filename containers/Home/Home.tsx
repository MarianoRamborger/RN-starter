import { StyleSheet, Text, View, Button } from 'react-native';
import { useCtxValue } from '../../contexts/context';


const Home  = ({navigation} : any) => {  /* Navigation prop is passed to all screens */ 
    const [context, dispatch] : any = useCtxValue()

    return <View style={styles.mainView}>
        <Text style={styles.title}> {context.test} </Text>

        <Button title="Link example" onPress={()=> navigation.navigate("Example", {
            title: "Example title",
            testParam: "Screen #2!"
        })} 
        />
    </View>
}

const styles = StyleSheet.create({
    mainView: {  
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        marginVertical: 25,
    },
    navButton: {
        width: 20
    }
    
})

export default Home