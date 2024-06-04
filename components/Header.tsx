import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

type Props = {
    children: React.ReactNode;
};

export default function Header({ children }: Props) {
    const theme = useTheme();
    const style = { ...styles.header, color: theme.colors.primary };
    return <Text style={style}>{children}</Text>
};


const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingVertical: 14,
    },
});
