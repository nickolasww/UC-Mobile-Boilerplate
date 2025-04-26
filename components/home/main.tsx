import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import CustomCard from "../card/homecard"; // Pastikan path file sesuai

const Main = () => {
  // Array data untuk card
  const cardData = [
    {
      id: "1",
      title: "Celebrate Diversity",
      imageUrl: "https://your-image-url.com/image1.jpg", 
      buttonText: "Start Exploring",
    },
    {
      id: "2",
      title: "Sustainable Fashion",
      imageUrl: "https://your-image-url.com/image2.jpg", 
      buttonText: "Shop Now",
    },
    {
      id: "3",
      title: "Cultural Heritage",
      imageUrl: "https://your-image-url.com/image3.jpg", 
      buttonText: "Discover More",
    },
  ];

  return (
    // card
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {cardData.map((item) => (
          <CustomCard
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </ScrollView>

      {/* text recommendation for you */}
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal:20,}}>
        <Text style={{fontWeight: 'bold', color:"#762727"}}>Recommendation For You</Text>
        <TouchableOpacity> 
            <Text style={{ fontWeight: 'bold', color:"#762727"}}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Recommendation card */}
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  scrollContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});

export default Main;
