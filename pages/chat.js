import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";

export default function ChatPage() {
  // ./Sua lógica vai aqui
  // Usar onChange para atualizar o valor do campo do texto
  // Caso esse valor seja "enter" vamos limpar esse campo.
  // pegar todo o valor e passar pra lista de mensagens - também setando os estados

  // Sua lógica vai aqui

  
  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      from: "eduardoBazler",
      texto: novaMensagem,
      id: listChat.length + 1,
    };
    setListChat([mensagem, ...listChat]);
    setMensagem("");
  }
  
  function handleItem(id) {
    const idNumber = parseInt(id);
    const listAtualizada = listChat.filter((mensagem) => mensagem.id !== idNumber);
    setListChat(listAtualizada);
  }

  const [mensagem, setMensagem] = React.useState("");
  const [listChat, setListChat] = React.useState([]);

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
            alignContent: "center",
            justifyContent: "flex-end",
          }}
        >
          {<MessageList mensagens={listChat} removeItem={handleItem} />}

          {/* listChat.map((mensagem) => <li key={mensagem.id}>
                        {mensagem.from}  --  {mensagem.texto}
                        <br />
                        <br />
                        </li>) */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter" && mensagem !== '') {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                } 
                
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              variant="primary"
              colorVariant="neutral"
              label="Enviar"
              onClick={(event) => {
                  if(mensagem !== ''){
                    handleNovaMensagem(mensagem);
                  }
                
              }}
            ></Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
        overflow: "hide",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                  marginBottom: "8px",
                }}
                style={{display: 'flex'}}
                >
              <Image
                styleSheet={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                }}
                src={`https://github.com/eduardobazler.png`}
              />
              <Text tag="strong"></Text>
              {mensagem.from}
              <Text
                styleSheet={{
                  fontSize: "10px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}
              </Text>
              <Button label="X" id={mensagem.id} style={{ backgroundColor: '', maxHeight: '20px', marginLeft: '30px'}}
              onClick={(event) => {
                  const idRemove = event.target.id

                  props.removeItem(idRemove);

              }}></Button>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
