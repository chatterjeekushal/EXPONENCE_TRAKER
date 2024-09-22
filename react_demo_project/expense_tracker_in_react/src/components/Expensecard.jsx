import React from 'react'

function Expensecard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 mx-auto mt-4">
    <div className="mb-4">
      <p className="text-gray-600 text-sm">Income</p>
      <p className="text-2xl font-semibold text-green-600">$25</p>
    </div>
    <div>
      <p className="text-gray-600 text-sm">Expense</p>
      <p className="text-2xl font-semibold text-red-600">$15</p>
    </div>
  </div>
  
  )
}

export default Expensecard
