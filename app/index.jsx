import React from 'react'
import { Redirect } from 'expo-router'
//in this case, we are redirecting to the home page
//but, now that we are integrating the login page, we will redirect to the login page if the user is not logged in
//if the user is logged in, we will redirect to the home page

//we will manage the user's session with the useSession contextProvider?, and also with useAuth hook?,
//the, integrate the local storage of the user session with react-native-keychain, because it is more secure than AsyncStorage
const Index = () => {
  return <Redirect href='login' />
}

export default Index
