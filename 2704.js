//2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expectedVal){
            if(val == expectedVal){
                return true;
            }
            else{
                console.log("Not equal");   
            }
        },
        notToBe: function(expectedVal){
            if(val !== expectedVal){
                return true;
            }
            else{
                console.log("Equal");
            }
        }
    }
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
