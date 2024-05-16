import React, { useEffect } from "react";

const KakaoMap = () => {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  });
  return (
    <div>
      <div className="map" id="map"></div>
    </div>
  );
};

export default KakaoMap;
