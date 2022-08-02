import fetch from "node-fetch";
import axios from "axios";
import express from "express";
import { load } from "cheerio";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  await axios("https://api.remitano.com/api/v1/rates/ads")
    .then((response) => {
      //   setTimeout(() => {
      //     const body = response.data;
      //     let $ = load(body);
      //     let footer = $("#tour-offer-price > p");
      //     console.log(footer.length);
      //   }, 10000);
      const rate = response.data;

      res.status(200).json({
        data: rate,
      });
    })
    .catch((error) => {
      console.log(`my error is ${error}`);
    });
});
app.listen(8000, () => {
  console.log("app is connected");
});
