import React from 'react';

function Shop_btn({btn_text,btn_color}) {
    return (
        <div className={`flex justify-center mt-6`}>
            <button className={` bg-${btn_color}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 bg-${btn_color}-700`}>
                {btn_text}
            </button>
        </div>
    );
}

export default Shop_btn;
