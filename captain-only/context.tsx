import React, {useState} from 'react';


const userType = {
    CHILD: "Child",
    ADULT: "Adult"
}

export const UserContext = React.createContext(null);

export const UserProvider = (props) => {
	const [ store, setStore ] = useState({
		userType: userType.CHILD
	});

	const [ actions, setActions ] = useState({
		setAdult: user => setStore({ ...store, userType: userType.ADULT }),
        setChild: user => setStore({ ...store, userType: userType.CHILD })
	});
	
	return (
		<UserContext.Provider value={{ store, actions }}>
			{props.children}
		</UserContext.Provider>
	);
}