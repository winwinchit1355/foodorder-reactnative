import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <TextInput 
        placeholder="youremail"
        style={{
          borderWidth:1,padding:10
        }}
        secureTextEntry={false}  
      />
      <TextInput 
        placeholder="password" 
        style={{
          borderWidth:1,padding:10
        }}
        secureTextEntry={true}  
      />
      <TouchableOpacity>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <Link href="/about">Visit About Screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex:1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
