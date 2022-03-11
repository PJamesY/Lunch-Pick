import axios from 'axios';

async function getRestAreaList() {
  const data = await axios.get('http://localhost:5000/api/restAreaList');

  const filteredData = data.data.data.map((elem) => ({
    routeCd: elem.routeCd,
    routeNm: elem.routeNm,
    svarNm: elem.svarNm,
    svarCd: elem.svarCd,
  }));

  return filteredData;
  // let responsee;
  // fetch('http://localhost:5000/api/restAreaList', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((res) => {
  //     // console.log('sd', res);
  //     responsee = res.json();
  //     // return res.json();
  //     //   return res;
  //     // if (res.status === 200) return res.json();
  //     // throw new Error('rest area list error');
  //   })
  //   .catch((err) => {
  //     console.log('asdfadsfasdf');
  //     console.dir(err);
  //   });

  // return responsee;
}

export default getRestAreaList;
