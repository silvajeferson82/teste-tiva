import app from './app'

require('dotenv/config');

app.listen(process.env.PORT, () => {
    console.log(`Projeto ${process.env.PROJECT_NAME} rodando em ${process.env.PORT}`)
});

