import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

type Props = {
  children: React.ReactNode;
};

export default function Paragraph({children}: Props) {
    const theme = useTheme();
    const style = {...styles.text, color: theme.colors.secondary};

    return <Text style={style}>{children}</Text>;
};


const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
});