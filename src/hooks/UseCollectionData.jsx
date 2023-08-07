import { useEffect, useState } from 'react';
import { onSnapshot } from "firebase/firestore";

function UseCollectionData(queryStatement) {

    // console.log("sasiiiiiiiiiiiiiiiiii") 
    const [state,setState] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setIsLoading(true); 
        setError(null); 
        // console.log( JSON.stringify( queryStatement))    
        const unsubscribe = onSnapshot(queryStatement, (snapshot) => {
            var listOfResponseRows = snapshot.docs.map((doc) => { 
                return  { id: doc.id, ...doc.data() }
            });
            setState(listOfResponseRows);
            setIsLoading(false);
        },
        (error)=>setError(error));

        return () => { if (unsubscribe) { unsubscribe(); }  };
    },[])

  return [state,isLoading,error]
}

export default UseCollectionData; 