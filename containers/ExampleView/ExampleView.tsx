import { StyleSheet, Text, View } from 'react-native';
import { useCtxValue } from '../../contexts/context';

const ExampleView = () => {
    const [context, dispatch] : any = useCtxValue()

    return <View style={styles.exampleView}>
        <Text> Example </Text>
    </View>
}

const styles = StyleSheet.create({
    exampleView: {
        backgroundColor: "green"
    }
})

export default ExampleView