import React, { useState, useEffect } from 'react';
import KakaomapComponent from '../components/map/KakaomapComponent';

export interface aroundRestAreaProps {}
// const { daum } = window;

const aroundRestArea: React.FC<aroundRestAreaProps> = ({ children }) => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  const [map, setMap] = useState(null);
  const displayCircle = (map, center, radius) => {
    console.log(map);
    const circle = new (window as any).daum.maps.Circle({ center: center, radius });
    circle.setMap(map);
  };

  const displayMarker = (map, pos, msg: string, isCenter = false) => {
    // 마커 생성
    const marker = new (window as any).daum.maps.Marker({
      map: map,
      position: pos,
    });
    // 인포윈도우 생성
    const infowindow = new (window as any).daum.maps.InfoWindow({
      content: msg,
      removable: true,
    });
    // 인포윈도우를 마커위에 표시
    infowindow.open(map, marker);

    // 지도 중심좌표로 이동
    if (isCenter) {
      map.setCenter(pos);
    }
  };

  //   const placeSeach = (data, status, paging) => {
  //     if (status === (window as any).daum.maps.services.Status.OK) {
  //       setCafes(data);
  //     }
  //   };

  useEffect(() => {
    if (navigator.geolocation) {
      // 접속 위치 얻어오기
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude; // 경도
        const lat = position.coords.latitude; // 위도

        // const kakaoInstance = new (window as any).daum.maps();

        // 현재 위치 마커가 표시될 위치를 geolocation 으로 얻어온 좌표로 생성
        const myLocMarker = new (window as any).daum.maps.LatLng(lat, lon);
        const myLocMarkerMsg = '여기에 계신가요?!';
        const msgTag = `<span>${myLocMarkerMsg}</span>`;

        // 인포윈도우를 표시
        const container = document.getElementById('myMap');
        const options = {
          center: myLocMarker,
          level: 3,
        };
        const map = new (window as any).daum.maps.Map(container, options);
        displayMarker(map, myLocMarker, msgTag, true);
        displayCircle(map, myLocMarker, 200);
        const ps = new (window as any).daum.maps.services.Places();
        const sorted = (window as any).daum.maps.services.SortBy.DISTANCE;
        // ps.keywordSearch('카페', placeSeach, { x: lon, y: lat, sort: sorted, radius: 150 });

        setMap(map);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      //   var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
      //     message = 'geolocation을 사용할수 없어요..';
      //   displayMarker(locPosition, message);
    }
  }, []);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      const x = 127.042514;
      const y = 37.459939;
      const coords = new (window as any).daum.maps.LatLng(y, x); // 지도의 중심좌표
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
    }
  }, [kakaoMap]);
  return <KakaomapComponent ref={kakaoMap} />;
};

export default aroundRestArea;
