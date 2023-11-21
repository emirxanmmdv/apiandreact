import React, { useEffect, useState } from 'react'

function Fetching() {
    const [data, setData] = useState([])
    useEffect(() => {
        const Fetchdata=async()=>{
            const response = await fetch("http://localhost:3000/Products")
            const jsondata = await response.json()
            setData(jsondata)

        }
        Fetchdata()
    }, [])
    
  return (
    <div>
        {data && data.map((item)=>(
            <ul key={item.id}>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
            </ul>
        ))}
    </div>
  )
}

export default Fetching