
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import getImageFromApi from '../Request/poster.api'
import { TouchableOpacity } from 'react-native-gesture-handler';

class FilmItem extends React.Component {

  constructor(props) {
    super(props);
}
render() {
  const { film } = this.props;
  
  return (
       <View>
         <Image
        style={styles.image}
        source={{uri: getImageFromApi(film.poster_path)}}
      />
        <View style={styles.header_container}>
          <Text style={styles.title_text}>{film.title} </Text>
          <Text style={styles.vote_text}>{film.vote_average}</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
        </View>
        <View style={styles.date_container}>
          <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
        </View>
     </View>
  )
}
}
const styles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 150,
    margin: 5,
  },
  content_container: {
    margin: 5,
  },
  header_container: {
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FilmItem;