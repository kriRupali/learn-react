import React, { useEffect, useState } from 'react'

const Useeffects = () => {

        const [hour,setHour] = useState(0);
        const [min,setMin] = useState(0);
        const [sec,setSec] = useState(0);
        

        useEffect(()=>{
          const interval  = setInterval(()=>{
                setSec((prevSec)=>sec+1)
            },1000);
            return()=> clearInterval(interval);
        } ,[])
        useEffect(()=>{
            if(sec>59)
            setSec(0);
            setMin((prevMin)=>min+1);
        },[sec])
        useEffect(()=>{
            if(min>59)
            setMin(0);
            setHour((prevHour)=>hour+1);
        },[min])

  return (
    <section>
        <article style={{display:"flex" ,gap:"10px"}}>
    {/* <section className='flex  justify-centre items-centre h-[100vh] overflow-hidden' > */}
        {/* <aeticle className='flex gap-4'> */}
            <h2 className=' text-5xl font--semihold-bold'>{hour}</h2>
            <span style={{fontSize:"20px"}}>:</span>
            <h2 className=' text-5xl font--semihold-bold'>{sec}</h2>
            <span style={{fontSize:"20px"}}>:</span>
            <h2 className=' text-5xl font--semihold-bold'>{sec}</h2>
             

        {/* </aeticle> */}
       
    {/* </section> */}
    </article>
    </section>
  )
}

export default Useeffects
