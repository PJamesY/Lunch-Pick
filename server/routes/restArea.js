const router = require("express").Router();
const axios = require("axios");
const { response } = require("express");
require("dotenv").config();

const REST_AREA_LIST_URL =
  "http://data.ex.co.kr/openapi/restinfo/hiwaySvarInfoList";

const BEST_FOOD_API_URL =
  "http://data.ex.co.kr/openapi/restinfo/restBestfoodList";

const REST_AREA_LIST_LOC =
  "http://data.ex.co.kr/openapi/locationinfo/locationinfoRest";

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

const getRestAreaLoc = async () => {
  try {
    let arr = [];
    const response = await axios.get(
      `${REST_AREA_LIST_LOC}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_RECOMMEND_FOOD_KEY
      }&${encodeURIComponent("type")}=json&${encodeURIComponent(
        "numOfRows"
      )}=100&${encodeURIComponent("pageNo")}=1`
    );
    const response2 = await axios.get(
      `${REST_AREA_LIST_LOC}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_RECOMMEND_FOOD_KEY
      }&${encodeURIComponent("type")}=json&${encodeURIComponent(
        "numOfRows"
      )}=100&${encodeURIComponent("pageNo")}=2`
    );
    const response3 = await axios.get(
      `${REST_AREA_LIST_LOC}?${encodeURIComponent("key")}=${
        process.env.REST_AREA_RECOMMEND_FOOD_KEY
      }&${encodeURIComponent("type")}=json&${encodeURIComponent(
        "numOfRows"
      )}=100&${encodeURIComponent("pageNo")}=3`
    );
    arr = [
      ...response.data.list,
      ...response2.data.list,
      ...response3.data.list,
    ];
    console.log(arr.length);
    return arr;
    // arr = [...arr, ...response.data.list];
    // // for (let i = 1; i < 4; i++) {

    // // }
    // console.log("arr", arr);
    // return arr;
    // response = await axios.get(
    //   `${REST_AREA_LIST_LOC}?${encodeURIComponent("key")}=${
    //     process.env.REST_AREA_RECOMMEND_FOOD_KEY
    //   }&${encodeURIComponent("type")}=json&${encodeURIComponent(
    //     "numOfRows"
    //   )}=100&${encodeURIComponent("pageNo")}=1`
    // );
    // return response;
  } catch (e) {}
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
    console.log(response.list);
    res.send({ data: response.list });
  });
});

router.get("/restArea", (req, res) => {
  getRestArea(req.query.id).then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({ data: response.data.list[0] });
  });
});

router.get("/restAreaLoc", (req, res) => {
  getRestAreaLoc().then((response) => {
    // console.log(response.data.list);
    res.send({ data: response });
  });
});

module.exports = router;
