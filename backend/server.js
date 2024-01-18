const express = require("express");
const cors = require("cors");
const eventsRouter = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/events", eventsRouter);

module.exports = app;

if (require.main === module) {
  const PORT = 3002;
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  module.exports.server = server;
}
