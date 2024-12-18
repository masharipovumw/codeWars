function solve(n, d){
    let arr = [n]

    for(let i = 1 ; i <=n ; i++){
         arr.push(d)
    }
    let num = 0
     for(let i = 0 ; i <= arr.length; i++){
       num ^=arr[i]
     }
     console.log(num)
}


function counter (text){ 
 solve = text.split("").reverse().join("")
 return solve
}

let text = 'ALGORITM TUIT UZ'

console.log(counter(text))




function explode(x){
     let [a,b] = x

     if(typeof a === 'number' && typeof b === 'number') return   new Array(a+b).fill(x)
     else if (typeof a ===  'number') return new Array(a).fill(x)
     else if(typeof b === 'number') return new Array(b).fill(x)

     return 'void'

}

let arr = [1,'a']
// console.log(explode(arr))




const  secondSymbol=(s, symbol)=> {
  return s.indexOf(symbol, s.indexOf(symbol) + 1)

}

console.log(secondSymbol('a','branch sd'))



function infected(s) {
     let continents = s.split('X')
     let totalPopulation = 0
     let infectedPopulation = 0
 
     for (let continent of continents) {
         if (continent.includes('1')) {
             infectedPopulation += continent.length
         }
         totalPopulation += continent.length
     }
 
     return totalPopulation === 0 ? 0 : (infectedPopulation / totalPopulation) * 100
 }
 
 let map = "01000000X000X011X0X"
 console.log(infected(map))



function bandNameGenerator(str) {
     str = str.toLowerCase()
  if(str.charAt(0) === str.charAt(str.length -1)){
     return `${str.charAt(0).toUpperCase()+str.substring(1)}${str.substring(1)}`
  }else{
     return `The ${str.charAt(0).toUpperCase() + str.substring(1)}`
  }
}

console.log(bandNameGenerator('Delphin'))



function isItANum(str) {
    let number = str.replace(/\D/g,'')

    if (number[0] !== '0'|| number.length !== 11){
     return 'Not a phone number'
    }
    return number
}
console.log(isItANum('efRFS:)0207ERGQREG88349F82!'))



function getStrings(city) {
     city = city.toLowerCase().replace(/[^a-z]/g, '')
     let letterCount = {}
     
     for (let char of city) {
         if (letterCount[char]) {
             letterCount[char]++
         } else {
             letterCount[char] = 1
         }
     }
     
     return Object.entries(letterCount)
         .map(([char, count]) => `${char}:${'*'.repeat(count)}`)
         .join(',')
 }
 

console.log(getStrings('Chicago'))


function solve(a,b){
    if(a == 0 || b == 0) return [a,b];
    if(a >= 2 * b) return solve(a - 2 * b, b);
    if(b >= 2 * a) return solve(a, b - 2 * a)
    return [a,b]
}
console.log(solve(6,19))


function scoreThrows(radii){
  let score = 0
  if(radii.every(num=>num<5)){
    score+=100
  }

  if (radii.length === 0) return  (0,'Empty list');
  for(let x  in radii){
    if(radii[x] > 10) {
      score +=0
    }
    else if(radii[x] >= 5 || radii[x] ===10 ){
      score +=5
    }
    else if (radii[x] >= 0 || radii[x] < 5 ){
      score +=10
    }

  }
  return score

}
console.log(scoreThrows([]))


function multi(arr) {
  let newarr = 1
  for(let x in arr){
    newarr *= arr[x]
  }
  return newarr
}
function add(arr) {
  let result = 0
  for(let x in arr){
    result += arr[x] 
  }
  return result;
}
function reverse(str) {
  return String(str).split('').reverse().join('')
}

console.log(reverse([9,8,5]))

function longestWord(stringOfWords) {
  let New_String = stringOfWords.split(' ')
  let result = ''
  for (let i = 0 ; i < New_String.length; i++){
    if(New_String[i].length >= result.length){
      result = New_String[i]
    }
  }
  return result
}
console.log(longestWord('red blue grey'))


function evenLast(numbers) {
  if(numbers.length === 0) return 0
  let cnt = 0

  for(let i = 0; i < numbers.length; i += 2){
    console.log(numbers[i])
    cnt +=numbers[i] 
  }
  return cnt * numbers[ numbers.length - 1 ]
}
console.log(evenLast[2, 3, 4, 5])


function zero(func) {return func ? func(0):0}
function one() {return func ? func(1):1}
function two() {return func ? func(2):2}
function three() {return func ? func(3):3}
function four() {return func ? func(4):4}
function five() {return func ? func(5):5}
function six() {return func ? func(6):6}
function seven() {return func ? func(7):7}
function eight() {return func ? func(8):8}
function nine() {return func ? func(9):9}

function plus(b) {return function( a ) { return a + b; }}
function minus(b) {return function( a ) { return a - b; }}
function times(b) {return function( a ) { return a * b; }}
function dividedBy(b) {return function( a ) { return Math.floor( a / b); }}


