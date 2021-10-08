//import logo from './logo.svg';
import './App.css';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



// function App() {
//   const Bonjour=()=>  <h1>Bonjour de Réact</h1>
//   return ( 
//       Bonjour()
//   );
// }
function App() {
  return(
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[37, 10]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );

}



export default App;
