import React, { useEffect, useState } from "react";
import ReactSelect from "react-select"
import { Container, Button, Label, Input, LabelUpload } from "./styles";
import api from "../../../services/api"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from "yup"
import { useForm, Controller } from "react-hook-form";
import {useHistory} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { ErrorMessage } from "../../../components/ErrorMessage"
import {toast} from "react-toastify"

function NewProduct() {

  const [fileName, setFileName] = useState(null)

  const [categories, setCategories] = useState([])

const {push} = useHistory()


  const schema = Yup.object().shape({

    name: Yup.string().required("Digite o nome do produto."),
    price: Yup.string().required("Digite o preço do produto."),
    category: Yup.object().required("Escolha a categoria do produto."),
    file: Yup.mixed().test("required", "Carregue uma imagem.", value => {
      return value?.length > 0
    })
    .test("type", "Carregue apenas arquivos PNG ou JPEG.", value => {
      return (
        (value[0]?.type === "image/jpeg") ||
        (value[0]?.type === "image/png")
      )
    })



  })




  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)

  })


  const onSubmit = async data => {
      const productDataFormData = new FormData()


      productDataFormData.append("name", data.name)
      productDataFormData.append("price", data.price)
      productDataFormData.append("category_id", data.category.id)
      productDataFormData.append("file", data.file[0])



      await toast.promise ( api.post("products", productDataFormData) , {
        pending:"Adicionando novo produto! ",
        success:"Produto adicionado com sucesso!",
        error:"Falha ao adicionar o produto."
      })

        setTimeout(() => {
          push("/listar-produtos")
        }, 2000);
      


  }


  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories")

      setCategories(data)
    }
    loadCategories()
  }, [])






  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}  >
        <div>
        <Label>Nome</Label>
        <Input type="text"  {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

          <div>
        <Label>Preço</Label>
        <Input type="number"  {...register("price")} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>


        <div>
        <LabelUpload>

          {fileName || (
            <>
              <CloudUploadIcon />
              Selecione a imagem.

            </>


          )
          }

          <input type="file" accept="image/png , image/jpeg" {...register("file")} onChange={value => { setFileName(value.target.files[0]?.name) }} />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>


        <div>
        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (


              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias."



              />
            )
          }}

        >

        </Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <Button>Adicionar Produto</Button>
      </form>
    </Container>
  );
}


export default NewProduct