import React, {useState, useEffect, useRef} from 'react'
import './accesories.css'
import {CgDetailsMore} from 'react-icons/cg'
import {AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineFilter} from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import Modal from './Modal';
const Accesories = () => {
  let navigate = useNavigate();
  const [sudari, setSudari] = useState([]);
  const [pNad, setPolicijskeNadleznosti] = useState([]);
  const [saob, setSaobracajnice] = useState([]);
  const [period, setPeriod] = useState([]);
  const [vidljivost, setVidljivost] = useState([]);
  const [odDana, setOdDana] = useState(null);
  const [doDana, setDoDana] = useState(null);

  const nadleznostFilter = useRef();
  const saobFilter = useRef();
  const periodFilter = useRef();  
  const vidljivostFilter = useRef();
  

  const [odDanaFilter, setOdDanaFilter] = useState([]);
  const [doDanaFilter, setDoDanaFilter] = useState([]);

  const pageElements = 70;
  const [pageNumber, setPageNumber] = useState(0);
  const [sviSudari, setSviSudari] = useState([]);


  const promjena = () => {
    async function sudariFetch() {
      const response = await fetch('https://localhost:7220/api/Sudari/sviSudari/' + nadleznostFilter.current.value.replaceAll(" ", "%20"), 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});              
      const items = await response.json();
      
      // const filteredArray = items.filter(item => {
      //   const saobCond = saobFilter === 'Sve' || (item.kategorijaSaobracajnice == saobFilter.current.value);
      //   const odDanaCond = odDanaFilter === undefined || (new Date(item.datumNastankaSaobracajneNezgode.substring(0,10).replaceAll("-","/")) >= new Date(odDanaFilter));
      //   const doDanaCond = doDanaFilter === undefined || (new Date(item.datumNastankaSaobracajneNezgode.substring(0,10).replaceAll("-","/")) <= new Date(doDanaFilter));
      //   return (saobCond && doDanaCond && odDanaCond);
      // })

      var noviSudari = items;
      if(saobFilter.current.value !== "Sve")
      {
        noviSudari = noviSudari.filter(x => x.kategorijaSaobracajnice === saobFilter.current.value);
      }

      const noviSudariSaOd = noviSudari.filter(x =>{
        if(doDana != null){
        const itemDate = new Date(x.datumNastankaSaobracajneNezgode.substring(0,10).replaceAll("-","/"));
        const odDate = new Date(odDanaFilter);
        return (itemDate >= odDate);
        } else {
          return true;
        }
      });
      
      const noviSudariSaDo = noviSudariSaOd.filter(x =>{
        if(doDana != null){
          const itemDate = new Date(x.datumNastankaSaobracajneNezgode.substring(0,10).replaceAll("-","/"));
          const doDate = new Date(doDanaFilter);
          return (itemDate <= doDate);
        } else {
          return true;
        }
      });
      
      var noviSudariSaPeriodom = noviSudariSaDo;
      if(periodFilter.current.value !== "Sve")
      {
        noviSudariSaPeriodom = noviSudariSaPeriodom.filter(x => x.periodDana === periodFilter.current.value);
      }

      var noviSudariSaVidljivost = noviSudariSaPeriodom;
      if(vidljivostFilter.current.value !== "Sve")
      {
        noviSudariSaVidljivost = noviSudariSaVidljivost.filter(x => x.vidljivost === vidljivostFilter.current.value);
      }
      setSudari(noviSudariSaVidljivost);
      setSviSudari(noviSudariSaVidljivost);
      setPageNumber(0);
    } 
    sudariFetch()
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    async function policijskeNadleznostiPrFetch() {
      const response = await fetch("https://localhost:7220/api/Ostalo/getPolicijskeNadleznosti", 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();
      setPolicijskeNadleznosti(data);   
    } 
    policijskeNadleznostiPrFetch()

    async function saobracajnicePrFetch() {
      const response = await fetch("https://localhost:7220/api/Ostalo/getKategorijaSaobracajnice", 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      var data = await response.json();
      setSaobracajnice(data);   
    } 
    saobracajnicePrFetch()

    async function periodFetch() {
      const response = await fetch("https://localhost:7220/api/Ostalo/getPeriodDana", 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      var data = await response.json();
      setPeriod(data);   
    } 
    periodFetch()

    async function vidljivostFetch() {
      const response = await fetch("https://localhost:7220/api/Ostalo/getVidljivost", 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      var data = await response.json();
      setVidljivost(data);   
    } 
    vidljivostFetch()

    promjena();
    
    setSviSudari(sudari);

    console.log(sviSudari);
  }, [])

  const handleOdDanaChange = date => {
    setOdDana(date);
    date = format(date, "yyyy/MM/dd")
    setOdDanaFilter(date);
    console.log("Od: " + odDanaFilter);
    promjena();
  };

  const handleDoDanaChange = date => {
    setDoDana(date);
    date = format(date, "yyyy/MM/dd")
    setDoDanaFilter(date);
    console.log("Do: " + doDanaFilter);
    promjena();
  };

  return (
    <section id='accesories'>
      <h5>Pregled detalja</h5>
      <h2>Spisak sudara</h2>
      <div className="containerr bucket__container">
        <div>
          <button className='btn btn-primary' onClick={openModal}>Filteri</button> <br />
          <Modal isOpen={isOpen} onClose={closeModal}>
            <h5 className='inline'>Nadleznost:</h5>
            <select           
            required   
            className='inline dropdown'
            ref = {nadleznostFilter}
            onChange={(e) => { promjena()}}>         
            {pNad.map((p) =>{ 
              return(             
                <option key={p.policijskaNadleznost} value={p.policijskaNadleznost}>{p.policijskaNadleznost}</option>           
              )})}         
            </select>
            <h5 className='inline'>Kategorija:</h5>
            <select           
            required   
            className='inline dropdown' 
            ref = {saobFilter}
            onChange={(e) => { promjena()}}>     
            <option key="Sve" value="Sve">Sve</option>   
            {saob.map((s) =>{ 
              return(             
                <option key={s.kategorijaSaobracajnice} value={s.kategorijaSaobracajnice}>{s.kategorijaSaobracajnice}</option>           
              )})}         
            </select>
            <h5 className='inline'>Period:</h5>
            <select           
            required   
            className='inline dropdown'
            ref = {periodFilter}
            onChange={(e) => { promjena()}}>    
            <option key="Sve" value="Sve">Sve</option>      
            {period.map((pe) =>{ 
              return(             
                <option key={pe.periodDana} value={pe.periodDana}>{pe.periodDana}</option>           
              )})}         
            </select>
            <br></br>
            <h5 className='inline'>Od:</h5>
            <div className='inline'>
              <DatePicker dateFormat="yyyy/MM/dd" selected={odDana} onChange={handleOdDanaChange} />
            </div>
            <h5 className='inline'>Do:</h5>
            <div className='inline'>
              <DatePicker dateFormat="yyyy/MM/dd" selected={doDana} onChange={handleDoDanaChange} />
            </div>
            <h5 className='inline'>Vidljivost:</h5>
            <select           
            required   
            className='inline dropdown'
            ref = {vidljivostFilter}
            onChange={(e) => { promjena()}}>    
            <option key="Sve" value="Sve">Sve</option>      
            {vidljivost.map((v) =>{ 
              return(             
                <option key={v.vidljivost} value={v.vidljivost}>{v.vidljivost}</option>           
              )})}         
            </select>
          </Modal>
        </div>
        <table>
          <tr>
            <th>Datum</th>
            <th>Nadležnost</th>
            <th>Kategorija</th>
            <th>Period</th>
            <th>Vidljivost</th>
            <th></th>
          </tr>
          <br></br>
          {sudari.slice(0,pageElements).map((sudar)=>{
            let date = "" + sudar.datumNastankaSaobracajneNezgode
            date = date.substring(0,10)
            date = date.replaceAll("-", "/")
            return ( 
            <tr className='table__tr' key={sudar.fid}>
              <td>{date}</td> 
              <td className='tabela__img'>{sudar.policijskaNadleznost}</td>
              <td>{sudar.kategorijaSaobracajnice}</td>
              <td>{sudar.periodDana}</td>
              <td>{sudar.vidljivost}</td>
              <td className='center'>
                <CgDetailsMore target='#blank' onClick={() => {
                  const url = `/Detail/${sudar.fid}`;
                  window.open(url, '_blank');
                }}/>
              </td>
            </tr>
          )})}
        </table>
        <br></br>
            <AiOutlineArrowLeft onClick={() =>{
              setPageNumber((pageNumber > 0) ? pageNumber - 1 : 0);
              setSudari(sviSudari.slice((pageElements * pageNumber), (pageElements * (pageNumber + 1))));
              console.log(pageNumber);
            }}/>
            <AiOutlineArrowRight onClick={() =>{
              setPageNumber((pageElements * (pageNumber + 1)) < sviSudari.length ? pageNumber + 1 : pageNumber);
              setSudari(sviSudari.slice((pageElements * pageNumber), (pageElements * (pageNumber + 1))));
              console.log(pageNumber);
            }}/>
        <br></br>
      </div>
    </section>
  )
}

export default Accesories