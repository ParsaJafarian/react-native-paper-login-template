import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

type Props = {
    children: React.ReactNode;
};

export default function Background({ children }: Props) {
    const theme = useTheme();
    const style = { ...styles.container, backgroundColor: theme.colors.background };

    return <View style={style}>
        {children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
