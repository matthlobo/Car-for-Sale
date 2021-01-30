const customExpress = require('./Config/customExpress');
const app = customExpress();

app.listen(3000, () => {
    console.log("Servidor online na porta 3000!");
});