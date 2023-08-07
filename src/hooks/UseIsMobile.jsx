import { useEffect, useState } from "react";


function UseIsMobile () {

    const [isMobile, setIsMobile] = useState(true);

    const changeScreen = () => {
        if (window.innerWidth < 700 ) setIsMobile(true) 
        else setIsMobile(false);
    }
    

    useEffect(() => {
        changeScreen();
        window.addEventListener('resize',changeScreen,false);
    }, )

    return isMobile;
}

export default UseIsMobile;