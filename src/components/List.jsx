import React, { useEffect, useState } from 'react'
import Listitem from './Listitem'
const URL = "https://course-api.com/react-tours-project"

const List = () => {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(null)

    const handleClick = () => {
        setTours(JSON.parse(localStorage.getItem("toursData")))
    }

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(URL)
        const data = await response.json()
        if (response.status >= 200 && response.status < 300) {
            setTours(data)
            localStorage.setItem("toursData", JSON.stringify(data))
            setLoading(false)
        } else {
            setLoading(false)
            throw new Error()
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className='p-2 md:p-5 flex flex-col items-center justify-center space-y-5'>
            {loading ? <p className='text-2xl font-bold text-[#444957]'>Loading...</p> :
                <><ul className='flex flex-col justify-center items-center space-y-5 w-3/4'>
                    {tours.map(tour => <Listitem key={tour.id} {...tour} tours={tours} setTours={setTours} />)}
                </ul><button type="button" onClick={handleClick} className='bg-[#444957] px-3 py-2 text-lg font-semibold rounded-3xl text-[#fdf6d9] hover:bg-[#22242b] hover:text-[#ecdebf]'>Refresh</button></>
            }
        </section>
    )
}

export default List
