
// getting local data
function LocalStorageGet (itemName) {
   
    const data = localStorage.getItem(itemName);
    if( data  ){ return JSON.parse(data);}
    else return null;
}


// setting local data
function LocalStorageSet (itemName, itemData) {
    const data = JSON.stringify(itemData);
    localStorage.setItem(itemName,data);
}


// deleting local data
function LocalStorageRemove (itemName) {
    localStorage.removeItem(itemName);
}


export { LocalStorageGet, LocalStorageSet, LocalStorageRemove };