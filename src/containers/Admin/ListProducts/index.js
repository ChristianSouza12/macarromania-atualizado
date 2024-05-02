import React ,{useEffect, useState}from "react";
import api from "../../../services/api"
import { Container , Image , EditIconStyled} from "./styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from "react-router-dom";
import paths from "../../../constants/paths";
import formatCurrency from "../../../utils/formatCurrency"

function ListProducts() {
        

        const [products, setProducts] = useState()
        const {push} = useHistory()
    
        useEffect ( () =>{
            
        async function loadOrders(){
            const {data} = await api.get("products")

            setProducts(data)
        }
        loadOrders()
    },[])


        function isOffer (offerStatus) {
            if(offerStatus){
               return <CheckIcon  style={{color:"green"}}    />
            }
                return <CloseIcon style={{color:"red"}}/>
            
        }


          function editProduct(product){
            push(paths.EditProduct,{product})

          }

     

    return (
        <Container>
           <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}  size= "small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Nome</TableCell>
            <TableCell >Preço</TableCell>
            <TableCell  align="center" >Produto em Ofertas</TableCell>
            <TableCell   align="center" >Foto do Produto</TableCell>
            <TableCell >Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products  && products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell >{formatCurrency(product.price)}</TableCell>
              <TableCell align="center" >{ isOffer(product.offer)}</TableCell>
              <TableCell >
                 <Image src={product.url} alt="Imagem-produto" />
                 </TableCell>
              <TableCell>
                <EditIconStyled   onClick={() => editProduct(product) }  />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    );
}


export default ListProducts