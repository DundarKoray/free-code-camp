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















//--------------------
// Use @for to Create a Sass Loop

/******** Question
Write a @for directive that takes a variable $j that goes from 1 to 6.

It should create 5 classes called .text-1 to .text-5 where each has a font-size set to 10px multiplied by the index.
*/

/********* Answer
<style type='text/sass'>

    @for $j from 1 through 6 {
        .text-#{$j} { font-size: (10 * $j)px;}
    }


</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

*/







//--------------------
// Use @each to Map Over Items in a List

/******** Question
Write an @each directive that goes through a list: blue, black, red and assigns each variable to a .color-bg class, where the "color" part changes for each item. Each class should set the background-color the respective color.
*/

/********* Answer


$colors: (blue, black, red);

  @each $color in $colors {
    .#{$color}-bg {
        background-color: $color;
      }
    }

*/








//--------------------
// Apply a Style Until a Condition is Met with @while

/******** Question
Use @while to create a series of classes with different font-sizes.

There should be 5 different classes from text-1 to text-5. Then set font-size to 15px multiplied by the current index number. Make sure to avoid an infinite loop!
*/

/********* Answer


<style type='text/sass'>

    $x: 1;

    @while $x < 6 {
        .text-#{$x} {
            font-size: 15px * $x;
        }

        $x: $x + 1;
    }

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

*/