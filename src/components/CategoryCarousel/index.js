import React, { useEffect, useState } from "react";
import Category from "../../assets/categorias.png"
import { Container, CategoryImg, Button, ContainerItems, Image } from "./styles";
import api from "../../services/api"
import Carousel from "react-elastic-carousel"






export function CategoryCarousel() {
    const [categories, setCategories] = useState([])
    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get("categories")



            setCategories(data)
        }
        loadCategories()

    }, [])




    return (
        <Container>
            <CategoryImg src={Category} alt="logo-categoria" />

            <Carousel itemsToShow={4} style={{ width: "90%" }}>

                {
                    categories && categories.map(category => (

                        <ContainerItems key={category.id}>
                            <Image style={{
                            }} src={category.url} alt="foto-categoria"></Image>
                            <Button to={{pathname:"/produtos",
                                                    state:{categoryId:category.id}}}>{category.name}</Button>
                        </ContainerItems>

                    ))
                }

            </Carousel>


        </Container>
    )
}


