import React, {useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {BiMoney} from 'react-icons/bi'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {SiNike} from 'react-icons/si'
import {SiPuma} from 'react-icons/si'
import {CgAdidas} from 'react-icons/cg'
import {CgSize} from 'react-icons/cg'

import {FaRoad, FaSkullCrossbones, FaTruckMoving, FaMotorcycle} from 'react-icons/fa'
import {MdToday, MdOutlinePersonalInjury, MdOutlineDangerous, MdDirectionsBike, MdOutlineDescription, MdEditNote} from 'react-icons/md'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {BiTimeFive, BiBody} from 'react-icons/bi'
import {BsCalendarDay, BsEyeglasses, BsBusFront} from 'react-icons/bs'
import {AiFillCar} from 'react-icons/ai'
import {TbUserSearch} from 'react-icons/tb'

import MapComponent from './MapComponent';
import L from 'leaflet';
import { Icon } from 'leaflet';
import markerIconImage from './assets/marker.png';

import 'leaflet/dist/leaflet.css';



const Detail = () => {
  let {id} = useParams();
  const [itemSlika, setItemSlika] = useState([]);
  const [artikal, setArtikal] = useState([]);
  const [itemStanja, setItemStanja] = useState([]);
  const [sudar, setSudar] = useState([]);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    async function fetchSudar() {
      const response = await fetch(`https://localhost:7220/api/Sudari/sudarPoIDu/${id}`, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const itemStanja = await response.json();       
      console.log(itemStanja);
      setSudar(itemStanja);   
      setLatitude(itemStanja.latituda);
      setLongitude(itemStanja.longituda);
    } 
    fetchSudar();
  }, [])

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (mapContainer && latitude && longitude) {
      // Create the map instance
      const map = L.map(mapContainer).setView([latitude, longitude], 17);

      // Add the tile layer (in this example, we're using OpenStreetMap tiles)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      // Create a custom marker icon
      const customMarkerIcon = new L.Icon({
        iconUrl: markerIconImage,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41]
      });

      // Add a marker to the map using the custom marker icon
      L.marker([latitude, longitude], { icon: customMarkerIcon }).addTo(map);
    }
  }, [latitude, longitude]);
  
  let date = "" + sudar.datumNastankaSaobracajneNezgode;
  date = date.substring(0,10);
  date = date.replaceAll("-", "/");
  let brPov = "";
  brPov = sudar.brojLaksePovrijedjenihOsoba != null ? brPov + sudar.brojLaksePovrijedjenihOsoba : brPov + "0";
  brPov = brPov + " | ";
  brPov = sudar.brojTeskoPovrijedjenihOsoba != null ? brPov + sudar.brojTeskoPovrijedjenihOsoba : brPov + "0";
  return (
    <section className='sct'>
          <>
            <h5>Mjesto mikrolokacije:</h5>
            <h2 className='uppercase-text'>{sudar.mjestoMikrolokcija}</h2>
            <br></br>
            <h5>Naziv saobraćajne ulice:</h5>
            <h2 className='uppercase-text'>{sudar.nazivSaobracajniceUlice}</h2>
            <h5 className='newItems__center'>Kategorija ceste: {sudar.kategorijaSaobracajnice}</h5><br />
            {latitude && longitude && <div id="map" style={{ width: '100%', height: '400px' }} />}
            <div className='newItems__center'>
              <div className='container newItems__container'>
                <div className="newItems__content">
                  <br />
                  <h4 className='newItems__center'>Vremenski period:</h4>
                      <div className="newItems__cards">
                        <div className='newItems__card'>
                          <BsCalendarDay className='newItems__icon'/>
                          <h5>{sudar.danUSedmiciNastanakSn}</h5>
                          <small>DAN:</small>
                        </div>
                        <div className='newItems__card'>
                          <BiTimeFive className='newItems__icon'/>
                          <h5>{sudar.vrijemeNastankaSaobracajneNezgode}</h5>
                          <small>VRIJEME:</small>
                        </div>
                        <div className='newItems__card'>
                          <MdToday className='newItems__icon'/>
                          <h5>{date}</h5>
                          <small>DATUM:</small>
                        </div>
                      </div>
                      <br />
                      <h4 className='newItems__center' >Vremenske prilike:</h4>
                      <div className="newItems__cards">
                        <div className='newItems__card' key={itemStanja.velicina}>
                          <TiWeatherPartlySunny className='newItems__icon'/>
                          <h5>{sudar.ambijentalnePrilike}</h5>
                          <small>PADAVINE:</small>
                        </div>
                        <div className='newItems__card'>
                          <BsEyeglasses className='newItems__icon' />
                          <h5>{sudar.vidljivost}</h5>
                          <small>VIDLJIVOST:</small>
                        </div>
                        <div className='newItems__card'>
                          <FaRoad className='newItems__icon'/>
                          <h5>{sudar.stanjeKolovoza}</h5>
                          <small>STANJE KOLOVOZA:</small>
                        </div>
                      </div><br />
                      <h4 className='newItems__center'>Informacije o povredama:</h4>
                      <div className="newItems__cards">
                        <div className='newItems__card' key={itemStanja.velicina}>
                          <MdOutlinePersonalInjury className='newItems__icon'/>
                          <h5>{brPov}</h5>
                          <small>LAKŠE | TEŽE POVRIJEĐENIH:</small>
                        </div>
                        <div className='newItems__card'>
                          <FaSkullCrossbones className='newItems__icon' />
                          <h5>{sudar.brojPoginulihOsoba != null ? sudar.brojPoginulihOsoba : "Ne"}</h5>
                          <small>SMRTNI SLUČAJ:</small>
                        </div>
                        <div className='newItems__card'>
                          <MdOutlineDangerous className='newItems__icon'/>
                          <h5>{sudar.koeficijentZestineSaobracajneNezgode > 25 ? "Teža" : "Lakša"}</h5>
                          <small>TEŽINA SAOBRAĆAJNE NESREĆE:</small>
                        </div>
                      </div> <br />
                      <h4 className='newItems__center'>Učesnici u saobraćajnoj nesreći:</h4>
                      <div className="newItems__cards">
                        <div className='newItems__card' key={itemStanja.velicina}>
                          <AiFillCar className='newItems__icon'/>
                          <h5>{sudar.putnickiAutomobilUcesnikSaobracajneNezgode != null ? sudar.putnickiAutomobilUcesnikSaobracajneNezgode : "0"}</h5>
                          <small>BR. PUTNIČKIH VOZILA:</small>
                        </div>
                        <div className='newItems__card'>
                          <BiBody className='newItems__icon' />
                          <h5>{sudar.pjesakUcesnikSaobracajneNezgode != null ? sudar.pjesakUcesnikSaobracajneNezgode : "0"}</h5>
                          <small>BR. PJEŠAKA:</small>
                        </div>
                        <div className='newItems__card'>
                          <FaTruckMoving className='newItems__icon'/>
                          <h5>{sudar.teskoTeretnoVoziloUcesnikSaobracajneNezgode != null ? sudar.teskoTeretnoVoziloUcesnikSaobracajneNezgode : "0"}</h5>
                          <small>BR. TEŠKIH TERETNIH VOZILA:</small>
                        </div>
                      </div>
                      <div className="newItems__cards">
                        <div className='newItems__card' key={itemStanja.velicina}>
                          <FaMotorcycle className='newItems__icon'/>
                          <h5>{sudar.motociklUcesnikSaobracajneNezgode != null ? sudar.motociklUcesnikSaobracajneNezgode : "0"}</h5>
                          <small>BR. MOTORA:</small>
                        </div>
                        <div className='newItems__card'>
                          <MdDirectionsBike className='newItems__icon' />
                          <h5>{sudar.biciklUcesnikSaobracajneNezgode != null ? sudar.biciklUcesnikSaobracajneNezgode : "0"}</h5>
                          <small>BR. BICIKLA:</small>
                        </div>
                        <div className='newItems__card'>
                          <BsBusFront className='newItems__icon'/>
                          <h5>{sudar.autobusUcesnikSaobracajneNezgode != null ? sudar.autobusUcesnikSaobracajneNezgode : "0"}</h5>
                          <small>BR. AUTOBUSA:</small>
                        </div>
                      </div> <br />
                      <h4 className='newItems__center'>Dodatne informacije:</h4>
                      <div className="newItems__cards">
                        <div className='newItems__card' key={itemStanja.velicina}>
                          <MdOutlineDescription className='newItems__icon'/>
                          <h5>{sudar.vrstaTipSaobracajneNezgode}</h5>
                          <small>KRAĆI OPIS SAOB. NESREĆE:</small>
                        </div>
                        <div className='newItems__card'>
                          <MdEditNote className='newItems__icon' />
                          <h5>{sudar.izvorPodatakaZaLokaciju}</h5>
                          <small>IZVOR PODATAKA:</small>
                        </div>
                        <div className='newItems__card'>
                          <TbUserSearch className='newItems__icon'/>
                          <h5>{sudar.obradioLa}</h5>
                          <small>OBRADIO/LA:</small>
                        </div>
                      </div>
                  </div>
              </div>    
           </div>
          </>
    </section>
    )
  }
export default Detail