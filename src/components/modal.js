import React, { Component, useState } from "react";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground, } from "styled-react-modal";
import { Fab } from "already-styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import "./modal.css";
import { Form, Input, Title, Text, Button, ButtonClose, Label } from "../styled/form-style";

const StyledModal = Modal.styled`
  width: 500px;
  height: 80%;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  overflow: auto;
  border-radius: 5px;
`;

export default class modal extends Component {

    constructor(props) {
        super(props)
        this.state = {};
      }

FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  }

  return (
    <div>
      <Fab
        bc="#71cbf9"
        w="50px"
        fs="22px"
        pulse
        aria-label="do more stuff"
        onClick={toggleModal}
        >
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <div>
        <ButtonClose onClick={toggleModal} className="ButtonClose">X</ButtonClose>
        <Title>Cadastro de Produtos</Title>
        <Formik
          initialValues={{ codinterno: "", nome: "", descricao: "", medida: "", peso: "", codbarras: "", categoria: "", valor: "", dtaquisicao: "", imgprod: "" }}
          validate={values => {
            let errors = {};
            if (!values.codinterno) {
              errors.codinterno = "Informe o Cod. Interno.";
            }

            if (!values.nome) {
              errors.nome = "Informe o Nome.";
            }

            if (!values.codbarras) {
              errors.codbarras = "Informe o Cod. Barras";
            }

            if (!values.categoria) {
              errors.categoria = "Informe a Categoria.";
            }

            if (!values.valor) {
              errors.valor = "Informe o Valor.";
            }

            if (!values.dtaquisicao) {
              errors.dtaquisicao = "Informe a Data de Aquisição.";
            }

            return errors;
          }}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert('Cadastro Efetuado com Sucesso!');
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit} className="Form">
              <Label>
                Cod. Interno *
                {touched.codinterno &&
                  errors.codinterno && <Text color="red">{errors.codinterno}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.codinterno}
                  border={touched.codinterno && errors.codinterno && "1px solid red"}
                  type="number"
                  name="codinterno"
                  placeholder="Cod. Interno"
                />
              </Label>
              <Label>
                Nome *
                {touched.nome &&
                  errors.nome && <Text color="red">{errors.nome}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nome}
                  border={touched.nome && errors.nome && "1px solid red"}
                  type="text"
                  name="nome"
                  placeholder="Nome"
                />
              </Label>
              <Label>
                Descricao
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descricao}
                  type="text"
                  name="descricao"
                  placeholder="Descricao"
                />
              </Label>
              <Label>
                Medida
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.medida}
                  type="text"
                  name="medida"
                  placeholder="Medida"
                />
              </Label>
              <Label>
                Peso
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.peso}
                  type="number"
                  name="peso"
                  placeholder="Peso"
                />
              </Label>
              <Label>
                Cod. Barras *
                {touched.codbarras &&
                  errors.codbarras && <Text color="red">{errors.codbarras}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.codbarras}
                  border={touched.codinterno && errors.codbarras && "1px solid red"}
                  type="number"
                  name="codbarras"
                  placeholder="Cod. Barras"
                />
              </Label>
              <Label>
                Categoria *
                {touched.categoria &&
                  errors.categoria && <Text color="red">{errors.categoria}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.categoria}
                  border={touched.categoria && errors.categoria && "1px solid red"}
                  type="text"
                  name="categoria"
                  placeholder="Categoria"
                />
              </Label>
              <Label>
                Valor *
                {touched.valor &&
                  errors.valor && <Text color="red">{errors.valor}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.valor}
                  border={touched.valor && errors.valor && "1px solid red"}
                  type="number"
                  name="valor"
                  placeholder="Valor"
                />
              </Label>  
              <Label>
                Data Aquisição *
                {touched.dtaquisicao &&
                  errors.dtaquisicao && <Text color="red">{errors.dtaquisicao}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dtaquisicao}
                  border={touched.dtaquisicao && errors.dtaquisicao && "1px solid red"}
                  type="date"
                  name="dtaquisicao"
                  placeholder="Data Aquisição"
                />
              </Label> 
              <Label>
                Imagem Produto
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.imgprod}
                  type="text"
                  name="imgprod"
                  placeholder="Imagem Produto"
                />
              </Label>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        />
      </div>
      </StyledModal>
    </div>
  );
}

 FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

    render () {
        return (
            <ModalProvider backgroundComponent={this.FadingBackground}>
            <div className="ModalComp">
                <this.FancyModalButton />
            </div>
            </ModalProvider>
          );    
    }
}
