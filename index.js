import express from "express";
import cors from "cors";
import { apiRouters } from "./routers/index.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(apiRouters);

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection at:", reason.stack || reason);
  // sebaiknya kirim ke sentry.io
});

app.listen(port, () => console.info(`app is running on port ${port}`));
