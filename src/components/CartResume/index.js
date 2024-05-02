import React , {useState,useEffect} from "react";

import { Container , Button} from "./styles";
 import formatCurrency from "../../utils/formatCurrency";

 import { useCart } from "../../hooks/CardContext";
 import api from "../../services/api"
import {toast} from "react-toastify"

export function CartResume(){
    const [finalPrice , setFinalPrice] = useState(0)
    const [deliveryTax ] = useState(5)


    const { cardProducts } = useCart();
    useEffect(() =>{
    
        const sumProducts = cardProducts.reduce((acc,current) => {
            return current.price * current.quantity + acc
        },0)
        setFinalPrice(sumProducts)

    },[cardProducts,deliveryTax])




    const submitOrder = async()  => {
        const order = cardProducts.map(product =>{
            return {id: product.id , quantity : product.quantity}
        });
    
        try {
            await toast.promise(api.post ("orders" , {products:order}),{
                pending:"Realizando pedido.",
                success:"Pedido realizado com sucesso!",
                error:"Falha ao realizar o pedido,tente novamente."
            });
        } catch (error) {
            console.error(error);
        }
    }


   return (
    <div>
    <Container>
        <div className="container-top">
            <h2 className="title">Resumo do pedido.</h2>
            <p className="itens">Itens</p>
            <p className="itens-price">{formatCurrency(finalPrice)}</p>
            <p className="tax">Taxa de entrega</p>
            <p className="tax-price">{formatCurrency(deliveryTax)}</p>

        </div>
        <div className="container-bottom">
            <p>Total</p>
            <p>{formatCurrency(finalPrice + deliveryTax)}</p>

        </div>
        
    </Container>
    
        <Button onClick={submitOrder}>Finalizar Pedido.</Button>
        </div>
        
   )
}


