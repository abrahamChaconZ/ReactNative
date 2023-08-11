import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Button
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./src/Firebase";

const App = () => {
  const [valor, setValor] = useState("")
  const [pass, setPass] = useState("")
  const [see, setSee] = useState(false)

  const auth = FIREBASE_AUTH

  return (
    <View style={Sty.Sc}>
      <Text >Usuario</Text>
      <TextInput
        testID="Input1"
        style={Sty.textIn}
        onChangeText={(val) => setValor(val)}
        value={valor}
      ></TextInput>
      <Text >Contraseña</Text>
      <TextInput
        testID="Input2"
        style={Sty.textIn}
        onChangeText={(val) => setPass(val)}
        value={pass}
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={Sty.boton}
        disabled={valor && pass ? false : true}                        //Validación (si el usuario y el password estan vacios no se habilita el boton)
        onPress={() => {
          createUserWithEmailAndPassword(auth, valor, pass)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user.stsTokenManager.accessToken);  //Si el correo es válido y si la contraseña es larga se imprime token en consola
              setSee(true);
            })
            .catch((error) => {
              alert(error.message)                                   //Si hay un error para entrar a la App, se manda alert a la pantalla.
            });
        }}
      >
        <Text style={Sty.fontS}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Modal
        visible={see}
      >
        <Text>Credencial correcta</Text>
        <Button
        color={"red"}
          title="Salir"
          onPress={() => {
            setSee(false);
            setValor("");
            setPass("");
          }} />
      </Modal>
    </View>
  )
}


export default App;

const Sty = StyleSheet.create({
  boton: {
    margin: "10%",
    backgroundColor: "green",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "black",
    height: 30,
    width: "60%",
    alignItems: "center",
    padding: "1%"
  },
  textIn: {
    borderColor: "#888",
    borderWidth: 2,
    marginTop: "5%",
    borderRadius: 4,
    width: "60%",
    backgroundColor: "#eee",
    marginBottom: "3%"
    
  },
  Sc: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  fontS: {
    color: "white"
  }
})