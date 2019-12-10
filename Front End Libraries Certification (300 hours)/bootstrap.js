//--------------------
// Use Responsive Design with Bootstrap Fluid Containers

/******** Question

To get started, we should nest all of our HTML (except the link tag and the style element) in a div element with the class container-fluid.
*/

/********* Answer
<div class="container-fluid">

</div> 
*/





//--------------------
// Make Images Mobile Responsive

/******** Question
First, add a new image below the existing one. Set its src attribute to https://bit.ly/fcc-running-cats.

It would be great if this image could be exactly the width of our phone's screen.

Fortunately, with Bootstrap, all we need to do is add the img-responsive class to your image. Do this, and the image should perfectly fit the width of your page.
*/

/********* Answer
  <img class=" img-responsive" src="https://bit.ly/fcc-running-cats" alt="A cute orange cat lying on its back.">
*/





//--------------------
// Center Text with Bootstrap

/******** Question
Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class text-center to our h2 element.

Remember that you can add several classes to the same element by separating each of them with a space, like this:

<h2 class="red-text text-center">your text</h2>
*/

/********* Answer
  <h2 class="red-text text-center">CatPhotoApp</h2>
*/




//--------------------
// Create a Bootstrap Button

/******** Question
Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.

Create a new button element below your large kitten photo. Give it the btn and btn-default classes, as well as the text of "Like".
*/

/********* Answer
<button class="btn btn-default">Like</button>
*/




//--------------------
// Create a Block Element Bootstrap Button

/******** Question
Normally, your button elements with the btn and btn-default classes are only as wide as the text that they contain. For example:

<button class="btn btn-default">Submit</button>

This button would only be as wide as the word "Submit".


By making them block elements with the additional class of btn-block, your button will stretch to fill your page's entire horizontal space and any elements following it will flow onto a "new line" below the block.

<button class="btn btn-default btn-block">Submit</button>

This button would take up 100% of the available width.

*/

/********* Answer
<button class="btn btn-default btn-block">Like</button>
*/





//--------------------
// Taste the Bootstrap Button Color Rainbow

/******** Question
The btn-primary class is the main color you'll use in your app. It is useful for highlighting actions you want your user to take.

Replace Bootstrap's btn-default class with btn-primary in your button.

Note that this button will still need the btn and btn-block classes.
*/

/********* Answer
<button class="btn btn-default btn-block btn-primary">Like</button>
*/





//--------------------
// Call out Optional Actions with btn-info

/******** Question
Bootstrap comes with several pre-defined colors for buttons. The btn-info class is used to call attention to optional actions that the user can take.

Create a new block-level Bootstrap button below your "Like" button with the text "Info", and add Bootstrap's btn-info and btn-block classes to it.

Note that these buttons still need the btn and btn-block classes.
*/

/********* Answer
<button class="btn btn-block btn-info ">Info </button>
*/





//--------------------
// Warn Your Users of a Dangerous Action with btn-danger

/******** Question
Bootstrap comes with several pre-defined colors for buttons. The btn-danger class is the button color you'll use to notify users that the button performs a destructive action, such as deleting a cat photo.

Create a button with the text "Delete" and give it the class btn-danger.

Note that these buttons still need the btn and btn-block classes.
*/

/********* Answer
<button class="btn btn-block btn-danger">Delete</button>
*/






//--------------------
// Use the Bootstrap Grid to Put Elements Side By Side

/******** Question
Bootstrap uses a responsive 12-column grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Bootstrap has different column width attributes that it uses depending on how wide the user's screen is. For example, phones have narrow screens, and laptops have wider screens.

Take for example Bootstrap's col-md-* class. Here, md means medium, and * is a number specifying how many columns wide the element should be. In this case, the column width of an element on a medium-sized screen, such as a laptop, is being specified.

In the Cat Photo App that we're building, we'll use col-xs-*, where xs means extra small (like an extra-small mobile phone screen), and * is the number of columns specifying how many columns wide the element should be.

Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one <div class="row"> element, then each of them within a <div class="col-xs-4"> element.

The row class is applied to a div, and the buttons themselves can be nested within it.
*/

/********* Answer
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>
*/










//--------------------
// Ditch Custom CSS for Bootstrap

/******** Question
We can clean up our code and make our Cat Photo App look more conventional by using Bootstrap's built-in styles instead of the custom styles we created earlier.

Don't worry - there will be plenty of time to customize our CSS later.

Delete the .red-text, p, and .smaller-image CSS declarations from your style element so that the only declarations left in your style element are h2 and thick-green-border.

Then delete the p element that contains a dead link. Then remove the red-text class from your h2 element and replace it with the text-primary Bootstrap class.

Finally, remove the "smaller-image" class from your first img element and replace it with the img-responsive class.
*/

/********* Answer
  solved on browser
*/








//--------------------
// Use a span to Target Inline Elements

/******** Question
You can use spans to create inline elements. Remember when we used the btn-block class to make the button fill the entire row?

That illustrates the difference between an "inline" element and a "block" element.

By using the inline span element, you can put several elements on the same line, and even style different parts of the same line differently.

Nest the word "love" in your "Things cats love" element below within a span element. Then give that span the class text-danger to make the text red.

Here's how you would do this with the "Top 3 things cats hate" element:

<p>Top 3 things cats <span class="text-danger">hate:</span></p>
*/

/********* Answer
  <p>Things cats <span class="text-danger">love</span>:</p>
*/

