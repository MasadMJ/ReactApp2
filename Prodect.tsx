import { StyleSheet, Text,View,Image } from 'react-native';

const styles = StyleSheet.create({

  imgPro: {
    width: 150,
    height: 150,
    marginBottom: 20,
    left: 10
  },
  imgProRight: {
    width: 150,
    height: 150,
    marginBottom: 20,
    position: 'absolute',
    right: 10,
    marginTop: 20
  },

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


const Product = () => {
  return (
    <View>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgPro} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgPro} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgPro} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgPro} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgProRight} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgProRight} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgProRight} />
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg' }} style={styles.imgProRight} />

    </View>
  );
}

export default Product;
