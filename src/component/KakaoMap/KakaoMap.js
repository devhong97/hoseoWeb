import React, { useEffect } from "react";

const KakaoMap = () => {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.002591953575376, 126.58530535848365),
      level: 4,
      // 마우스 클릭 이벤트 비활성화
      // draggable: false,
    };
    const map = new kakao.maps.Map(container, options);

    const imageSrc = "/kakao_icon.png";
    const imageSize = new kakao.maps.Size(70, 70);
    const imageOption = { offset: new kakao.maps.Point(37, 73) };
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const markerPosition = new kakao.maps.LatLng(
      37.002591953575376,
      126.58530535848365
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  }, []);

  return (
    <div>
      <div className="map" id="map"></div>
    </div>
  );
};

export default KakaoMap;
