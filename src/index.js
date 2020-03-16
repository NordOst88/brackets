module.exports = function check(str, bracketsConfig) {

for (let i = 0; i < str.length; i++) {             
    for (let j = 0; j < bracketsConfig.length; j++) { 
      if (str.includes(bracketsConfig[j].join(''))) {            
          str = str.replace(bracketsConfig[j].join(''), ''); 
           i = -1;
         continue;          
      };
    };
  };
  
  return str.length == 0 ? true : false;

};
