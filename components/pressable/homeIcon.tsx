import { Alert, Image, Pressable, Text, View } from "react-native"

const HomeIcon = () => {
    return (
        <Pressable onPress={() => { Alert.alert("Tshabalala", "Title") }}>
                <Image style={{ width: 75, height: 75 }} source={require("../../assets/icons/homeIcon.png")}/>
        </Pressable>
    )
}

export default HomeIcon;