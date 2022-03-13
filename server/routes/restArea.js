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

const getAreaRestFood = async (code) => {
  try {
    response = await axios.get(
      `${BEST_FOOD_API_URL}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_RECOMMEND_FOOD_KEY
      }&${encodeURIComponent("type")}=json&${encodeURIComponent(
        "stdRestCd"
      )}=${code}`
    );
    return response;
  } catch (e) {
    // error
  }
};

const getRestArea = async (code) => {
  try {
    response = await axios.get(
      `${REST_AREA_LIST_URL}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_RECOMMEND_FOOD_KEY
      }&${encodeURIComponent("type")}=json&svarCd=${code}`
    );
    return response;
  } catch (e) {
    // error
  }
};

router.get("/food", (req, res) => {
  console.log("req", req.query.id);
  getAreaRestFood(req.query.id).then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({ data: response.data.list });
  });
});

router.get("/restAreaList", (req, res) => {
  getRestAreaList().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({ data: response.list });
  });
});

router.get("/restArea", (req, res) => {
  getRestArea(req.query.id).then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({ data: response.data.list[0] });
  });
});

module.exports = router;
