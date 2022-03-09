const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const foodRoute = require("./routes/restArea");
const axios = require("axios");
const convert = require("xml-js");
// var request = require("request");

app.use(
  cookieSession({
    name: "session",
    keys: ["james"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

var url =
  "http://apis.data.go.kr/1390802/AgriFood/FdFoodCkryImage/getKoreanFoodFdFoodCkryImageList";
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=gzI47CTQ3vt%2B145PSiKW%2BA9Wdvqizk%2BD3smEH41il9SHfA6FYm6ZCNWR%2FeDsCkibL9dDT%2B3Tc59d%2Fae4FuuPfg%3D%3D"; /* Service Key*/
queryParams +=
  "&" +
  encodeURIComponent("service_Type") +
  "=" +
  encodeURIComponent("xml"); /* */
queryParams +=
  "&" + encodeURIComponent("Page_No") + "=" + encodeURIComponent("1"); /* */
queryParams +=
  "&" + encodeURIComponent("Page_Size") + "=" + encodeURIComponent("20"); /* */
queryParams +=
  "&" + encodeURIComponent("food_Name") + "=" + encodeURIComponent("밥"); /* */
queryParams +=
  "&" +
  encodeURIComponent("ckry_Name") +
  "=" +
  encodeURIComponent("조리"); /* */

const currentPut = async () => {
  let response;
  try {
    response = await axios.get(url + queryParams);
  } catch (e) {
    console.log("~~~~", e);
  }
  return response;
};

app.use("/auth", authRoute);
app.use("/api", foodRoute);

app.listen("5000", () => {
  console.log("server is running!!");
});
