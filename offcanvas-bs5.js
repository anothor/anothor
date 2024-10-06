// Programmatically close the offcanvas
var offcanvasElement = document.getElementById('myOffcanvas');
var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the instance

// If the instance doesn't exist, you can create it manually as follows:
if (!offcanvasInstance) {
  offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);
}

// To close the offcanvas programmatically
offcanvasInstance.hide();

// bootstrap.Offcanvas.getInstance(element) is used to get an instance of the offcanvas component.
// If no instance is found, you can create one using new bootstrap.Offcanvas(element).
// The .hide() method is then called to close the offcanvas.
