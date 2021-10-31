import app from "./app";

require("dotenv/config");

app.listen(process.env.PORT_SERVER, () => {
  console.log(`App rodando em ${process.env.PORT_SERVER}`);
});
