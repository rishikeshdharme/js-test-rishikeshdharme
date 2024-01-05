/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack =[];

   for( i=0; i<s.length;  i++){
   
    let x = s[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
          
            stack.push(x);
            continue;
        }
 
        
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
   
    return (stack.length == 0);
}
 

let s = "([{}])";
 

if (areBracketsBalanced(s))
    document.write("Balanced ");
else{
    document.write("Not Balanced ");
 

 

};

module.exports = { isValid };


