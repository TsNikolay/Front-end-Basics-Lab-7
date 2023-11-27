import React from "react";
import appleImg from "../../images/apple.jpg";
import bananaImg from "../../images/banana.jpg";
import cabbageImg from "../../images/cabbage.jpg";
import carrotImg from "../../images/carrot.jpg";
import peachImg from "../../images/peach.jpg";
import pearImg from "../../images/pear.jpg";
import GoodsItem from "./GoodsItem";
import Card from "../UI/Card";
import styles from "./GoodsList.module.css";

const GoodsList = () => {
  const goodsList = [
    {
      id: 1,
      imgSrc: appleImg,
      title: "Яблуко",
      price: 15,
    },
    {
      id: 2,
      imgSrc: bananaImg,
      title: "Банан",
      price: 17,
    },
    {
      id: 3,
      imgSrc: cabbageImg,
      title: "Капуста",
      price: 12,
    },
    {
      id: 4,
      imgSrc: carrotImg,
      title: "Морква",
      price: 15,
    },
    {
      id: 5,
      imgSrc: peachImg,
      title: "Персик",
      price: 25,
    },
    {
      id: 6,
      imgSrc: pearImg,
      title: "Груша",
      price: 20,
    },
  ];
  return (
    <div className={styles.list}>
      {goodsList.map((item) => (
        <Card key={item.id}>
          <GoodsItem
            key={item.id}
            title={item.title}
            price={item.price}
            imgSrc={item.imgSrc}
          />
        </Card>
      ))}
    </div>
  );
};

export default GoodsList;
