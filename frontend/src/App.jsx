import React, {useState} from "react";
import axios from "axios";
export default function App(){
  const [msg, setMsg] = useState('');
  const callApi = async () => {
    try {
      const r = await axios.get('/api/hello');
      setMsg(r.data.message);
    } catch(e){ setMsg('error: '+(e.message || e)); }
  };
  return (
    <div style={{padding:20,fontFamily:'Arial'}}>
      <h1>QuickBite — Frontend (Demo)</h1>
      <button onClick={callApi}>Call /api/hello</button>
      <div style={{marginTop:10}}>Response: {msg}</div>
    </div>
  );
}
