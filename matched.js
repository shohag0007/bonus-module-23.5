const numbers = [12, 13, 55, 66, 100];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){

}

const products = [ 
    
    {id: 1, name: 'xiami phone one night', price: 19000},
    {id: 2, name: 'iphone', price: 100000},  
    {id: 3, name: 'mac book air', price: 200000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 50000},
    {id: 5, name: 'Dell inspiron laptop', price: 60000},
    {id: 6, name: 'samsung note 7', price: 29000},
    {id: 7, name: 'Nokia old aged phone gone', price: 19000},
    {id: 8, name: 'walton phone', price: 19000},
    {id: 9, name: 'phone one', price: 20000},

];



function matchedProducts(products, search){
    const matched = [];
    
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
   const result = matchedProducts(products, 'laptop');
   console.log(result);
