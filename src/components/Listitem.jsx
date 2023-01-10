import React, { useState } from 'react'

const Listitem = (props) => {
    const text = props.info;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(prev => !prev);
    }

    const handleClick = (id) => {
        props.setTours(props.tours.filter(tour => tour.id != id))
    }

    return (
        <div className='bg-[#88b8c2] rounded-3xl p-3 md:p-5 flex flex-col justify-center items-center min-h-fit w-full space-y-5'>
            <div className='flex flex-col lg:flex-row justify-around items-center lg:items-start w-full h-[85%] lg:space-x-5'>
                <img className='w-full lg:w-1/2 rounded-md rounded-tl-3xl' src={props.image} alt="destination landscape" />
                <div className='text-left font-bold text-[#444957]'>
                    <h3 className='font-bold text-xl'>{props.name}</h3>
                    <h4 className='text-red-600 text-md text-md mb-5 bg-[#fdf6d9] w-fit p-1 rounded-r-full'><span className='font-extrabold'>$</span>{props.price}</h4>
                    <p className='text-sm lg:text-base font-semibold'>{isReadMore ? text.slice(0, 200) : text}
                        <span onClick={toggleReadMore} className='text-[#fdf6d9]'>
                            {isReadMore ? "...read more" : " show less"}
                        </span>
                    </p>
                </div>
            </div>
            <button type="button" className='bg-[#fdf6d9] px-3 py-2 text-md font-semibold rounded-3xl text-red-600 hover:bg-[#ecdebf]' onClick={() => handleClick(props.id)}>Not Interested</button>
        </div>
    )
}

export default Listitem