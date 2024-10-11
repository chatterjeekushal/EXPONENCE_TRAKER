import React, { useState, useEffect } from 'react';
import authservice from '../appwrite/auth';
import serviceInstance from '../appwrite/appdata';
import { Card, CardContent, Typography } from '@mui/material';

function Expensecard() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const fetchUserData = async () => {
    try {
      const user = await authservice.getCurrentUser();
      const listDocument = await serviceInstance.listDocuments("userID", user.$id, true);

      const incomeList = listDocument.documents.filter((item) => item.exstatus === true);
      const totalIncome = incomeList.reduce((acc, element) => acc + element.exponenceamount, 0);
      setIncome(totalIncome);

      const expenseList = listDocument.documents.filter((item) => item.exstatus === false);
      const totalExpense = expenseList.reduce((acc, element) => acc + element.exponenceamount, 0);
      setExpense(totalExpense);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // Fetch user data initially
    fetchUserData();

    // Set up polling to fetch data every 5 seconds
    const intervalId = setInterval(fetchUserData, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 font-roboto">
    {/* Component 1: Income and Expense Summary */}
    <Card className="shadow-lg w-full border border-gray-200 rounded-lg">
      <CardContent className="space-y-4">
        <div>
          <Typography variant="body2  text-gray-600 text-2xl" color="textSecondary">
            Income
          </Typography>
          <Typography variant="h4" className="text-green-600 font-bold">
            ₹{income || 0}
          </Typography>
        </div>
        <div>
          <Typography variant="body2 text-2xl" color="textSecondary">
            Expense
          </Typography>
          <Typography variant="h4" className="text-red-600 font-bold">
            ₹{expense || 0}
          </Typography>
        </div>
      </CardContent>
    </Card>
  </div>
  );
}

export default Expensecard;
