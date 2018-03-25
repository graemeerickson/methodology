const card = [
   // array methods
   {
      methodName: "toString()",
      objectType: "Array",
      purpose: "Convert an array to a new string of comma-separated values.",
      parameters: "None",
      impactsObject: "No"
   },
   {
      methodName: "join()",
      objectType: "Array",
      purpose: "Join all array elements into a new string and insert separator between them if desired.",
      parameters: "<i>(1) separator</i>",
      impactsObject: "No"
   },
   {
      methodName: "push()",
      objectType: "Array",
      purpose: "Add a new element to the end of an array.",
      parameters: "(1) element to add to the array",
      impactsObject: "Yes"
   },
   {
      methodName: "pop()",
      objectType: "Array",
      purpose: "Remove the last element from an array.",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "shift()",
      objectType: "Array",
      purpose: "Remove the first array element and shifts all other elements to a lower index",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "unshift()",
      objectType: "Array",
      purpose: "Add a new element to the beginning of an array, and unshift older elements (i.e., shift them to a higher index).",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "splice()",
      objectType: "Array",
      purpose: "Add/remove items to/from an array.",
      parameters: "(1) where in array the new element should be added, <i>(2) number of elements to remove</i>, <i>(3) new element to add</i>",
      impactsObject: "Yes"
   },
   {
      methodName: "concat()",
      objectType: "Array",
      purpose: "Create a new array by merging (concatenating) existing arrays.",
      parameters: "Any - (array1, array2, array3, ...)",
      impactsObject: "No"
   },
   {  
      methodName: "slice()",
      objectType: "Array",
      purpose: "Slice some elements from an array into a new array.",
      parameters: "<i>(1) starting element</i>, <i>(2) number of elements to get</i>",
      impactsObject: "No"
   },
   {
      methodName: "sort()",
      objectType: "Array",
      purpose: "Sort an array alphabetically. Remember that it sorts as strings; use a compare function to sort numerically: array.sort(function(a, b) { return a - b });",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "reverse()",
      objectType: "Array",
      purpose: "Sort an array in descending order. Remember that it sorts as strings; use a compare function to sort numerically: array.sort(function(a, b) { return b - a });.",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "indexOf()",
      objectType: "Array",
      purpose: "Search an array for an item and returns its position. If found more than once, return its first position. Note: returns -1 if item is not found.",
      parameters: "(1) item to search for, <i>(2) starting point in array</i>",
      impactsObject: "No"
   },
   {
      methodName: "lastIndexOf()",
      objectType: "Array",
      purpose: "Search an array for an item and returns its position. If found more than once, return its last position. Note: returns -1 if item is not found.",
      parameters: "(1) item to search for, <i>(2) starting point in array</i>",
      impactsObject: "No"
   },
   {
      methodName: "isArray()",
      objectType: "Array",
      purpose: "Check whether than object is an array.",
      parameters: "(1) object name",
      impactsObject: "No"
   },
   // array functions
   {  
      methodName: "filter()",
      objectType: "Array",
      purpose: "Create a new array with every element in an array that passes a test/condition.",
      parameters: "(1) value of the current element, <i>(2) array index of the current element</i>, <i>(3) array object the current element belongs to</i>",
      impactsObject: "No"
   },
   {  
      methodName: "reduce()",
      objectType: "Array",
      purpose: "Reduce (e.g., sum) the values of an array to a single value (going left-to-right)",
      parameters: "(1) total - initialValue or previously returned value of the function, (2) value of the current element, <i>(3) array index of the current element</i>, <i>(4) array object the current element belongs to</i>",
      impactsObject: "No"
   },
   {  
      methodName: "reduceRight()",
      objectType: "Array",
      purpose: "Reduce (e.g., sum) the values of an array to a single value (going right-to-left)",
      parameters: "(1) total - initialValue or previously returned value of the function, (2) value of the current element, <i>(3) array index of the current element</i>, <i>array object the current element belongs to</i>",
      impactsObject: "No"
   },
   {
      methodName: "map()",
      objectType: "Array",
      purpose: "Create a new array with the results of calling a function for every array element.",
      parameters: "(1) value of the current element, <i>(2) array index of the current element</i>, <i>(3) array object the current element belongs to</i>",
      impactsObject: "No"
   },
   {
      methodName: "forEach()",
      objectType: "Array",
      purpose: "Call a provided function once for each element in an array, in order.",
      parameters: "(1) value of the current element, <i>(2) array index of the current element</i>, <i>array object the current element belongs to</i>",
      impactsObject: "No"
   },
   // string methods
   {
      methodName: "replace()",
      objectType: "string",
      purpose: "Replace some characters of a string.",
      parameters: "(1) value that will be replaced by the new value, (2) value to replace the search value with",
      impactsObject: "No"
   }
   // document methods
];