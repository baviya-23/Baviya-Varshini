//shopping cart
let cart_itemname=["Remote car","Ball","Cricket bat","Hot wheeles"];
let cart_itemprice=[500,100,300,800];
let total=0;

for(let i=0;i<cart_itemprice.length;i++){
    total=total+cart_itemprice[i];
}
for(let i=0;i<cart_itemprice.length;i++){
    console.log(cart_itemname[i]+":$"+cart_itemprice[i]);
}
console.log("Total:$",total);

