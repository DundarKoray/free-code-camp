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








//--------------------
// Create a Custom Heading

/******** Question
We will make a simple heading for our Cat Photo App by putting the title and relaxing cat image in the same row.

Remember, Bootstrap uses a responsive grid system, which makes it easy to put elements into rows and specify each element's relative width. Most of Bootstrap's classes can be applied to a div element.

Nest your first image and your h2 element within a single <div class="row"> element. Nest your h2 element within a <div class="col-xs-8"> and your image in a <div class="col-xs-4"> so that they are on the same line.

Notice how the image is now just the right size to fit along the text?
*/

/********* Answer
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
*/








//--------------------
// Add Font Awesome Icons to our Buttons

/******** Question
Font Awesome is a convenient library of icons. These icons can be webfonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

You can include Font Awesome in any app by adding the following code to the top of your HTML:

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

In this case, we've already added it for you to this page behind the scenes.

The i element was originally used to make other elements italic, but is now commonly used for icons. You can add the Font Awesome classes to the i element to turn it into an icon, for example:

<i class="fas fa-info-circle"></i>

Note that the span element is also acceptable for use with icons.

Use Font Awesome to add a thumbs-up icon to your like button by giving it an i element with the classes fas and fa-thumbs-up. Make sure to keep the text "Like" next to the icon.
*/

/********* Answer
  <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i>Like</button>
*/







// Add Font Awesome Icons to all of our Buttons

/******** Question
Font Awesome is a convenient library of icons. These icons can be web fonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

Use Font Awesome to add an info-circle icon to your info button and a trash icon to your delete button.

Note: The span element is an acceptable alternative to the i element for the directions below.
*/

/********* Answer
  <button class="btn btn-block btn-info"><i class="fas fa-info-circle"></i>Info</button>
  <button class="btn btn-block btn-danger"><i class="fas fa-trash"></i> Delete</button>
*/









// Responsively Style Radio Buttons

/******** Question
You can use Bootstrap's col-xs-* classes on form elements, too! This way, our radio buttons will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest both your radio buttons within a <div class="row"> element. Then nest each of them within a <div class="col-xs-6"> element.

Note: As a reminder, radio buttons are input elements of type radio.
*/

/********* Answer
  <div class="row"> 
    <div class="col-xs-6"> 
      <label><input type="radio" name="indoor-outdoor"> Indoor</label>    
    </div>
    <div class="col-xs-6"> 
      <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    </div>
  </div>
*/








// Responsively Style Checkboxes

/******** Question
Since Bootstrap's col-xs-* classes are applicable to all form elements, you can use them on your checkboxes too! This way, the checkboxes will be evenly spread out across the page, regardless of how wide the screen resolution is.

Nest all three of your checkboxes in a <div class="row"> element. Then nest each of them in a <div class="col-xs-4"> element.
*/

/********* Answer
    <input class="form-control" type="text" placeholder="cat photo URL" required>
    <button class="btn btn-primary" type="submit"><i class="fa fa-paper-plane"></i> Submit</button>
*/










// Line up Form Elements Responsively with Bootstrap

/******** Question
Now let's get your form input and your submission button on the same line. We'll do this the same way we have previously: by using a div element with the class row, and other div elements within it using the col-xs-* class.

Nest both your form's text input and submit button within a div with the class row. Nest your form's text input within a div with the class of col-xs-7. Nest your form's submit button in a div with the class col-xs-5.

This is the last challenge we'll do for our Cat Photo App for now. We hope you've enjoyed learning Font Awesome, Bootstrap, and responsive design!
*/

/********* Answer
    <div class="row"> 
      <div class="col-xs-7">
        <input type="text" class="form-control" placeholder="cat photo URL" required>
      </div>
      <div class="col-xs-5">
        <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
      </div>
    </div>
*/











// Create a Bootstrap Headline

/******** Question
Now let's build something from scratch to practice our HTML, CSS and Bootstrap skills.

We'll build a jQuery playground, which we'll soon put to use in our jQuery challenges.

To start with, create an h3 element, with the text jQuery Playground.

Color your h3 element with the text-primary Bootstrap class, and center it with the text-center Bootstrap class.
*/

/********* Answer
  <h3 class="text-primary text-center">jQuery Playground</h3>
*/










// House our page within a Bootstrap container-fluid div

/******** Question
Now let's make sure all the content on your page is mobile-responsive.

Let's nest your h3 element within a div element with the class container-fluid.
*/

/********* Answer
  <div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
  </div>
*/