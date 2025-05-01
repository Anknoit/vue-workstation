 

// var a=10, b=9; 

// var c = a*b; 

// document.getElementById('click').innerHTML=c; 

function firstStringAllString() { 

    var x = 2, y = 5; 
    
    var z = "3" + x + y; 
    
    var m = x + y + "3"; 
    
    document.getElementById("click").innerHTML = z + "if the first numeric variable is string remaining variable will be treated as strings too"; 
    
    document.getElementById("click2").innerHTML = m + "if the numeric variable is in string and is placed in last all the numeriv variables will be treated as number and mathematical operations can be done in them." 
    
    } 
    
    //Writing in document - writing in the page body 
    
    document.write("Hi, I am document.write() I write stuff in the main body") 
    
    //1. CONSOLE API 
    
    //Writing in browser's console  
    
    console.log("Hi, I am console.log() I write stuff in console"); 
    
    console.log("I am a string", 4 + 6, "the person on left is numeric") 
    
    //Giving out warning in console - help while debgging cases and give out warning for developers convinience 
    
    console.warn("Hi I am console.warn(), I give warning in yellow"); 
    
    //Giving out Error message 
    
    console.error("Hi I am console.error(), I give errors in red"); 
    
    //Assertion - Throws error in console if assertion is wrong 
    
    console.assert(3==(2-1)) 
    
    //Clearing stuff in console 
    
    // console.clear(); 
    
     
    
    // 2. JavaScript DataTypes - You can print this directly from the console, using console.log() 
    
    // Variables - always think of themas buckets 
    
    // write a function that will swap the value of a and b 
    
    function swap(){ 
    
     var a = 8; //bucket 1 
    
     var b = 3; //bucket 2 
    
     //here 
    
     var c =b; //bucket 3 
    
     a = b; 
    
     b = c; 
    
     console.log("a is" + a); 
    
     console.log('b is '+ b); 
    
     } 
    
     //Numbers 
    
     var num = 32; 
    
        var num1 = 68.10; 
    
     //Strings 
    
     var str = "This is a string"; 
    
     var str2 = 'This is a string in single quote'; 
    
     //Objects -  
    
     var marks = { 
    
     Ankit: 100, 
    
     Ritu:23, 
    
     Mummy: "Fail" 
    
     }; 
    
     //marks.Ankit - accessing objects 
    //Booleans 
    
     var tr = true; 
    
     var fl = false; 
    
     //Undefined and null - both are different 
    
     var undVar = undefined; 
    
     var und_noValueassigned; 
    
     console.log(undVar, und_noValueassigned); 
    
     var emptyValue = null; //User declare that value will be null/empty 
    
     
    
     //Two types of datatypes - Primitive and Reference 
    
     //     1. Primitive = undefined, null, number, String, Boolean, Symbol 
    
     //     2. Reference = Array, Object 
    
     //Diiference between var,let,const 
    
    // var = global declaration and in function declaration(cannot be accessed outside), had some issues 
    
     //Global scope, updated and redeclared 
    
     // let = improved var, once assigned value can be reassigned, block { } scoped 
    
     //can be updated but not redeclared 
    
     //updatinga variable 
    
     //let greet = "Hello!" ---> greet = "Helo again" 
    
     //redeclaring variable not allowed 
    
     // const = contains constant value, block scope {}, no UPDATE AND REDECLARE 
    
    // 3. Functions 
    
     function avg(a,b){ 
    
     return (a+b)/2; 
    
     } 
    
     //anonymous functions 
    
     let ano_func = function(k,l){return k*l}; 
    
     //use it: ano_func(5,10) 
    
     //OUTPUT: 12 
    
     //You dont have to name function assigned to variable , use variable instead to invoke the function 
    
     //Arrow function = to assign a function to a variable 
    
     const arr_func = (w,e) => w + e; 
    
     //Use it: arr_func(5,5) 
    
     //OUTPUT: 10 
    
     // const <function_variable_name> = (arguments/parameters) => {operation}; 
    
    //Self Invoking function - execute without calling 
    
     (function sel_invoke(){ 
    
     let x = "Hi I am a self invoking whore, Kill me bitch! <br>"; 
    
     console.log(x); 
    
     document.write(x); 
    
     }()); 
    
    // 4. Loops 
    
     //for loop - for iterating over the elements of array 
    
     let arr = [1,2,3,4,5,6,7,8,9]; 
    
     let arr_forEach = [10,20,30,40,50,60,70,80,90] 
    
     for(i=0; i< arr.length; i++){ 
    
     console.log(arr[i]); 
    
     } 
    
     //another method to iterate over the elements of array is 
    
     //Here we create a function which takes "elements" of array and log it in console 
    
     arr_forEach.forEach(function(elements){ 
    
     console.log(elements); 
    
     }); 
    
     //while loop - here the iteration will take place till the cnsition is satisfied 
    
     //USED WHEN STATE OF OF CONDITION IS TRUE 
    
     //ex. keep on looping till the player is alive 
    
     //ex JOKE - a programmers wife said to him "While you are at the store bring some milk", and he never returned 
    
     //because the given condition never became false and he was at store and he kee on looping - infinite loop 
    
     let j =0; 
    
    while(j<arr.length){ 
    
     console.log(arr[j]); 
    
     j++; 
    
     } 
    
     //do-while - here even though m(10)>arr.length(7) but still one loop will take place because do is asking it to do so 
    
     let m= 10; 
    
     do{ 
    
     console.log(arr[m]); 
    
     }while(m<arr.length); 
    
     //continue and break 
    
     //continue - it means "SKIP" this particular iteration and move on 
    
     // FOR LOOP - USED FOR ITERATING OVER  
    
     for(q=0; q<arr_forEach.length; q++){ 
    
     if(q==4){ 
    
     continue; 
    
     } 
    
     console.log(arr_forEach[q]) 
    
     } 
    
     // 10 20 30 40 60 70 80 90 - no 50 because @q==4 there is 50 and here continue means skip that iteration(whic is 50) and move on 
    
     //break - stop iterating if the condition is satisfied 
    
     for(p=0;p<arr.length;p++){ 
    
     if(p==3){ 
    
     break; 
    
     } 
    
     console.log(arr[p]); 
    
     } 
    
    //1 2 3 
    
    // 5. Array Methods - YOu can check any command in the browsers console directly 
    
        myArr = ["Ankit", true, 389, "456"]   
    
        console.log(myArr) 
    
        // myArr.push() Add element to theendof the list 
    
        // myArr.pop() To pop/remove the last element of Array 
    
        // myArr.shift() To remove the first element 
    
        // myArr.sort() To sort in ascending  
    
        // myArr.unshift("Mango")  Will add Mango in array in the begining 
    
        myArr.includes("Ankit"); //Will return TRUE/FALSE wether array has Ankit or not 
    
    // 6. String Methods 
    
        myString = "Waah Bhaiya, Ankit wo dekh chidiyaan! toba toba" 
    
        // mystring.indexOf("Ankit"); //Returns position of FIRST occurence only of word Ankit 
    
        // mystring.lastIndexOf("toba"); //Returns position of LAST occurence of word toba 
    
        // mystring.slice(0,3) //returns string from beggining to index positionn 2 (includes 0, excludes 3) 
    
            //slice(a,b) --> b-a = no. of characters we willbe slicing from begining or end depending on sign(+/-), starting from a 
    
        // mystring.replace("Ankit", "ritu") only replace first occurence 
    
     
    
    // 7. DOM MANIPULATION - Document Object Model 
    
        //DOM METHODS 
    
        document.getElementById("click").style.border='2px solid blue'; 
    
     
    
    // 8. EVENTS 
    
    //document on loading - does shit after loading the page 
    
    window.onload = function(){ 
    
        // alert("Document was loaded!"); 
    
    } 
    
    //Adding an event on button that displays no. of clicks on the document 
    
    clickBtn = document.getElementById('clickButton'); 
    
    clickBtn.addEventListener('click', function(){ 
    
        let x= document.getElementById('clickMsg'); 
    
        x.innerHTML = 'Clicked' 
    
    }) 
    
    // 9. setTimeout - to execute a func at a given interval = Scheduling 
    
    setTimeout(() => { 
    
        console.log("setTimeout fired after 2secs") 
    
    }, 2000); 
    
    //setinterval = doing something repeatedly in a given interval 
    
    clr = setInterval(()=>{ 
    
        console.log("setInterval will keep on executing after every sec") 
    
    },1000); 
    
    clearInterval(clr); 
    
    // to stop both 
    
    // clr = setInterval(function, 2000) 
    
    // clearInterval(clr) ot clearTimeout(clr) 
    
     
    
     
    
    // 10. Local Storage - stores in local computer, every domain and sub domain has its own local storage 
    
    localStorage.setItem('firstname', 'Ankit'); //('key','keyvalue') - storing value 
    
    local_name = localStorage.getItem('firstname'); //Retreiving item 
    
    document.getElementById('firstName_local').innerHTML = local_name + " - This name is retreived from localstorage"; 
    
    localStorage.removeItem('firstname'); //removing item ('key') 
    
    // localStorage.clear //clear all local storage value 
    
    // 12. IF-ELSE Control Flow with Comparators and equality 
    
    var a = 2; 
    
    var b = '2'; 
    
    if (a===b){ 
    
        console.log("a is equal to b both in value and data type") 
    
    }else{ 
    
        console.log('a is NOT equal to b both in value and data type') 
    
    } 
    
    // === checks value and data type equality 
    
    // == checks value equality 
    
      
    
    // 13. OBJECTS & CONSTRUCTORS 
    
        //objects - to create single entity with give properties and methods 
    
        //constructors - used when we need multiple objects with same structure and behaviour (uses this.propertis/method) 
    
            // funstion Person(name, age, sex){ 
    
            //     this.name=name, 
    
            //     this.age=age, 
    
            //     this.sex=sex, 
    
            //     this.sayhello = function(){ 
    
            //         console.log("Hello my name is"+ this.name) 
    
            //     } 
    
            // } 
    
                // creating multiple instances of object using constructor 
    
                    // var newPerson = new Person("Ankit", 21, "M") 
    
                    // var newPerson1 = new Person("Ritu", 25,"F")......etc 
    
    // 14. switch statement 
    
        // var buttonSelect = document.querySelectorAll('input.shoo'); 
    
        // for (i=0; i<buttonSelect.length; i++){ 
    
        //     document.querySelectorAll('.shoo')[i].addEventListener('click', function(){ 
    
        //         // console.log(this.value); 
    
        //         var buttonValue = this.value; 
    
        //         switch (buttonValue) { 
    
        //             case "INSHALLAH!": 
    
        //                 var audio = new Audio('audio/inshah.m4a') 
    
        //                 audio.play() 
    
        //                 this.style.border = 'none' 
    
        //                 break; 
    
        //             case "SMALL SHOO!": 
    
        //                 var audio = new Audio('audio/smallShoo.m4a') 
    
        //                 audio.play() 
    
        //                 this.style.border = 'none' 
    
        //                 break; 
    
        //             case "BIG SHOOOOOOOO!!!!": 
    
        //                 var audio = new Audio('audio/bigShoo.m4a') 
    
        //                 audio.play() 
    
        //                 this.style.border = 'none' 
    
        //                 break; 
    
        //                 default: 
    
        //                     console.log("Invalid || ERROR 404") 
    
        //                 break; 
    
        //         } 
    
        //     }) 
    
        // } 
    
     
    
     
    
    // 15. KEY DOWN KEYBOARD EVENTS 
    
    document.addEventListener('keydown',function(e){ 
    
        console.log("The button that triggered the even was " + e.key); 
    
        keyLog.push(e.key) 
    
    }) 
    
        //the function takes in a parameter e/event which lets us tap into the even that triggered that function 
    
        //this means e will let us know what triggered the "keydown" event listener - (such as key name etc.) 
    
        //e.key - here key is one of many properties that e lists in the console you can go and see other properties of the captured event 
    
    //16. CALLBACK FUNCTION 
    
        document.addEventListener('click', function clickDoc(){console.log("Button was clicked")}) 
    
            //Here addEventlistener - Higher order function 
    
                // clickDoc function - callback function - as it waits for an event to get triggered in this case click event 
    
     
    
    // GENERAL 
    
    //1.Random 
    
    console.log(Math.random()); //upto 16 demcimal places from 0 to 0.9999999999999999 
    
        //Generating random between 0 to n 
    
            //  (Math.random()*n) + 1 
    
    //2. Roundup //Mat.floor(n) 
    
    //3. appendchild and append 
    
     
    
     
    
    //4. DOM - Document Object Manipulation 
    
        //Objects are elements used in HTML page 
    
        //Objects have - take example of car object - car properties (color,no.of seats, length etc.) || Methods (.drive(), .brake() etc) 
    
            // i. Methods - function that it can do (.click(), .appendChild()) 
    
            // ii. Properties - anything that can be used to describe the object || Settingor changing properties (.color ="red", .height="183") 
    
     
    
     
    
    //5. queurySelector() & querySelectorAll() - MOSTLY USED compared to selectById and selectByClass 
    
        //i. querySelector('h3') - will select the first occurence of h3 in the page 
    
        //ii. querySelctorAll('h3) - will select all occurence of query ('h3') in page and store them in a array/node through which any node of h3 can be accessed via there index position 
    
            //ex. document.querySelectorAll('h3')[3] - will select 4th occurence of h3 in the page 
    
     
    
     
    
    //6. Selecting stuff using class or id name 
    
        //selectors follow hierarcy i.e document.querySelector(#listToy a) - will select a from a list tag which has an id = 'listToy' 
    
        //same can be used to create an element . document.CreateElement('div#textContainer') - will create an div with id='textContainer'  
    
         
    
    //7. Toggle with class/id and css 
    
        //<hr class='heading'> 
    
        //document.querySelector('h3').classList - lists the class associated with h3 and the name of the class --> class value='heading' 
    
        //document.querySelector('h3').classList.add('visible') - adds another class to the tag --> class value='heading visible' --> <h3 class="heading visible"> 
    
        //document.querySelector('h3').classList.remove('visible') - removes class from the tag --> class value='heading' --> <h3 class="heading"> 
    
        //document.querySelector('h3').classList.toggle('visible') - add/remove if not already || ON/OFF class in the css file --> class value='heading visible' --> <h3 class="heading visible"> 
    
    //8.innerHTMl and textContent 
    
        // innerHTMLgives you everything between a tag specified 
    
            //can add a whole tag in it  
    
            // <h3><b><strong>Wallallah</strong></b></h3> 
    
            // document.querySelector('h3').innerHTML ----> <b><strong>Wallallah</strong></b> 
    
            // document.querySelector('h3').innerHTML = "<h1>Another Wallallah</h1>" 
    
            // it will replace the stuff inside and inser whatever you feed inside innerHTML 
    
        // textContent gives you only the text no matter how many tags are there inside the specified tag 
    
            //can only manipulate texts 
    
            // <h3><b><strong>Wallallah</strong></b></h3> 
    
            // document.querySelector('h3').textContent ----> "Wallallah" 
    
    //9. Manipulating Attributes 
    
            //element.attributes - List all the attribute 
    
            //element.getAttribute('href') - return the value of href attribute i.e. a link to somewhere 
    
            //element.setAttribute('href', "www.google.com") - set the value of href by replacing the previous one 
    
    //10. addEventListener(event, function) 
    
        /* Please note that while anonymous and arrow functions are similar,  
    
        they have different this bindings. While anonymous (and all traditional JavaScript functions) create 
    
        their own this bindings, arrow functions inherit the this binding of the containing function. 
    
        That means that the variables and constants available to the containing function are also available to  
    
        the event handler when using an arrow function.*/ 
    
        //Can add a fucntion as a parameter by writing fucntion once and using it multiple times 
    
            //use of operators 
    
            function add(num1, num2){ 
    
                return num1+num2; 
    
            } 
    
            function multiply(num1, num2){ 
    
                return num1*num2; 
    
            } 
    
            function divide(num1, num2){ 
    
                return num1/num2; 
    
            } 
    
            function calculator(num1, num2, operator){ 
    
                return operator(num1, num2); 
    
            } 
    
            // calculator(2,3,add); 
    
            // 5 
    
            // we use this to make a function once and use it in another function multiple times 
    
    // # TESTING - 
    
            //use debugger; function name to see the function's working 
    
            //use step or F9 to move ahead step by step to see the working 