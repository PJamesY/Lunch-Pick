const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

const REST_AREA_LIST_URL =
  "http://data.ex.co.kr/openapi/restinfo/hiwaySvarInfoList";

const BEST_FOOD_API_URL =
  "http://data.ex.co.kr/openapi/restinfo/restBestfoodList";

const getRestAreaList = async () => {
  try {
    response = await axios.get(
      `${REST_AREA_LIST_URL}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_LIST_API_KEY
      }&${encodeURIComponent("type")}=json`
    );
    return response.data;
  } catch (e) {
    // error
  }
};

const getAreaRestFood = async () => {
  try {
    response = await axios.get(
      `${BEST_FOOD_API_URL}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_RECOMMEND_FOOD_KEY
      }&${encodeURIComponent("type")}=json&${encodeURIComponent(
        "numOfRows"
      )}=20&${encodeURIComponent("stdRestCd")}=000001`
    );
    return response;
  } catch (e) {
    // error
  }
};

router.get("/food", (req, res) => {
  //   console.log("req");
  getAreaRestFood().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("rer", response);
    res.send({ error: false, data: response.data });
  });
});

router.get("/restAreaList", (req, res) => {
  getRestAreaList().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("asdfasdfasdfsdfas", response.list);
    res.send({ data: response.list });
  });
});

module.exports = router;
