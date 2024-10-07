import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTranjashan } from '../features/tranjasan/Tranjasan';
import { countercontext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import serviceInstance from '../appwrite/appdata';
import authservice from '../appwrite/auth';


const NewTransaction = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  
  
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
      try {
        const postData = await serviceInstance.createPost({
          id: currentUser.$id,
          text: input,
          amount: parsedAmount,
          status: true,
          userblance: userAmountContext.useramount+Number.parseInt(amount, 10),
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
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-4">
      <div className="mb-4">
        <p className="text-gray-600 mb-4">Balance: {userAmountContext.useramount}</p>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter description"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={addTransactionHandler}
            >
              Add Income
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={exTransactionHandler}
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTransaction;
