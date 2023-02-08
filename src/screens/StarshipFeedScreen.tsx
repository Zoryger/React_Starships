import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Card } from "react-native-paper";
import { useImage } from "../hooks/useImage";
import ContentLoader from 'react-content-loader'

// import { default as data2 } from "../../api/data.json";
import { useStarships } from "../hooks/useStarships";

type Info = {
  name: string;
  model: string;
  crew: string
  hyperdrive_rating: string
  cost_in_credits: string
};

const Item2 = ({ name, model, crew, hyperdrive_rating, cost_in_credits }: Info) => {
  return (
    <Card style={styles.title}>
      <Card.Title title={name}/>
      <Card.Cover source={useImage(name)} />
      <Card.Content style={styles.item}>model = {model} crew = {crew} hyperdrive_rating = {hyperdrive_rating} cost_in_credits = {cost_in_credits}</Card.Content>
    </Card>
  );
};

export const StarshipFeedScreen = () => {
  const { data, status } = useStarships();
  const MyLoader = () => <ContentLoader />
  if (status === 'loading') {
    return <ContentLoader></ContentLoader>
  }

  if (status === 'error') {
    return <Text>Error!</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <Item2
            name={item.name}
            model={item.model}
            crew={item.crew}
            hyperdrive_rating={item.hyperdrive_rating}
            cost_in_credits={item.cost_in_credits}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    backgroundColor: '#FA6E2A',
    marginBottom: 15
  },
});
