const sum_two = function (num1, num2) {
    let len;
    let shortest_number;
    let longest_number;
    let sum = 0;
    let strsum = "";
    let carry = 0;
    if (num1.length > num2.length) {
      len = num1.length;
      shortest_number = num2;
      longest_number = num1;
      shortest_number = shortest_number.padStart(len, "0");
    } 
    else if (num2.length > num1.length) {
      len = num2.length;
      shortest_number = num1;
      longest_number = num2;
      shortest_number=shortest_number.padStart(len,'0');
    } 
    else {
      longest_number = num1;
      shortest_number = num2;
      len=num1.length;
      
    }
    for (let i = len - 1; i >= 0; i--) {
      
      sum = +longest_number[i] + +shortest_number[i] + carry;
      if (i > 0) {
        if (sum > 9) {
          let x = sum % 10;
          strsum += x;
          carry = 1;
        } else {
          strsum += sum;
          carry = 0;
        }
      } else {
        let x1 = "";
        x1 += sum;
        x1 = x1.split("").reverse().join("");
        strsum += x1;
      }
    }
    strsum = strsum.split("").reverse().join("");

  return strsum;
    
  };
  
  console.log(sum_two("11", "123"));