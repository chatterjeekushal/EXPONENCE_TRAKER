import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTranjasan } from '../features/tranjasan/Tranjasan';

function Tranjasanhhistoy() {
    const tranjasans = useSelector(state => state.tranjasans);
    const dispatch = useDispatch();

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-4">
            <div className="text-gray-800 text-lg font-semibold mb-4">Transaction History</div>
            <ul className="space-y-2">
                {tranjasans.map((tran) => {
                    // Ensure tran.amount is a string and trim any extra spaces
                    const amountStr = String(tran.amount).trim();
                    
                    // Determine background color based on amount
                    const bgColorClass = amountStr.startsWith('+') ? 'bg-green-100' : 'bg-red-100';
                    
                    return (
                        <li
                            key={tran.id}
                            className={`flex items-center justify-between p-2 border-b border-gray-200 ${bgColorClass}`}
                        >
                            <div>
                                <p className="text-gray-800 font-semibold">{tran.text}</p>
                                <p className="text-gray-600">{amountStr}</p>
                            </div>
                            <button
                                onClick={() => {
                                    dispatch(removeTranjasan(tran.id));
                                    console.log(tran.id, "tran id");
                                }}
                                className="text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Tranjasanhhistoy;
