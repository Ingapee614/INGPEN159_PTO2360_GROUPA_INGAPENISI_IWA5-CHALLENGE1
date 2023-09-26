let shipping =null;
let currency = 'R';
let customers = 1;                                                                                                                                                                                                                                                                                                                     
let FREE_WARNING = 'Free shipping only applies to single customer orders'
let BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence'
let NONE_SELECTED = 0;
let price=null;
let country='RSA';



if (currency === 'R'&& country==='RSA') {
  shipping = 400;
}
else{
  currency = '$'; // Set currency to '$' here or adjust it as needed
  if (country === 'NAM' && currency === '$') {
    shipping = 600;
  }
  if(country!=='NAM'|| country!== 'RSA') {
    shipping = 800;}
  }
  
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * parseInt(NONE_SELECTED); // Convert NONE_SELECTED to a number
const batteries = 35 * 2;
const pens = 5 * parseInt(NONE_SELECTED); // Convert NONE_SELECTED to a number
const cost= shoes +toys+ batteries + pens + shirts;


if (cost <= 1000 && currency==='R') {
  if (location === 'NAM' || location==='RSA'&& customers==1) {
      shipping = 0; // Set shipping to 0
  
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (location === 'NK') {
  console.log(BANNED_WARNING);
} 
price= cost + shipping
  console.log('price',currency,price);