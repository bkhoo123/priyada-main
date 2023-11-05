// "use client"
// import React, { useState, useEffect } from 'react';
// import NavBar from '@/components/NavBar';
// import Footer from '@/components/Footer';
// import axios from 'axios';
// import { UserGlobalState } from '@/context/UserContext';



// // *************************************************************************************


// const UserAuthorizationForm = () => {
// const { sessionUser } = UserGlobalState();


//   // Sample user state, replace this with your user object from the state management
//   const [user, setUser] = useState({
//     username: 'exampleUser',
//     authorization: 'user', // User authorization level (e.g., 'admin', 'user', etc.)
//     level: 1, // Level of the user
//   });

//   // Function to update user object
//   const updateUser = (newUser) => {
//     setUser(newUser);
//     // Here, you could add code to make API calls or handle state management for the updated user object
//     console.log('Updated user:', newUser);
//   };

//   const handleAuthorizationChange = (e) => {
//     const updatedUser = { ...user, authorization: e.target.value };
//     updateUser(updatedUser);
//   };

//   const handleLevelChange = (e) => {
//     const updatedUser = { ...user, level: Number(e.target.value) };
//     updateUser(updatedUser);
//   };

//   return (
//     <div>
//       <h2>User Authorization Form</h2>
//       <form>
//         <div>
//           <label>Authorization:</label>
//           <select value={user.authorization} onChange={handleAuthorizationChange}>
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//             {/* Add other authorization levels as needed */}
//           </select>
//         </div>
//         <div>
//           <label>Level:</label>
//           <input
//             type="number"
//             value={user.level}
//             onChange={handleLevelChange}
//           />
//         </div>
//       </form>
//       <div>
//         <h3>Updated User Information:</h3>
//         <p>Username: {user.username}</p>
//         <p>Authorization: {user.authorization}</p>
//         <p>Level: {user.level}</p>
//       </div>
//     </div>
//   );
// };

// export default UserAuthorizationForm;
