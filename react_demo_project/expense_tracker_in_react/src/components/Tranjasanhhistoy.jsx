import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
function TranjasanHistory() {
    const tranjasans = useSelector(state => state.tranjasans);
    // console.log("tranjasans", tranjasans);

    // Check if tranjasans.tranjashan_data exists and is an array
    const tranjasanData = tranjasans.tranjashan_data || [];

    console.log("hello");
    

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto">
        <Typography variant="h3" align="center" gutterBottom>
        Transaction History
        </Typography>
        <div className="h-96 overflow-y-auto">
            {tranjasanData?.map((tranjasan, index) => (
              
        <Box
        className={`mb-4 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${tranjasan.exstatus ? 'bg-green-300' : 'bg-red-300'}`}
    >
        <Typography variant="h5" className="font-semibold text-gray-800">
            {tranjasan.exponencename}
        </Typography>
        <Typography variant="h6" className="text-gray-600">
            ₹{tranjasan.exponenceamount}
        </Typography>
        <span
            className={`inline-block mt-3 px-3 py-1 text-xs font-bold text-white rounded-full ${tranjasan.exstatus ? 'bg-green-800' : 'bg-red-800'}`}
        >
            {tranjasan.exstatus ? 'Add Money' : 'Reduce Money'}
        </span>
    </Box>
            ))}
        </div>
    </div>
    
    );
}

export default TranjasanHistory;
