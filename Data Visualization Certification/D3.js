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









//--------------------
// Add Classes with D3

/******** Question
Add the attr() method to the code in the editor and put a class of bar on the div elements.
*/

/********* Answer
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class", "bar")


      // Add your code above this line
  </script>
</body>

*/









//--------------------
// Update the Height of an Element Dynamically

/******** Question
Add the style() method to the code in the editor to set the height property for each element. Use a callback function to return the value of the data point with the string "px" added to it.
*/

/********* Answer
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d)=> d+"px")


      // Add your code above this line
  </script>
</body>


*/




//--------------------
// Change the Presentation of a Bar ChartPassed

/******** Question
First, add a margin of 2px to the bar class in the style tag. Next, change the callback function in the style() method so it returns a value 10 times the original data value (plus the "px").

Note
Multiplying each data point by the same constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.
*/

/********* Answer
  <style>
  .bar {
    width: 25px;
    height: 100px;
    
    margin-right: 2px;
    
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => (d * 10 + "px"))

      // Add your code above this line
  </script>
</body>
*/













//--------------------
//  Learn About SVG in D3

/******** Question
Add an svg node to the body using append(). Give it a width attribute set to the provided w constant and a height attribute set to the provided h constant using the attr() or style() methods for each. You'll see it in the output because there's a background-color of pink applied to it in the style tag.

Note
When using attr() width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.
*/

/********* Answer
  <style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
    // Add your code below this line
    svg.data(dataset)
     .append("svg")
     .style("width", w)
     .style("height", h)
    // Add your code above this line
  </script>
</body>
*/








