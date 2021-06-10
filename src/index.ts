import { createServer } from "./server";
require("@babel/register")({
  extensions: [".es6", ".es", ".jsx", ".js", ".mjs", ".tsx"],
});
const init = async () => {
  try {
    const server = await createServer();
    await server.start();
    console.log("Server running at:", server.info.uri);
  } catch (err) {
    console.error("Error starting server: ", err.message);
    throw err;
  }
};

init();
