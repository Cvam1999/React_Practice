import { useState, useEffect } from 'react';
import { MENU_API } from '../utils/constant';

const userRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;
}

export default userRestaurantMenu;