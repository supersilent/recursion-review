// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var ElementArr = [];
    
  let currentNode = document.body;
  // your code here
  let addElements = function (node) {
    if (node.classList && node.classList.contains(className)) {
      ElementArr.push(node);
    }
    
    if (node.childNodes) {
      for (let e of node.childNodes) {
        addElements(e);   
      }
    
    }
  };
  addElements(currentNode);
  
  
  return ElementArr;

};
