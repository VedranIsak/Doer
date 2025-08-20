import { View, StyleSheet } from "react-native"
import HomeIcon from "./icons/homeIcon"
import ScreenText from "./text/screenText"
import { ReactNode } from "react"

interface ScreenHeaderProps {
    children: ReactNode
}

const ScreenHeader = ({children}: ScreenHeaderProps) => {
    return (
        <View style={styles.container}>
            <HomeIcon />
            <ScreenText>{children}</ScreenText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { width: "100%", display: "flex", flexDirection: "row",
        justifyContent: "flex-start", alignItems: "center"
     }
})

export default ScreenHeader;
