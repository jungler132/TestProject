import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { View , Text, TouchableOpacity, ScrollView } from 'react-native';

const RootNavigation = () => {

    const [age , setAge] = useState(true)

    let array = ['name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name' ,'name']
    console.log('Вышел из цикла')
    if(age === false) {
        array = ['age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age' ,'age']
        console.log('Зашел в цикл')
    }

    function makeAge() {
        setAge(!age)
    }

    return (
    <NavigationContainer>
        <View style={{ backgroundColor : 'red' , flex: 1 ,alignItems:"center"}}>
            <TouchableOpacity onPress={makeAge} style={{backgroundColor:'blue' ,  height: '10%' , width:'60%', marginTop:20, justifyContent:"center", alignItems:'center'}}>
                <Text style={{fontSize:20 , color:'white'}}>
                    KNOPKA
                </Text>
            </TouchableOpacity>
            <ScrollView style={{backgroundColor:'green' , height:'50%' , width:'60%', marginTop:50 }}>
                {array.map((item , index)=> (
                    <TouchableOpacity key={index} style={{backgroundColor:'white' , flex:1 , justifyContent:"center" , alignItems:'center'}}>
                        <Text style={{fontSize:30}}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    </NavigationContainer>
    )
    
}
export default RootNavigation;