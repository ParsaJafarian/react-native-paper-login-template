import { StyleSheet, Text, View } from "react-native";
import TextInput from "../components/TextInput";
import { Navigation } from "../util/types";
import { useState } from "react";
import { emailValidator, passwordValidator } from "../util/validators";
import { createUser, loginUser } from "../util/auth";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Paragraph from "../components/Paragraph";
import Background from "../components/Background";
import Title from "../components/Title";

type Props = {
    isLogin: boolean;
}

export default function AuthScreen({ isLogin }: Props) {
    const navigation: Navigation = useNavigation();

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) {
            setEmail(prev => ({ ...prev, error: emailError }));
            setPassword(prev => ({ ...prev, error: passwordError }));
            return;
        }

        loginUser(email.value, password.value)
            .then(() => navigation.replace('Dashboard'))
            .catch((error) => alert(error));
    };

    const onSignUpPressed = () => {
        // const schoolError = schoolValidator(school.value);
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);

        if (emailError || passwordError) { //|| schoolError
            // setSchool(prev => ({ ...prev, error: schoolError }));
            setEmail(prev => ({ ...prev, error: emailError }));
            setPassword(prev => ({ ...prev, error: passwordError }));
            return;
        }

        createUser(email.value, password.value)
            .then(() => navigation.replace('Dashboard'))
            .catch((error) => alert(error));
    };

    return <Background>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <View style={styles.formContainer}>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <Button mode="contained" onPress={isLogin ? onLoginPressed : onSignUpPressed}>
                {isLogin ? 'Login' : 'Sign Up'}
            </Button>
        </View>

        <View style={styles.subButtonContainer}>
            <Paragraph>
                {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
            </Paragraph>

            <Button onPress={() => navigation.replace(isLogin ? 'Signup' : 'Login')} >
                {isLogin ? 'Sign Up' : 'Login'}
            </Button>
        </View>

    </Background>
};

const styles = StyleSheet.create({
    formContainer: {
        width: '80%',
        justifyContent: 'center',
    },
    subButtonContainer: {
        alignContent: 'center',
        alignItems: 'center',
        width: '80%',
        flexDirection: 'column',
    }
});  
