import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTranjashan } from '../features/tranjasan/Tranjasan';
import { countercontext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import serviceInstance from '../appwrite/appdata';
import authservice from '../appwrite/auth';
import { TextField, Button, Box } from '@mui/material';


const NewTransaction = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [userblance, setUserblance] = useState(0);
  
  
  const dispatch = useDispatch();
  const userAmountContext = useContext(countercontext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await authservice.getCurrentUser();
      setCurrentUser(user);
      
      // You can fetch the list of documents here if needed
      if (user) {
        const listDocument = await serviceInstance.listDocuments("userID", user.$id);
        // console.log("List document:", listDocument);
        dispatch(addTranjashan(listDocument.documents));
        
      }

    };

    fetchUserData();
  }, []);

  const addTransactionHandler = async (e) => {
    e.preventDefault();
    
    const parsedAmount = Number.parseInt(amount, 10);


    if (input && !isNaN(parsedAmount) && currentUser) {


      const blancelist=await serviceInstance.listDocuments("userID", currentUser.$id);
      

      try {
        const postData = await serviceInstance.createPost({
          id: currentUser.$id,
          text: input,
          amount: parsedAmount,
          status: true,
          userblance:null,
        });

        console.log("Post data:", postData);
        
      

        const listDocument = await serviceInstance.listDocuments("userID", currentUser.$id);
        // console.log("List document:", listDocument);
        dispatch(addTranjashan(listDocument.documents));


        // Clear inputs after adding transaction
        setInput('');
        setAmount('');
      } catch (error) {
        console.error("Error adding transaction:", error);
      }
    }
  };



  const exTransactionHandler = async (e) => {
    e.preventDefault();
    
    const parsedAmount = Number.parseInt(amount, 10);
    
    if (input && !isNaN(parsedAmount) && currentUser) {
      try {
        const postData = await serviceInstance.createPost({
          id: currentUser.$id,
          text: input,
          amount: parsedAmount,
          status: false,
        });

        console.log("Post data:", postData);
        
      

        const listDocument = await serviceInstance.listDocuments("userID", currentUser.$id);
        // console.log("List document:", listDocument);
        dispatch(addTranjashan(listDocument.documents));

        console.log("rana");
        


        // Clear inputs after adding transaction
        setInput('');
        setAmount('');
      } catch (error) {
        console.error("Error adding transaction:", error);
      }
    }
  };


  return (
    <Box className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-4">
    <form className="space-y-4">
      <div>
        <TextField
          label="Enter description"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <TextField
          label="Enter amount"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <Button
          variant="contained"
          color="success"
          onClick={addTransactionHandler}
          className="w-full md:w-1/2"
        >
          Add Income
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={exTransactionHandler}
          className="w-full md:w-1/2"
        >
          Add Expense
        </Button>
      </div>
    </form>
  </Box>
  );
};

export default NewTransaction;
