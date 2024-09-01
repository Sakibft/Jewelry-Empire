import React from 'react';
import Title from '../Shared/Title';
import women from '../../src/image/women.png'
import man from '../../src/image/man.png'
import kid from '../../src/image/kid.png'
import { FiChevronRight } from 'react-icons/fi';
// genderData
const genderDaTa = [
    {
        image: women , 
        gender: "Women",
    },
    {
        image: man , 
        gender: "Man",
    },
    {
        image: kid, 
        gender: "KIds",
    },
]
const ShopBYGender = () => {
const title = "Shop by Gender";
const subTitle = "Browse through your favourite categories. We`ve got them all!";
    return (
        <div>
            <Title title={title} subTitle={subTitle}></Title>
            {/* Gender card */}
            <div className=' flex justify-center items-center '>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-10'>
                {
                    genderDaTa.map((item,inx)=>(
                        <div key={inx} className='w-[420px] h-[333px] border border-gray-500 hover:border-gray-400 duration-300 rounded-md space-y-4 '>
                            <img src={item.image} alt="" />

                            <div className='flex justify-between  px-3'>
                                <h1 className='text-textYellow font-semibold text-lg'>{item.gender}</h1>
                                <p className='text-smTexColor flex justify-center items-center '>Exploremore <FiChevronRight className='mt-1' />
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default ShopBYGender;