function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = '';

  while (i >= 0 || j >= 0 || carry) {
    const digit1 = i >= 0 ? parseInt(a[i]) : 0;
    const digit2 = j >= 0 ? parseInt(b[j]) : 0;
    
    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  return result;
}

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));




function score (dice)  {
  const diceRollsCounter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

  for (let i = 0; i < dice.length; i++) {
    diceRollsCounter[dice[i]]++
  }

  const totalScore = Object.values(diceRollsCounter).reduce((acc, cur, i) => {
    if (i === 0) {
      return acc + (cur % 3) * 100 + Math.trunc(cur / 3) * 1000
    } else if (i === 4) {
      return acc + (cur % 3) * 50 + Math.trunc(cur / 3) * 500
    } else {
      return acc + Math.trunc(cur / 3) * ((i + 1) * 100)
    }
  }, 0)

  return [totalScore, `Incorrect answer for dice = [${dice}]`]
}

console.log(score([4, 4, 4, 3, 3]))


function solve(Z) {
    let count = 0;
    if (Z === 0) return -1;

    let n = Math.abs(Z); 
    for (let X = 1; X * X <= n; X++) {
        if (n % X === 0) {
            let Y = n / X;
            if (X <= Y) { 
                count++;
                if (X !== Y) count++;
            }
        }
    }
    return count;
}

console.log(solve(-2)); 

function solve(n, a, b, c) {
    let All = a+b+c
    return All>= n ? "Yes" :"No"
} 
console.log(solve(120000,70000,40000,20000))


function solve(n,nums) {

    nums.sort(( a, b ) => a - b)

    return nums[nums.length - 2]
}
console.log(solve(6,[3,5,5,2,2,3])) //sirt = [2,2,3,3,5,5] nums = [0,1,2,3,4,5]= length -2


function solve(n) {
    let Answer = ''
    let numbers = [
        { "id": 1, "name": "bir" },
        { "id": 2, "name": "ikki" },
        { "id": 3, "name": "uch" },
        { "id": 4, "name": "to'rt" },
        { "id": 5, "name": "besh" },
        { "id": 6, "name": "olti" },
        { "id": 7, "name": "yetti" },
        { "id": 8, "name": "sakkiz" },
        { "id": 9, "name": "to'qqiz" },
        { "id": 10, "name": "o'n" },
        { "id": 20, "name": "yigirma" },
        { "id": 30, "name": "o'ttiz" },
        { "id": 40, "name": "qirq" },
        { "id": 50, "name": "ellik" },
        { "id": 60, "name": "oltmish" },
        { "id": 70, "name": "yetmish" },
        { "id": 80, "name": "sakson" },
        { "id": 90, "name": "to'qson" },
        { "id": 100, "name": "yuz" },
        { "id": 1000, "name": "bir ming" },
        { "id": 1000000, "name": "bir million" },
        { "id": 1000000000, "name": "bir milliard" }
    ]
    if (n <= 10 || n % 10 == 0){
        Answer = numbers.find(num => num.id == n).name
    }else if (n < 100){
        let tens = Math.floor( n / 10 ) * 10
        let unit = n % 10
        let tensName = numbers.find(num => num.id == tens).name
        let unitName = numbers.find(num => num.id == unit).name
        Answer  = `${tensName} ${unitName}`

    }
    return Answer
}

console.log(solve(100005))


function solve(n){
    let Newn = Math.floor(n/10);
    return Newn
}
console.log(solve(42))



function CamelCase(string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word , index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, '')
}
function Snake_Case(string) {
    return string && string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(a =>a.toLowerCase())
    .join('_')
    
}
console.log(CamelCase('This is a good example '))
console.log(Snake_Case('This is a good example '))



function tailSwap(arr) {
    let Newarr = arr.map(String =>String.split(':'))
    return [Newarr[0][0] +':'+ Newarr[1][1] , Newarr[1][0] + ':' + Newarr[0][1]]
}
console.log(tailSwap(['abc:123', 'cde:456']))


function evensAndOdds(num) {
    if(num % 2 == 0) return num.toString(2);
    else  return num.toString(16)
}
console.log(evensAndOdds(13))


const findSquares = (n)=>{
    let k = (n-1)/2
    let smaller = Math.pow(k,2)
    let Bigger =  (k + 1) * (k + 1)

    return n % 2 !=0 ? `${Bigger}-${smaller}`: 0
}
console.log(findSquares(81))



String.prototype.toBase64 = function () {
    return new Buffer(`${this}`).toString('Base64')
}
String.prototype.fromBase64 = function () {
    return new Buffer(`${this}`,'Base64').toString('ascii')
}

console.log(fromBase64("dGhpcyBpcyBhIHN0cmluZyEh"))
console.log(toBase64("this is a string!!"))