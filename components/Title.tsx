import { StyleSheet, Text } from "react-native"
import { useTheme } from "react-native-paper";

type Props = {
    children: React.ReactNode;
};

export default function Title({ children }: Props) {
    const theme = useTheme();
    const style = { ...styles.text, color: theme.colors.primary};

    return <Text style={style}>{children}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        lineHeight: 26,
        textAlign: 'center',
    },
});
