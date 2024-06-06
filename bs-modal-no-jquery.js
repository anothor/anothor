// Bootstrap Modals Without jQuery
// ref: https://blog.carsonevans.ca/2020/08/08/bootstrap-modals-without-jquery/

function closeModal(modal) {
  const backdrop = document.querySelector(".modal-backdrop.fade.show");
  modal.setAttribute("aria-hidden", "true");
  backdrop.classList.remove("show");
  // We want to remove the show class from the modal outside of the regular DOM thread so that
  // transitions can take effect
  setTimeout(() => {
    modal.classList.remove("show");
  });

  // We want to set the display style back to none and remove the backdrop div from the body
  // with a delay of 500ms in order to give their transition/animations time to complete
  // before totally hiding and removing them.
  setTimeout(() => {
    modal.style.display = "none";
    backdrop.remove();
  }, 500); // this time we specified a delay
}

function openModal(modal) {
  const backdrop = document.createElement("div");
  // Remove the show from the initial classList, we will add it in the timeout
  //
  // backdrop.classList.add('modal-backdrop', 'fade', 'show');
  backdrop.classList.add("modal-backdrop", "fade");
  document.body.classList.add("modal-open");
  document.body.appendChild(backdrop);
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false", "show");

  // We don't need to specify the milliseconds in this timeout, since we don't want a delay,
  // we just want the changes to be done outside of the normal DOM thread.
  setTimeout(() => {
    // Move adding the show class to inside this setTimeout
    modal.classList.add("show");
    // Add the show class to the backdrop in this setTimeout
    backdrop.classList.add("show");
  });
}

// This is similar to $(document).ready(...) but in plain JavaScript
window.addEventListener("load", () => {
  // In bootstrap, buttons (or whatever element) that open a modal will have the
  // attribute data-toggle="modal" on them.  So we want to select all elements with
  // this attribute and add a click handler to them.
  document.querySelectorAll("[data-toggle=modal]").forEach((element) => {
    element.addEventListener("click", () => {
      // In bootstrap, elements that open modals will have a `data-target` attribute
      // which points to the modal that element should open. The `dataset` is how you
      // access data attributes in JavaScript. For example if the data attribute was
      // called `data-foo` you would use `element.dataset.foo` to get the value.
      const target = element.dataset.target;
      const modal = document.querySelector(target);
      // If the target modal is found, let's open it.
      if (modal) {
        openModal(modal);
      }
    });
  });

  // In bootstrap, buttons (or whatever element) that close modals have the
  // attribute data-dismiss="modal" on them.  So want want to select all elements with
  // this attribute and add aclick handler to them.
  document.querySelectorAll("[data-dismiss=modal]").forEach((element) => {
    element.addEventListener("click", () => {
      // Get the current open modal (the modal with the `show` class).
      const modal = document.querySelector(".modal.show");
      // If an open modal is found, close it.
      if (modal) {
        closeModal(modal);
      }
    });
  });

  // We also want the modal to close if the area out side the modal dialog is clicked.
  // So we can attach a click handler to the .modal element
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      // We have to check that the element that was clicked is actually the .modal element,
      // because this event will fire when children of the .modal element are clicked too (like the modal dialog).
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });
});
