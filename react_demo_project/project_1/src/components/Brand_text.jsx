import React from 'react'
import shoesImage from "../assets/niki2.webp";
import Shop_btn from './Shop_btn';
function Brand_text({text_1,text_2,text_3}) {
    return (
        <div className="flex container mt-16">

            <div className=" w-[50%] ml-10 flex flex-col justify-start items-start">

                <div className='text-7xl font-bold'>{text_1}</div>
                <div className='text-7xl font-bold'>{text_2}</div>
                <div className='text-7xl font-bold'>{text_3}</div>

                <div className="text-justify mt-7 w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique culpa voluptatibus atque doloremque quo nostrum, pariatur expedita quam.
                    Lorem ipsum dolor sit amet.
                </div>

                <div className='flex gap-6'>

                <Shop_btn btn_text="shop now" btn_color="red" />
                <Shop_btn btn_text="catagory" btn_color="blue"/>

                </div>

            </div>

            <div>
                <img src={shoesImage} alt="shoes" width={"400px"} />
            </div>

        </div>
    )
}

export default Brand_text
