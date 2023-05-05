import { Container, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchCategories, fetchCategoryImage } from "../tools/fetchdata";

export const Categories = (props) => {

  const [categories, updateCategories] = useState([]);
  const [categoryImages, updateCategoryImages] = useState([]);

  useEffect(() => {
    const getCategories = (categories) => {
      updateCategories(categories.genres);
    };

    const fetchCategoriesData = async () => {
      await fetchCategories(getCategories);
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchCategoryImages = async () => {
      const imagePromises = categories.map((category) =>
        fetchCategoryImage(category.id)
      );
      const imageUrls = await Promise.all(imagePromises);
      const updatedCategoryImages = categories.map((category, index) => ({
        ...category,
        imageUrl: imageUrls[index],
      }));
      updateCategoryImages(updatedCategoryImages);
    };

    fetchCategoryImages();
  }, [categories]);

  useEffect(() => {
    props.updatePage("category");
  }, [props]);

  return (
    <List sx={{ display: "flex", flexDirection: "column" }}>
      {categoryImages &&
        categoryImages.map((category) => (
          <div
            key={category.id}
            style={{
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 100,
              width: "99.8%",
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#fff',
              textShadow: '2px 2px 4px #000',
              border: '2px solid #000',
              borderRadius: '10px'
            }}
          >
            <ListItem>
              <ListItemText primary={category.name} />
            </ListItem>
          </div>
        ))}
    </List>
  );
};