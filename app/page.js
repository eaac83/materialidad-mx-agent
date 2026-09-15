'use client';
import {useEffect,useMemo,useState} from 'react';
import Dashboard from '../components/Dashboard';
import Companies from '../components/Companies';
import NewCase from '../components/NewCase';
import Cases from '../components/Cases';
import {classifyService,familyQuestions,universalQuestions} from '../lib/serviceCatalog';

const emptyCompany={rfc:'',name:'',trade:'',operation:'',contact:'',role:'Cliente'};
const emptyCase={client:'',provider:'',service:'',sat:'',period:'',amount:'',family:'',answers:{}};

export default function Home(){
 const [tab,setTab]=useState('dashboard');
 const [companies,setCompanies]=useState([]);
 const [cases,setCases]=useState([]);
 const [company,setCompany]=useState(emptyCompany);
 const [exp,setExp]=useState(emptyCase);
 useEffect(()=>{try{setCompanies(JSON.parse(localStorage.getItem('evmx_companies')||'[]'));setCases(JSON.parse(localStorage.getItem('evmx_cases')||'[]'));}catch{}},[]);
 const persistCompanies=items=>{setCompanies(items);localStorage.setItem('evmx_companies',JSON.stringify(items));};
 const persistCases=items=>{setCases(items);localStorage.setItem('evmx_cases',JSON.stringify(items));};
 const lookupCompany=()=>{const rfc=company.rfc.trim().toUpperCase();if(!rfc)return;const found=companies.find(x=>x.rfc===rfc);setCompany(found?{...found}:{...company,rfc});};
 const saveCompany=()=>{const rfc=company.rfc.trim().toUpperCase();if(!rfc||!company.name.trim())return alert('RFC y razón social son obligatorios.');const item={...company,rfc};const index=companies.findIndex(x=>x.rfc===rfc);const next=[...companies];if(index>=0)next[index]=item;else next.push(item);persistCompanies(next);alert(index>=0?'Empresa actualizada.':'Empresa registrada.');};
 const questions=useMemo(()=>[...universalQuestions,...(familyQuestions[exp.family]||[])],[exp.family]);
 const answered=questions.filter(q=>(exp.answers[q]||'').trim()).length;
 const sufficiency=questions.length?Math.round(answered/questions.length*100):0;
 const serviceChanged=value=>setExp({...exp,service:value,family:classifyService(value)});
 const saveExp=()=>{if(!exp.client||!exp.provider||!exp.service.trim())return alert('Selecciona cliente, prestadora y captura el servicio.');const family=exp.family||classifyService(exp.service);const item={...exp,family,id:Date.now(),status:sufficiency>=80?'Suficiente':'Incompleto',created:new Date().toLocaleDateString('es-MX')};persistCases([item,...cases]);setExp(item);alert('Expediente guardado.');};
 const nav=[['dashboard','Dashboard'],['companies','Empresas'],['new','Nuevo expediente'],['cases','Expedientes']];
 return <main><aside><div className="brand">Evidencia<span>MX</span><small>MVP interno v0.1</small></div>{nav.map(([id,label])=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}>{label}</button>)}</aside><section className="content">
  {tab==='dashboard'&&<Dashboard companies={companies} cases={cases}/>} 
  {tab==='companies'&&<Companies company={company} setCompany={setCompany} companies={companies} onLookup={lookupCompany} onSave={saveCompany}/>} 
  {tab==='new'&&<NewCase companies={companies} exp={exp} setExp={setExp} questions={questions} sufficiency={sufficiency} onServiceChange={serviceChanged} onSave={saveExp}/>} 
  {tab==='cases'&&<Cases cases={cases}/>} 
 </section></main>;
}
