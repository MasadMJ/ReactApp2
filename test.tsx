import { StyleSheet, Text,View } from 'react-native';

const styles = StyleSheet.create({
  hellotext: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  byetext: {
    color: 'black',
    fontSize: 25,
  },
Nametext  : {
 color: 'green',
}
});

const MyComponent = () => {
  return <View><Text style={styles.hellotext}>Hello World!</Text>
<Text style={styles.byetext}>Bye!</Text>

<Text style={styles.byetext}>MY NAME IS: 
<Text style={styles.Nametext}> Yarden</Text>
</Text>

</View>;

}

export default MyComponent;
