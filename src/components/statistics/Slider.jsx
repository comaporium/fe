import React, {useState, useEffect} from 'react'
import './statistics.css'
import {IoMdCloudyNight} from 'react-icons/io'
import {RiRoadMapLine} from 'react-icons/ri'
import {MdCalendarToday} from 'react-icons/md'
import {GiRoad} from 'react-icons/gi'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {GiPoliceBadge} from 'react-icons/gi'

const Slider = () => {
  const ambijentalnePrilikePr = "https://localhost:7220/api/Ostalo/getAmbijentalnePrilike"
  const brojcaniPr = "https://localhost:7220/api/Ostalo/getBrojniProsjeci"
  const daniPr = "https://localhost:7220/api/Ostalo/getDaniUSedmici"
  const izvorPr = "https://localhost:7220/api/Ostalo/getIzvoriPodataka"
  const saobracajnicePr = "https://localhost:7220/api/Ostalo/getKategorijaSaobracajnice"
  const opasneUlicePr = "https://localhost:7220/api/Ostalo/getNazivMikrolokacije"
  const nazivUlicePr = "https://localhost:7220/api/Ostalo/getNazivUlice"
  const oznakaSaobrPr = "https://localhost:7220/api/Ostalo/getOznakeSaobracajnice"
  const padavinePr = "https://localhost:7220/api/Ostalo/getPadavine"
  const periodDanaPr = "https://localhost:7220/api/Ostalo/getPeriodDana"
  const policijskeNadleznostiPr = "https://localhost:7220/api/Ostalo/getPolicijskeNadleznosti"
  const stanjeKolovozaPr = "https://localhost:7220/api/Ostalo/getStanjeKolovoza"
  const vidljivostPr = "https://localhost:7220/api/Ostalo/getVidljivost"
  const vrstaSaobNesrecePr = "https://localhost:7220/api/Ostalo/getVrstaSaobNezgode"

  const [ambijentalnePrilike, setAmbijentalnePrilike] = useState([]);
  const [brojcani, setBrojcani] = useState([]);
  const [dani, setDani] = useState([]);
  const [izvor, setIzvor] = useState([]);
  const [saobracajnice, setSaobracajnice] = useState([]);
  const [opasneUlice, setOpasneUlice] = useState([]);
  const [nazivUlice, setNazivUlice] = useState([]);
  const [oznakaSaobr, setOznakaSaobr] = useState([]);
  const [padavine, setPadavine] = useState([]);
  const [periodDana, setPeriodDana] = useState([]);
  const [policijskeNadleznosti, setPolicijskeNadleznosti] = useState([]);
  const [stanjeKolovoza, setStanjeKolovoza] = useState([]);
  const [vidljivost, setVidljivost] = useState([]);
  const [vrstaSaobNesrece, setVrstaSaobNesrece] = useState([]);

  var indexToShow = 0

  useEffect(() => {
    async function ambijentalnePrilikeFetch() {
      const response = await fetch(ambijentalnePrilikePr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setAmbijentalnePrilike(data);   
    } 
    ambijentalnePrilikeFetch()

    async function brojcaniPrFetch() {
      const response = await fetch(brojcaniPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setBrojcani(data);   
    } 
    brojcaniPrFetch()

    async function daniPrFetch() {
      const response = await fetch(daniPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setDani(data);   
    } 
    daniPrFetch()

    async function izvorPrFetch() {
      const response = await fetch(izvorPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setIzvor(data);   
    } 
    izvorPrFetch()

    async function saobracajnicePrFetch() {
      const response = await fetch(saobracajnicePr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setSaobracajnice(data);   
    } 
    saobracajnicePrFetch()

    async function opasneUlicePrFetch() {
      const response = await fetch(opasneUlicePr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setOpasneUlice(data);   
    } 
    opasneUlicePrFetch()

    async function oznakaSaobrPrFetch() {
      const response = await fetch(oznakaSaobrPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setOznakaSaobr(data);   
    } 
    oznakaSaobrPrFetch()

    async function nazivUlicePrFetch() {
      const response = await fetch(nazivUlicePr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setNazivUlice(data);   
    } 
    nazivUlicePrFetch()

    async function padavinePrFetch() {
      const response = await fetch(padavinePr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setPadavine(data);   
    } 
    padavinePrFetch()

    async function periodDanaPrFetch() {
      const response = await fetch(periodDanaPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setPeriodDana(data);   
    } 
    periodDanaPrFetch()

    async function policijskeNadleznostiPrFetch() {
      const response = await fetch(policijskeNadleznostiPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setPolicijskeNadleznosti(data);   
    } 
    policijskeNadleznostiPrFetch()

    async function stanjeKolovozaPrFetch() {
      const response = await fetch(stanjeKolovozaPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setStanjeKolovoza(data);   
    } 
    stanjeKolovozaPrFetch()

    async function vidljivostPrFetch() {
      const response = await fetch(vidljivostPr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setVidljivost(data);   
    } 
    vidljivostPrFetch()

    async function vrstaSaobNesrecePrFetch() {
      const response = await fetch(vrstaSaobNesrecePr, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setVrstaSaobNesrece(data);   
    } 
    vrstaSaobNesrecePrFetch()
  }, [])

  const setTrigger = (value) =>{
    if(value == 0){
      indexToShow = 0
    } else {
      indexToShow = stanjeKolovoza.length - 1
    }
    console.log("broooooj: " + indexToShow);
  }

  useEffect(()=>{
    console.log("ovo je nekako to: " + indexToShow);
  },[indexToShow])

  return (
    <section className='sct'>
            <article>
            <section className='sct'>
                <h5>PROSJEČNA STATISTIKA</h5>
                <h2>Učestale okolnosti sudara</h2>
                <div className='newItems__content newItems__center'>
                  <div className='container newItems__container'>
                    <div className="newItems__content">
                        <div className="newItems__cards">
                          <div className='newItems__card'>
                            <MdCalendarToday className='newItems__icon' />
                            <h5>{dani[0]?.danUSedmiciNastanakSn}</h5>
                            <small>{brojcani?.vrijemeAvg}</small><br></br>
                            <small>DAN:</small>
                          </div>
                          <div className='newItems__card'>
                            <GiRoad className='newItems__icon'/>
                            <h5>{saobracajnice[0]?.kategorijaSaobracajnice}</h5>
                            <small>KATEGORIJA SAOBRAĆAJNICE:</small>
                          </div>
                          <div className='newItems__card'>
                            <TiWeatherPartlySunny className='newItems__icon'/>
                            <h5>{stanjeKolovoza[0]?.stanjeKolovoza}</h5>
                            <small>STANJE KOLOVOZA:</small>
                          </div>
                        </div>
                    </div>
                    <div className="newItems__content">
                        <div className="newItems__cards">
                          <div className='newItems__card'>
                            <GiPoliceBadge className='newItems__icon' />
                            <h5>{policijskeNadleznosti[0]?.policijskaNadleznost}</h5>
                            <small>POLICIJSKA NADLEŽNOST:</small>
                          </div>
                          <div className='newItems__card'>
                            <RiRoadMapLine className='newItems__icon'/>
                            <h5>{nazivUlice[0]?.nazivSaobracajniceUlice}</h5>
                            <small>NAZIV ULICE:</small>
                          </div>
                          <div className='newItems__card'>
                            <IoMdCloudyNight className='newItems__icon'/>
                            <h5>{periodDana[0]?.periodDana}</h5>
                            <small>PERIOD DANA:</small>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <br></br><br></br>
                <h2>Rjeđe okolnosti sudara</h2>
                <div className='newItems__center'>
                  <div className='container newItems__container'>
                    <div className="newItems__content">
                        <div className="newItems__cards">
                          <div className='newItems__card'>
                            <MdCalendarToday className='newItems__icon' />
                            <h5>{dani[dani.length-1]?.danUSedmiciNastanakSn}</h5>
                            <small>DAN:</small>
                          </div>
                          <div className='newItems__card'>
                            <GiRoad className='newItems__icon'/>
                            <h5>{saobracajnice[saobracajnice.length-1]?.kategorijaSaobracajnice}</h5>
                            <small>KATEGORIJA SAOBRAĆAJNICE:</small>
                          </div>
                          <div className='newItems__card'>
                            <TiWeatherPartlySunny className='newItems__icon'/>
                            <h5>{stanjeKolovoza[stanjeKolovoza.length-1]?.stanjeKolovoza}</h5>
                            <small>STANJE KOLOVOZA:</small>
                          </div>
                        </div>
                    </div>
                    <div className="newItems__content">
                        <div className="newItems__cards">
                          <div className='newItems__card'>
                            <GiPoliceBadge className='newItems__icon' />
                            <h5>{policijskeNadleznosti[policijskeNadleznosti.length-1]?.policijskaNadleznost}</h5>
                            <small>POLICIJSKA NADLEŽNOST:</small>
                          </div>
                          <div className='newItems__card'>
                            <RiRoadMapLine className='newItems__icon'/>
                            <h5>{nazivUlice[nazivUlice.length-1]?.nazivSaobracajniceUlice}</h5>
                            <small>NAZIV ULICE:</small>
                          </div>
                          <div className='newItems__card'>
                            <IoMdCloudyNight className='newItems__icon'/>
                            <h5>{periodDana[periodDana.length-1]?.periodDana}</h5>
                            <small>PERIOD DANA:</small>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            </section>
        </article>
      </section>
  )
}

export default Slider