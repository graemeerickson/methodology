const card = [
   // array methods
   {
      methodName: "toString()",
      objectType: "array",
      purpose: "Convert an array to a new string of comma-separated values.",
      parameters: "None",
      impactsObject: "No"
   },
   {
      methodName: "join()",
      objectType: "array",
      purpose: "Join all array elements into a new string and insert separator between them if desired.",
      parameters: "1 - (separator)",
      impactsObject: "No"
   },
   {
      methodName: "push()",
      objectType: "array",
      purpose: "Add a new element to the end of an array.",
      parameters: "1 - (element to add to the array)",
      impactsObject: "Yes"
   },
   {
      methodName: "pop()",
      objectType: "array",
      purpose: "Remove the last element from an array.",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "shift()",
      objectType: "array",
      purpose: "Remove the first array element and shifts all other elements to a lower index",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "unshift()",
      objectType: "array",
      purpose: "Add a new element to the beginning of an array, and unshift older elements (i.e., shift them to a higher index).",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "splice()",
      objectType: "array",
      purpose: "Add or remove items from an array.",
      parameters: "3 - (where new element should be added, number of elements to remove, new element to add)",
      impactsObject: "Yes"
   },
   {
      methodName: "concat()",
      objectType: "array",
      purpose: "Create a new array by merging (concatenating) existing arrays.",
      parameters: "Any - (array1, array2, array3, ...",
      impactsObject: "No"
   },
   {  
      methodName: "slice()",
      objectType: "array",
      purpose: "Slice some elements from an array into a new array.",
      parameters: "2 - (starting element, number of elements to get)",
      impactsObject: "No"
   },
   {
      methodName: "sort()",
      objectType: "array",
      purpose: "Sort an array alphabetically. Remember that it sorts as strings; use a compare function to sort numerically: array.sort(function(a, b) { return a - b });",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "reverse()",
      objectType: "array",
      purpose: "Sort an array in descending order. Remember that it sorts as strings; use a compare function to sort numerically: array.sort(function(a, b) { return b - a });",
      parameters: "None",
      impactsObject: "Yes"
   },
   {
      methodName: "indexOf()",
      objectType: "array",
      purpose: "Search an array for an item and returns its position. If found more than once, return its first position. Note: returns -1 if item is not found.",
      parameters: "2 - (item to search for, starting point in array)",
      impactsObject: "No"
   },
   {
      methodName: "lastIndexOf()",
      objectType: "array",
      purpose: "Search an array for an item and returns its position. If found more than once, return its last position. Note: returns -1 if item is not found.",
      parameters: "2 - (item to search for, starting point in array)",
      impactsObject: "No"
   },
   {
      methodName: "isArray()",
      objectType: "array",
      purpose: "Check whether than object is an array.",
      parameters: "1 - (object name)",
      impactsObject: "No"
   },
   // array functions
   {  
      methodName: "filter()",
      objectType: "array",
      purpose: "Create a new array with every element in an array that passes a test/condition.",
      parameters: "3 - (Value of the current element, array index of the current element, array object the current element belongs to)",
      impactsObject: "No"
   },
   {  
      methodName: "reduce()",
      objectType: "array",
      purpose: "Reduce (e.g., sum) the values of an array to a single value (going left-to-right)",
      parameters: "4 - (total - initialValue or previously returned value of the function, Value of the current element, array index of the current element, array object the current element belongs to)",
      impactsObject: "No"
   },
   {  
      methodName: "reduceRight()",
      objectType: "array",
      purpose: "Reduce (e.g., sum) the values of an array to a single value (going right-to-left)",
      parameters: "4 - (total - initialValue or previously returned value of the function, Value of the current element, array index of the current element, array object the current element belongs to)",
      impactsObject: "No"
   },
   {
      methodName: "map()",
      objectType: "array",
      purpose: "Create a new array with the results of calling a function for every array element.",
      parameters: "3 - (Value of the current element, array index of the current element, array object the current element belongs to)",
      impactsObject: "No"
   },
   {
      methodName: "forEach()",
      objectType: "array",
      purpose: "Call a provided function once for each element in an array, in order.",
      parameters: "3 - (Value of the current element, array index of the current element, array object the current element belongs to)",
      impactsObject: "No"
   },
   // string methods
   {
      methodName: "replace()",
      objectType: "string",
      purpose: "Replace some characters of a string.",
      parameters: "2 - (value that will be replaced by the new value, value to replace the search value with)",
      impactsObject: "No"
   }
   // document methods
];