import React from 'react';
import { useSelector } from 'react-redux';

function TranjasanHistory() {
    const tranjasans = useSelector(state => state.tranjasans);
    // console.log("tranjasans", tranjasans);

    // Check if tranjasans.tranjashan_data exists and is an array
    const tranjasanData = tranjasans.tranjashan_data || [];

    console.log("hello");
    

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Tranjasan History</h1>
        {tranjasanData?.map((tranjasan, index) => (
            <div key={index} className={`mb-4 p-4 rounded-lg shadow-md ${tranjasan.exstatus ? 'bg-green-200' : 'bg-red-200'}`}>
                <h2 className="text-xl font-semibold">{tranjasan.exponencename}</h2>
                <p className="text-lg">₹{tranjasan.exponenceamount}</p>
                <span className={`inline-block mt-2 px-2 py-1 text-xs font-bold text-white rounded-full ${tranjasan.exstatus ? 'bg-green-500' : 'bg-red-500'}`}>
                    {tranjasan.exstatus ? 'Add money' : 'Reduce money'}
                </span>
            </div>
        ))}
        
    </div>
    
    );
}

export default TranjasanHistory;
