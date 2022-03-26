import React, { useEffect, useState } from 'react';
import KakaomapComponent from '../components/map/KakaomapComponent';
import axios from 'axios';

const Map: React.FC = () => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const [orderedList, setOrderedList] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      // 접속 위치 얻어오기
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude; // 경도
        const lat = position.coords.latitude; // 위도
        setLon(lon);
        setLat(lat);

        const coords = new (window as any).daum.maps.LatLng(lat, lon); // 지도의 중심좌표
        const options = {
          center: coords,
          level: 2,
        };
        const map = new (window as any).daum.maps.Map(kakaoMap.current, options);
        const marker = new (window as any).daum.maps.Marker({
          position: coords,
          map,
        });
        // 맵의 중앙으로 이동
        map.relayout();
        map.setCenter(coords);
        // 마커를 중앙으로 이동
        marker.setPosition(coords);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new (window as any).daum.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, (window as any).kakao.maps.ControlPosition.TOPRIGHT);
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new (window as any).daum.maps.ZoomControl();
        map.addControl(zoomControl, (window as any).daum.maps.ControlPosition.RIGHT);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      // var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
      //   message = "geolocation을 사용할수 없어요..";
      // displayMarker(locPosition, message);
    }
  }, []);

  useEffect(() => {
    async function getLoc() {
      const result = await axios.get('http://localhost:5000/api/restAreaLoc');

      console.log('james', result.data.data);

      const dd = result.data.data.map((area) => ({
        ...area,
        dist: (lon - area.xValue) ** 2 + (lat - area.yValue) ** 2,
      }));
      const sorted = dd.sort(function (a, b) {
        return a.dist - b.dist;
      });
      console.log('dd', sorted);
    }
    if (lon && lat) {
      getLoc();
      console.log('lon', lon, lat);
      // if ()
    }
  }, [lon, lat]);

  return (
    <>
      <KakaomapComponent ref={kakaoMap} />
      <button>리스트</button>

      <style jsx>
        {`
          button {
            background-color: red;
            border: 1px solid orange;
            border-radius: 10px;
            position: absolute;
            color: white;
            bottom: 20px;
            z-index: 2;
            left: 50%;
            transform: translate(-50%);
            padding: 3px;
          }
        `}
      </style>
    </>
  );
};

export default Map;
