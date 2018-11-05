// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'function' || obj === undefined){
    return undefined;
  }
  
  if (obj === null){
    return 'null';
  }
  
  let string='';
  if (typeof obj==='string'){
    return '"'+obj+'"';
  }  

  if (typeof obj==='number'|| typeof obj==='boolean'){
    return String(obj);
  }
  
  if (Array.isArray(obj)){
    let array=[];
    
    for (let e of obj){
      array.push(stringifyJSON(e));
    }
    string=array.join(',');

    return '['+ string + ']';        
  }
  
  if (typeof obj==='object'){
    for (let key in obj){
      if (typeof obj[key] === 'function'){
        return '{}';
      }
    }  
    
    string+='{'
    
    let array=[];
    for (let key in obj){
      array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    string+=array.join(',')+ '}';
    return string;        
  }
  
  

};
