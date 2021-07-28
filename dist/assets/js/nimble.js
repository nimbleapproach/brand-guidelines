// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "@popperjs/core/dist/umd/popper.min";

// Import the required DOM management plugins first
import "bootstrap/js/dist/dom/data";
import "bootstrap/js/dist/dom/event-handler";
import "bootstrap/js/dist/dom/manipulator";
import "bootstrap/js/dist/dom/selector-engine";
import "bootstrap/js/dist/base-component";

// Then your specific components
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/offcanvas";
