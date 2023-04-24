import React, {useState, useContext, useEffect} from 'react';

 import {UserContext} from './context';


 function UserToogle() {
     const context = useContext(UserContext);

     const {actions, store} = context;

     const {setAdult, setChild} = actions;
     const {userType} = store;


     useEffect(() => {
         console.log(store);
     },[store]);

     return (



         <>
         <h2> user type: {userType}</h2>
         <button onClick={() => setChild()}>Set Child</button>
         <button onClick={() => setAdult()}>Set Adult</button>

         </>
     );
   };

   export default UserToogle