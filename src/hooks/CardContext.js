import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CardContext = createContext({});

export const CardProvider = ({ children }) => {
    const [cardProducts, setCardProducts] = useState([]);


    const updateLocalStorage = async (products) =>{
        await localStorage.setItem("macarromania:cartInfo", JSON.stringify(products));

    }

    const putProductsInCart = async product => {
        try {
            const updatedProducts = [...cardProducts];
            const cartIndex = updatedProducts.findIndex(prd => prd.id === product.id);

            if (cartIndex >= 0) {
                updatedProducts[cartIndex].quantity += 1;
            } else {
                product.quantity = 1;
                updatedProducts.push(product);
            }

            setCardProducts(updatedProducts);
            await updateLocalStorage (updatedProducts);
            
        } catch (error) {
            console.error("Erro ao adicionar produto ao carrinho:", error);
        }
           
    };



        const deleteProducts = async productId => {
            const newCart = cardProducts.filter(product => product.id !== productId)

            setCardProducts(newCart)

            await updateLocalStorage(newCart);
        }




        const insertNewItem = async productId =>{
                const newCart = cardProducts.map( product => {
                    return product.id === productId ? {...product,quantity : product.quantity+1} : product
                })

                setCardProducts(newCart)
                await updateLocalStorage(newCart);
        }








        const decreaseProducts = async productId =>{


            const cartIndex = cardProducts.findIndex(pd => pd.id === productId)

            if(cardProducts[cartIndex].quantity > 1 ){
                const newCart = cardProducts.map( product => {
                    return product.id === productId ? {...product,quantity : product.quantity-1} : product
                })
    
                setCardProducts(newCart)
                await localStorage.setItem("macarromania:cartInfo", JSON.stringify(newCart));
                

            }else{
                deleteProducts(productId)
            }

    
    }





    useEffect(() => {
        const loadUserData = async () => {
            try {
                const clientCartData = await localStorage.getItem("macarromania:cartInfo");
                if (clientCartData) {
                    setCardProducts(JSON.parse(clientCartData));
                }
            } catch (error) {
                console.error("Erro ao carregar dados do carrinho:", error);
            }
        };

        loadUserData();
    }, []);

    return (
        <CardContext.Provider value={{ putProductsInCart, cardProducts , insertNewItem , decreaseProducts}}>
            {children}
        </CardContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error("useCart must be used within a CardProvider");
    }
    return context;
};

CardProvider.propTypes = {
    children: PropTypes.node
};
