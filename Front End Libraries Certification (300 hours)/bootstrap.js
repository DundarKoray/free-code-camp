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

