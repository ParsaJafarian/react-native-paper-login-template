# react-native-paper-login-template
React native paper login template using Firebase's authentication api. This template is a good starting point for any react native project that requires user authentication. Feel free to use this template in your projects and to modify it as you see fit.

## How to Get Started
1. Clone the repository
2. Create a .env file
3. In .env, write `EXPO_PUBLIC_FIREBASE_API_KEY=[your_api_key]`
4. Run `npm install` to install the dependencies
5. Run `npm start` to start the development server

## Structure
Main files for customization:
- `screens/AuthScreen.tsx` - Screen for both login and signup
- `util/auth.ts` - Authentication functions

### AuthScreen
This screen contains the login and signup forms. The main parameter that differentiates the two forms is the `isLogin` parameter. This parameter is passed to the `AuthForm` component to determine which form to display.

For customization purposes, you can modify the `AuthForm` component to include additional fields or to change the layout of the form.

### Authentication
The `util/auth.ts` file contains the functions that send requests to Firebase's authentication API. The `createUser` and `loginUser` functions are the main functions that are used in the `AuthScreen` component.

For customization purposes, you can modify these functions to include additional parameters or to change the behavior of the authentication process. Furthermore, you can change the backend to use a different authentication service other than Firebase.

## Contributing
Feel free to contribute to this project by creating a pull request. If you have any suggestions or improvements, please create an issue. I won't be updating this project actively. As such, even updating the dependencies would be a great help.
