import { useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, []),
  );

  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />

      <ScrollView
        style={styles.techerList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
