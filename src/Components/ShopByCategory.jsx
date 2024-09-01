import React from 'react';
import Title from '../Shared/Title';
import i1 from '../../src/image/i11.png'
import i2 from '../../src/image/i22.png'
import i3 from '../../src/image/i33.png'
import i4 from '../../src/image/i44.png'
import i5 from '../../src/image/i55.png'
import i6 from '../../src/image/i66.png'
import i7 from '../../src/image/i77.png'
import i8 from '../../src/image/i88.png'
import i9 from '../../src/image/i99.png'
import i10 from '../../src/image/i1010.png'
import { FiChevronRight } from 'react-icons/fi';

// AlCategory
const  category = [ 
    {
        image: i1,
        title: "Earring"
    },
    {
        image: i2 ,
        title: "Gold Earring"
    },
    {
        image: i3,
        title: "Wedding Ring"
    },
    {
        image: i4,
        title: "Gold Neckless"
    },
    {
        image: i5,
        title: "Bracelets"
    },
    {
        image: i6,
        title: "Neckwear"
    },
    {
        image: i7,
        title: "Nose Pin"
    },
    {
        image: i8 ,
        title: "Dimond Necklace"
    },
    {
        image: i9,
        title: "Gold Coins"
    },
    {
        image: i10,
        title: "New Earrings"
    },
]
const ShopByCategory = () => {
const title = 'Shop by category'
const subTitle = 'Browse through your favourite categories. We`ve got them all!'

    return (
        <div>
             <Title title={title} subTitle={subTitle}></Title>

         <div className='flex justify-center items-center'>
         <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-x-[60px] gap-2 md:gap-y-4'>
                {
                    category.map((item,index) => (
                        <div key={index} className='w-[228px] h-[276px] border border-gray-500 rounded-xl p-[1px] cursor-pointer hover:border-gray-300 duration-300'>
                            <img src={item.image} alt=""  
                            className='bg-cover'
                            />
                            
                            <p className='text-textYellow font-semibold font-inter text-center '>{item.title}</p>
                            <p className='text-smTexColor flex justify-center items-center '>Explore <FiChevronRight className='mt-1' />
                            </p>
                        </div>
                    ))
                }
             </div>
         </div>
        </div>
    );
};

export default ShopByCategory;