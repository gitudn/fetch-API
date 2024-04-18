// // App.jsx
// import React, { useState, useEffect } from 'react';
// import UserData from './UserData';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <UserData users={users} />
//     </div>
//   );
// }  

// export default App;






// //App.jsx considered final
// import React, { useState, useEffect } from 'react';
// import UserData from './UserData';

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <UserData users={users} />
//     </div>
//   );
// }

// export default App;






//App.jsx 
import React, { useState, useEffect } from 'react';
import UserData from './components/UserData';

const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]); // for managing and showing data dinamically with state managment (useState hook)

  //sincec API data return promise, used async await for handling promise 
    const fetchUsers = async (url) => { //async may contain asynchronous operations
      try {
        const res = await fetch(url); //res stores data from API , 
        const data = await res.json(); // data strores the data and converts into json using await (wait for the promise being resolved) 
        if (data.length > 0) {
            setUsers(data);
        }
        console.log(data);
    } catch (e) {
        console.error(e)
    }
}

    useEffect(() => { // useEffect gets triggered when the componenent is rendered for the first time and [] means that its effect occurs only once, when the component is mounted
      fetchUsers(API); //use API as an arugument for the parameter url in async
    }, [])

  return (
    <div>
      <UserData users={users} />
    </div>
  );
}

export default App;
