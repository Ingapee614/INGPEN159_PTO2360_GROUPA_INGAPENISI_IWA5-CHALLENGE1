let shipping =null;
let currency = 'R';
const customers = 1;                                                                                                                                                                                                                                                                                                                     
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence'
const NONE_SELECTED = 0;
let price=null;
const LOCATION='RSA';

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * parseInt(NONE_SELECTED); // Convert NONE_SELECTED to a number
const batteries = 35 * 2;
const pens = 5 * parseInt(NONE_SELECTED); // Convert NONE_SELECTED to a number
const cost= shoes +toys+ batteries + pens + shirts;


if (currency === 'R' && LOCATION==='RSA') {
  shipping = 400;}
  else
currency = '$'; // Set currency to '$' here or adjust it as needed
if (LOCATION === 'NAM' && currency === '$') {
    shipping = 600;
  
if(LOCATION!=='NAM'||LOCATION!== 'RSA') {
    shipping = 800;}}

if (cost >= 1000 && currency==='R') {
  if (LOCATION === 'NAM' || LOCATION==='RSA'&& customers==1) {
      shipping = 0; // Set shipping to 0
  }
}
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

if (LOCATION=== 'NK') {
  console.log(BANNED_WARNING);
} 
 price= cost+shipping;
  console.log('price',currency,price);