console.log("--------HELLO FROM D3----------")



//--------------------
// Add Document Elements with D3

/******** Question
Use the select method to select the body tag in the document. Then append an h1 tag to it, and add the text "Learning D3" into the h1 element.
*/

/********* Answer
<body>
  <script>
    // Add your code below this line
    d3.select("body")
      .append("h1")
      .text("Learning D3")
    // Add your code above this line
  </script>
</body>
*/