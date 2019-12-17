console.log("--------HELLO FROM JQUERY----------")


//--------------------
// Store Data with Sass Variables

/******** Question
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

Here are a couple examples:

$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.
*/

/********* Answer
<style type='text/sass'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
*/






//--------------------
// Nest CSS with Sass

/******** Question
Write a mixin for border-radius and give it a $radius parameter. It should use all the vendor prefixes from the example. Then use the border-radius mixin to give the #awesome element a border radius of 15px.
*/

/********* Answer
<style type='text/sass'>



  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome{
      @include border-radius(15px);
    }
</style>

<div id="awesome"></div>

*/







//--------------------
// Use @if and @else to Add Logic To Your Styles

/******** Question
Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else:

light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
If $val is not light, medium, or heavy, the border should be set to none.
*/

/********* Answer
<style type='text/sass'>

  

  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }

    @else if $val == medium {
      border: 3px solid black;
    }

    @else if $val == heavy {
      border: 6px solid black;
    }

    @else {
      border: none;
    } 
  }

  #box {
    @include border-stroke(light)
  }
</style>

<div id="box">Hello</div>
*/