// import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';

// const Checkout = () => {
//   // const history = useHistory();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');


//   const toast = useToast();
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   const handleCardNumberChange = (e) => {
//     setCardNumber(e.target.value);
//   };

//   const handleExpiryDateChange = (e) => {
//     setExpiryDate(e.target.value);
//   };

//   const handleCvvChange = (e) => {
//     setCvv(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast({
//             title: ` Order Successfull `,
//             status: "success",
//             duration: 3000,
//             isClosable: true,
//           });
//     // Submit the form data to the server and redirect the user to the confirmation page
//     // You can use an API to submit the form data to your backend server and handle the response accordingly
//     // After a successful submission, redirect the user to the confirmation page
//     // history.push('/confirmation');
//   };

//   return (
//     <div>
//       <h1>Checkout Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" value={name} onChange={handleNameChange} required />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <div>
//           <label htmlFor="address">Address</label>
//           <input type="text" id="address" value={address} onChange={handleAddressChange} required />
//         </div>
//         <div>
//           <label htmlFor="cardNumber">Card Number</label>
//           <input type="text" id="cardNumber" value={cardNumber} onChange={handleCardNumberChange} required />
//         </div>
//         <div>
//           <label htmlFor="expiryDate">Expiry Date</label>
//           <input type="text" id="expiryDate" value={expiryDate} onChange={handleExpiryDateChange} required />
//         </div>
//         <div>
//           <label htmlFor="cvv">CVV</label>
//           <input type="text" id="cvv" value={cvv} onChange={handleCvvChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Order Successfull
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Your Order will be delivered soon!
      </AlertDescription>
    </Alert>
  );
};

export default Checkout;