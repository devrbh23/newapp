// import a libraries for make a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
     return ( 
     <View style={viewStyle}>
     <Text style={textStyle}>{props.headerText}</Text>
     </View>
     );
       };

       
const styles = {
    viewStyle: {
        backgroundColor: '#F8F866',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 15,
        position: 'relative'

    },
     textStyle: {
         fontSize: 25
     } 
};
   
//Make a component available to other part of the app
export default Header;
