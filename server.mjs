import {app} from "./app.mjs";
import "dotenv/config";

const PORT = process.env.PORT

app.listen(PORT, function(){console.log(`server is listening on ${PORT}`)})