import React from 'react';
import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import RestaurantsScreen from '../screens/Restaurants/Restaurants';
import MapsScreen from '../screens/Maps/Maps';
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurant';
import DetailRestaurantScreen from '../screens/Restaurants/DetailRestaurant';
import LogoutScreen from '../screens/Logout';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const navigationOptions = {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: 'rgba(200,38,74,1)',
        },
        headerTitleStyle:{
            textAlign:'center',
            alignSelf:'center',
            fontSize:20,
            color:'#fff',
            fontWeight:'bold',
            flex:1
        }
    }
}

const mapsScreenStack = createStackNavigator(
    {
        MapsScreen:{
            screen: MapsScreen,
            navigationOptions: ({navigation})=>({
                title:'Mapa',
                headerLeft:(
                    <Icon name="bars"
                            style={{marginLeft:20}}
                            size={20}
                            color="black"
                            onPress={()=>{navigation.openDrawer()}}/>
                ),
                headerRight:(
                    <Icon name="home"
                            style={{marginRight:20}}
                            size={20}
                            color="black"
                            onPress={()=>{}}/>
                )
            })
        },
    },
    navigationOptions
);
const restaurantsScreenStack = createStackNavigator(
    {
        
        RestaurantsScreen:{
            screen: RestaurantsScreen,
            navigationOptions: ({navigation})=>({
                title:'Restaurantes',
                headerLeft:(
                    <Icon name="bars"
                            style={{marginLeft:20}}
                            size={20}
                            color="black"
                            onPress={()=>{navigation.openDrawer()}}/>
                ),
                headerRight:(
                    <Icon name="home"
                            style={{marginRight:20}}
                            size={20}
                            color="black"
                            onPress={()=>{}}/>
                )
            })
        },
        AddRestaurant:{
            screen: AddRestaurantScreen,
            navigationOptions:({navigation})=>({
                title:'Añadir Restaurant',
                headerRight:(
                    <Icon name="home"
                            style={{marginRight:20}}
                            size={20}
                            color="black"
                            onPress={()=>navigation.navigate("RestaurantsScreen")}>
                    </Icon>
                ),
                headerLeft:(
                    <Icon name="bars"
                            style={{marginLeft:20}}
                            size={20}
                            color="black"
                            onPress={()=>navigation.openDrawer()}>
                    </Icon>
                )
            })
        },
        DetailRestaurant:{
            screen: DetailRestaurantScreen,
            navigationOptions:({navigation})=>({
                title:'Detalle de Restaurante',
                headerRight:(
                    <Icon name="home"
                            style={{marginRight:20}}
                            size={20}
                            color="black"
                            onPress={()=>navigation.navigate("RestaurantsScreen")}>
                    </Icon>
                ),
                headerLeft:(
                    <Icon name="bars"
                            style={{marginLeft:20}}
                            size={20}
                            color="black"
                            onPress={()=>navigation.openDrawer()}>
                    </Icon>
                )
            })
        }
    },
    navigationOptions
);


const logoutScreenStack = createStackNavigator(
    {
        LogoutScreen:{
            screen: LogoutScreen,
            navigationOptions: ({navigation})=>({
                title:'Cerrar Sesión',
            })
        }
    },
    navigationOptions
);

const miNavegacionPrincipal = createDrawerNavigator(
    {
        RestScreen: {
            screen: restaurantsScreenStack,
            navigationOptions:({navigation})=>(
                {
                    drawerLabel: "Restaurantes",
                    drawerIcon: ({tintColor})=>(<Icon name="home" 
                                                        size={24}
                                                        style={{color:tintColor}}>
                                                </Icon>)
                }
            )
        },

        LogoutScreen: {
            screen: logoutScreenStack,
            navigationOptions:({navigation})=>(
                {
                    drawerLabel: "Cerrar Sesión",
                    drawerIcon: ({tintColor})=>(<Icon name="sign-out" 
                                                        size={24}
                                                        style={{color:tintColor}}>
                                                </Icon>)
                }
            )
        },

        MapsScreen:{
            screen: mapsScreenStack,
            navigationOptions:({navigation})=>(
                {
                    drawerLabel: "Abrir Mapa",
                    drawerIcon: ({tintColor})=>(<Icon name="sign-out" 
                                                        size={24}
                                                        style={{color:tintColor}}>
                                                </Icon>)
                }
            )
        }
        
    },
    {
        drawerBackgroundColor: 'rgba(128,35,60,0.7)',
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle:{
                marginVertical: 0
            }
        },
        defaultNavigationOptions: navigationOptions
    }
);

export default createAppContainer(miNavegacionPrincipal);