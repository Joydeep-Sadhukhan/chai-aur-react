import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('http://api.github.com/users/joydeep-sadhukhan')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-5 bg-gray-500 text-white text-3xl p-4'>
        Github followers : {data.followers}
        <img src={data.avatar_url} alt="avatar_url" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/joydeep-sadhukhan')
    return response.json()
}