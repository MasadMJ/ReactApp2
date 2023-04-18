import React from 'react';
import { View, TextInput, StyleSheet, } from 'react-native';
type SearchBarProps = {
  placeholder: string;
  onSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        placeholderTextColor="#777"
        editable={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#777',
  },
});

export default SearchBar;
