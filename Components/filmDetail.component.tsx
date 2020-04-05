
import React from 'react';
import { View, Text } from 'react-native';

export class FilmDetail extends React.Component {

   render() {
       const {filmId} = this.props.route.params;
    return (
        <View>
            <Text>détails du film {filmId}</Text>
        </View>    
    )
}

}