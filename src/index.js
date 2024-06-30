import { connectToDb } from "./utils/db.js";
import app from "./app.js";

async function main(){
    await connectToDb();
    //! mandar el puerto de configuracion
    app.listen(8080);
    //!
    console.log('Server on port: ', 8080);
}

main();