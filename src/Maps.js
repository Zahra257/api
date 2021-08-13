// import React, {useRef,useEffect, useState} from 'react'
// import mapboxgl from 'mapbox-gl'
// import './Maps.css'

// const Maps = () => {
 
//   mapboxgl.accessToken = 'pk.eyJ1IjoiMGthemNyYXp5dGVhY2hlciIsImEiOiJja3JraG84N3AzbjE4MnBwOGU2YThqcmc2In0.aky7RLumDuqZv9kTCRZa3Q'

//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   const [lng, setLng] = useState(-7.603869);
//   const [lat, setLat] = useState(33.589886);
//   const [zoom, setZoom] = useState(9);

//   useEffect(()=> {
//       if (map.current) return false;
     
//       map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [lng, lat],
//         zoom: zoom
//       })
    
//   },[])



//   return(
//     <>
//     <div>
//     <div ref={mapContainer} className="map-container"/>
//     </div>
//     </>
//   )


// }





// export default Maps
