
 // !!!!! ----------------- task - 1---------------------

 let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 for(let i = 0; i<nums.length; i++){
     console.log(nums[i]);
 }
 
  /// or  : 
 for(let i = 1; i<=10; i++){
     console.log(i);
 }
 
 
 
 
 // ? ---------------------- task -2 --------------
 
 
 
 for (let i = 0; i<100; i++){
     if (i%2 == 0)
     console.log(i);  
 }
 
 for(let i = 0; i<10; i++){
 
 }
 
 
 
 // !@!!!! ----------- task - 3 -----------------------

 let a = 10
 let b = ""
 
 for (let i = 1; i<=a; i++){
     for (let j = 1; j<=i; j++){
         b += ("*");
     }
     b += "\n"
 }
 
 console.log(b);