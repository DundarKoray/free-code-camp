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















//--------------------
// Work with Data in D3

/******** Question
Select the body node, then select all h2 elements. Have D3 create and append an h2 tag for each item in the dataset array. The text in the h2 should say "New Title". Your code should use the data() and enter() methods.
*/

/********* Answer
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // Add your code below this line
    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")
    // Add your code above this line
  </script>
</body>
*/












//--------------------
// Work with Dynamic Data in D3

/******** Question
Change the text() method so that each h2 element displays the corresponding value from the dataset array with a single space and "USD". For example, the first heading should be "12 USD".
*/

/********* Answer
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line

      .text((d) => (`${d} USD`) );

      // Add your code above this line
  </script>
</body>
*/










//--------------------
// Add Inline Styling to Elements

/******** Question
Add the style() method to the code in the editor to make all the displayed text have a font-family of verdana.
*/

/********* Answer
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("font-family","verdana")


      // Add your code above this line
  </script>
</body>

*/











//--------------------
// Change Styles Based on Data

/******** Question
Add the style() method to the code in the editor to set the color of the h2 elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".

Note
You can use if-else logic, or the ternary operator.
*/

/********* Answer
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("color", (d) => {
        return d < 20 ? "red" : "green"
      })
      

      // Add your code above this line
  </script>
</body>
*/