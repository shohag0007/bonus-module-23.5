const nayok = {
    name : 'sakib',
    id : 121,
    address : 'movie chinema',
    isSingle : true,
    friends : ['Apu', 'Razz', 'salman', 'aamir' ],
    movies : [{name: 'no-1', year : 2015}, {name : 'king khan', year : 2018}],
    act : function (){
        console.log('acting like sakib khan')
    },
    car : {
        brand : 'tesla',
        price : 50000000,
        made : 2025,
        manufacturer :{
            name : 'Elon Mask',
            ceo : 'tesla',
            country : 'USA',


        }
    }

}

// console.log(student.manufacturer);
console.log(nayok.act);
nayok.act();


function add(num1,num2){
  console.log(num1,num2);
   console.log(arguments);

  console.log(arguments[2]);

}

add(12,13,14,15);