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










//--------------------
// Select a Group of Elements with D3

/******** Question
Select all of the li tags in the document, and change their text to "list item" by chaining the .text() method.
*/

/********* Answer
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line

  d3.selectAll("li").text("list item")


    // Add your code above this line
  </script>
</body>

*/