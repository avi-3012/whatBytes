import React, { use, useEffect, useState } from 'react'
import { DiHtml5 as HtmlIcon } from 'react-icons/di'

const Modal = ({update,close}:any) => {
    const [rank, setRank] = useState("");
    const [percentile, setPercentile] = useState("");
    const [score, setScore] = useState("");
    const [disabled, setDisabled] = useState(true);

    const updateInfo = () => {
        update({rank,percentile,score});
    }

    useEffect(()=>{
        if(rank!=="" && percentile!=="" && score!=="" && (rank as unknown as number)>=1  && (percentile as unknown as number)>=0 && (percentile as unknown as number)<=100 && (score as unknown as number)>=1 && (score as unknown as number)<=15){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    },[
        rank,
        percentile,
        score
    ])
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-slate-600/40'>
        <div className='absolute md:w-[500px] w-[280px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg'>
            <div className='text-2xl font-bold text-slate-900 flex flex-row justify-between my-auto'>
                <div className='my-auto'>Update Scores</div>
                <HtmlIcon className='h-12 w-12 my-auto text-orange-500' />
            </div>
            <div className='mt-2'>
                <div className='flex md:flex-row gap-2 mb-2 flex-col justify-between'>
                    <div className='text-base font-medium my-auto flex flex-row'>
                        <div className='h-6 w-6 rounded-full bg-blue-800 text-white flex justify-center items-center mr-2'>1</div>
                        Update your rank</div>
                    <input type='number' className='w-[150px] border-[1px] my-2 rounded-lg p-2' placeholder='Rank' onChange={(e)=>setRank(e.target.value)} value={rank}/>
                </div>
                <div className='flex md:flex-row gap-2 mb-2 flex-col justify-between my-1'>
                    <div className='text-base font-medium my-auto flex flex-row'>
                        <div className='h-6 w-6 rounded-full bg-blue-800 text-white flex justify-center items-center mr-2'>2</div>
                        Update your percentile</div>
                    <input type='number' className='w-[150px] border-[1px] rounded-lg p-2' placeholder='Percentile' onChange={(e)=>setPercentile(e.target.value)} value={percentile}/>
                </div>
                <div className='flex md:flex-row gap-2 mb-2 flex-col justify-between'>
                    <div className='text-base font-medium my-auto flex flex-row'>
                        <div className='h-6 w-6 rounded-full bg-blue-800 text-white flex justify-center items-center mr-2'>3</div>
                        Update your score {"(Out of 15)"}</div>
                    <input type='number' className='w-[150px] border-[1px] rounded-lg p-2' placeholder='Score' onChange={(e)=>setScore(e.target.value)} value={score}/>
                </div>
            </div>
            <div className='flex flex-row text-white justify-end mt-2'>
                <button className='p-1 bg-red-500 rounded-lg w-[40%] mr-2' onClick={()=>close(false)}>Cancel</button>
                <button disabled={disabled} className={`p-1  rounded-lg w-[40%] ${disabled?"bg-slate-700":"bg-green-500"}`} onClick={updateInfo}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Modal