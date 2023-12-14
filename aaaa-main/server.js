const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 8000;
const db = require("./db/db");

const server = http.createServer(app);


const start = () => {
  try {
try{
  db.authenticate();
  console.log("Database connected...");
  db.sync();
}catch(error){
  console.log(err)
}
    server.listen(PORT, () => {
      console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`⚠️ [ERROR], ${error}`);
  }
};

start();
