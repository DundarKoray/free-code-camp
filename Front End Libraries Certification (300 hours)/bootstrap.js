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