/* global kakao */
import React, { useEffect ,dismaker} from 'react';
import ROSGPS2 from './ros_get';

const Kakaomap = () => {
    //처음 지도 그리기
    ROSGPS2();

    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(35.9138, 128.8036),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);

        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(35.9138, 128.8036)});
    },[])

    // dismaker((locPosition, message)=>{
    //     var imageSize = new kakao.maps.Size(24, 35);
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    //     // 마커를 생성합니다
    //     var marker = new kakao.maps.Marker({
    //         map: map,
    //         position: locPosition,
    //         image : markerImage,
    //     });
    //
    //     var iwContent = message, // 인포윈도우에 표시할 내용
    //         iwRemoveable = true;
    //
    //     // 인포윈도우를 생성합니다
    //     var infowindow = new kakao.maps.InfoWindow({
    //         content : iwContent,
    //         removable : iwRemoveable
    //     });
    //
    //     // 인포윈도우를 마커위에 표시합니다
    //     infowindow.open(map, marker);
    //
    //     // 지도 중심좌표를 접속위치로 변경합니다
    //     map.setCenter(locPosition);
    //
    // })

    return (
        <div
            style={{
                width: '100%',
                display: 'inline-block',
                marginLeft: '5px',
                marginRight: '5px',
            }}
        >
            <div id="map" style={{ width: '99%', height: '500px' }}></div>
            {/*<div>test</div>*/}
        </div>
    );
};

export default Kakaomap;