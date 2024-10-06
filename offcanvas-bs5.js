// Programmatically close the offcanvas
var offcanvasElement = document.getElementById('myOffcanvas');
var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the instance

// If the instance doesn't exist, you can create it manually as follows:
if (!offcanvasInstance) {
  offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);
}

// To close the offcanvas programmatically
offcanvasInstance.hide();
