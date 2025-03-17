import { allHosts, Host, setAllHosts } from "./exports";

let down = false;
let oldField = "Name";

export function sortByAnyField(field: keyof Host) {

  if (field != oldField) {
    oldField = field;
    down = !down;
  } else {
    oldField = '';
    down = !down;
  }

  // localStorage.setItem("sortDown", down);
  // localStorage.setItem("sortField", field);
  // checkNotEmpty(addrsArray);

  let someArray = allHosts();
  if (field == 'IP') {
    someArray.sort((a, b) => sortIP(a, b, down));
  } else {
    someArray.sort((a, b) => byField(a, b, field, down));
  }
  
  setAllHosts([]);
  setAllHosts(someArray);
}

function byField(a:Host, b:Host, fieldName: keyof Host, down:boolean){
  if (a[fieldName] > b[fieldName]) {
    return down ? 1 : -1;
  } else {
    return !down ? 1 : -1;
  }
}

function sortIP(a:Host, b:Host, down: boolean) {
  const num1 = numIP(a);
  const num2 = numIP(b);
  if (down) {
    return num1-num2;
  } else {
    return num2-num1;
  } 
}

function numIP(a:Host) {
  return Number(a.IP.split(".").map((num) => (`000${num}`).slice(-3) ).join(""));
}