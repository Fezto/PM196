import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Image, ActivityIndicator,
  StyleSheet, SafeAreaView, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const API_KEY = 'APIKEYELIMINADAPORSEGURIDAD';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const App = () => {

  // * States
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchType, setSearchType] = useState('approximate');

  // Ejecuta la búsqueda automáticamente al escribir o cambiar el tipo
  useEffect(() => {
    if (searchQuery.trim()) {
      searchMovies();
    } else {
      setMovies([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchType]);

  const searchMovies = async () => {
    // * Alertas eliminadas para búsqueda dinámica
    if (!searchQuery.trim()) {
      setMovies([]);
      return;
    }
    setLoading(true);

    // * Llamada a la API
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}&language=es-ES`;
    console.log('🔍 Fetching URL:', url);

    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();
      console.log('✔️ Data.results:', data.results);

      let filtered = data.results || [];
      if (searchType === 'exact') {
        filtered = filtered.filter(m =>
            m.title.toLowerCase() === searchQuery.toLowerCase() ||
            m.original_title.toLowerCase() === searchQuery.toLowerCase()
        );
        console.log('🎯 Exact filter applied, count:', filtered.length);
      }

      // Espera 2 segundos antes de actualizar el estado
      setTimeout(() => {
        setMovies(filtered);
        setLoading(false);
      }, 2000);
    } catch (err) {
      console.error('❌ Fetch error:', err);
      Alert.alert('Error', 'No se pudieron cargar las películas');
      setLoading(false);
    }
  };

  const renderMovie = ({ item }) => (
      <View style={styles.movieCard}>
        <Image
            source={{
              uri: item.poster_path
                  ? `${IMAGE_BASE_URL}${item.poster_path}`
                  : 'https://via.placeholder.com/150x225/cccccc/ffffff?text=Sin+Imagen'
            }}
            style={styles.movieImage}
            resizeMode="cover"
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle} numberOfLines={2}>
            <Icon name="movie-open-outline" size={20} color="#e50914" />{' '}
            {item.title}
          </Text>
          <Text style={styles.movieYear}>
            <Icon name="calendar" size={16} color="#ccc" />{' '}
            {item.release_date ? new Date(item.release_date).getFullYear() : 'N/A'}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={18} color="#FFD700" style={{ marginRight: 5 }} />
            <Text style={styles.rating}>
              {item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
            </Text>
          </View>
        </View>
      </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        {/* Header con ícono */}
        <View style={styles.header}>
          <Text style={styles.title}>
            <Icon name="filmstrip" size={28} color="#e50914" /> BuscaPelículas
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.inputRow}>
            <Icon name="magnify" size={24} color="#ccc" style={{ marginRight: 10 }} />
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar película..."
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={setSearchQuery}
                // onSubmitEditing={searchMovies}
            />
          </View>
          <View style={styles.searchTypeContainer}>
            {['approximate','exact'].map(type => (
                <TouchableOpacity
                    key={type}
                    style={[
                      styles.searchTypeButton,
                      searchType === type && styles.activeSearchType
                    ]}
                    onPress={() => setSearchType(type)}
                >
                  <Icon
                    name={type === 'approximate' ? 'format-list-bulleted' : 'format-letter-matches'}
                    size={18}
                    color={searchType === type ? '#fff' : '#ccc'}
                    style={{ marginBottom: 2 }}
                  />
                  <Text style={[
                    styles.searchTypeText,
                    searchType === type && styles.activeSearchTypeText
                  ]}>
                    {type === 'approximate' ? 'Aproximada' : 'Exacta'}
                  </Text>
                </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={searchMovies}>
            <Icon name="magnify" size={20} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#e50914" />
              <Text style={styles.loadingText}>
                <Icon name="movie-search" size={18} color="#e50914" /> Buscando películas...
              </Text>
            </View>
        ) : (
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.moviesListContent}
                ListEmptyComponent={
                  searchQuery ? (
                      <View style={styles.emptyContainer}>
                        <Icon name="emoticon-sad-outline" size={36} color="#ccc" style={{ marginBottom: 10 }} />
                        <Text style={styles.emptyText}>
                          No se encontraron películas para "{searchQuery}"
                        </Text>
                      </View>
                  ) : null
                }
            />
        )}
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#141414',
  },
  header: {
    padding: 20,
    backgroundColor: '#1f1f1f',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e50914',
    textAlign: 'center',
    // El ícono ya está alineado por flexDirection en header
  },
  searchContainer: {
    padding: 20,
    backgroundColor: '#1f1f1f',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    padding: 15,
    fontSize: 16,
  },
  searchTypeContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
  searchTypeButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#333',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
  },
  activeSearchType: {
    backgroundColor: '#e50914',
  },
  searchTypeText: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '500',
  },
  activeSearchTypeText: {
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#e50914',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  moviesList: {
    flex: 1,
  },
  moviesListContent: {
    padding: 20,
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  movieTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieYear: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 5,
  },
  rating: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
  },
});
