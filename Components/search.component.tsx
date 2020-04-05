import React from 'react';
import {FlatList, StyleSheet,View, Text, Button, ActivityIndicator, TextInput } from 'react-native';
import {getFilms} from '../Request/film-api';
import FilmItem from './filmItem.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
class Search extends React.Component {
searchText;
state;
detailFilm
    constructor(props) {
        super(props);
        this.state = {
            film: [],
        };
        this.searchText = '';
    }


      _getFilms (search) {
        if(search.length > 1) {
          getFilms(search).then((res) => {
                this.setState(
                    {
                        film: res.results,
                    }
                    ); 
            }); 
          }
    }
    
     _setSearch (search) {
        this.searchText = search;
     } 
     _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }
   
    render() {

        return (
            <View style={styles.view}>
                <TextInput style={styles.textinput} onChangeText={(text) => this._setSearch(text)} placeholder="Nom du film"></TextInput>
                <Button  title="Rechercher" onPress={() => {this._getFilms(this.searchText)}}></Button>
                
                <FlatList
                 
                  data={this.state.film}
                  keyExtractor = { (item) => item.id.toString()} 
                  renderItem={({item}) =>
                   <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Detail",{filmId: item.id}) }>
                     <FilmItem film={item} />
                     </TouchableOpacity> }
                     /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view : {
       marginTop:50,
       alignItems:'center', 
       flex:1,
    },
    textinput: {
        width:200,
        marginBottom:30,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default Search;