document.addEventListener("DOMContentLoaded", function () {
   /* const menuToggle = document.getElementById("menu-toggle");*/
    const navButton = document.getElementById("nav-button");
    const navMenu = document.querySelector(".nav-menu");

    // Function to toggle the menu
    function toggleMenu() {
        if (window.innerWidth <= 998) {
            navMenu.classList.toggle("show-menu");
        }
    }

    // Add a click event listener to the navigation button
    navButton.addEventListener("click", toggleMenu);

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (
            window.innerWidth <= 998 &&
            !navButton.contains(event.target) &&
            !navMenu.contains(event.target)
        ) {
            navMenu.classList.remove("show-menu");
        }
    });

    // Prevent the menu from closing when clicking inside it
    navMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


/*modal*/

  // Function to show the modal
  function showModal() {
    var modal = document.getElementById("modal-cont");
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    var modal = document.getElementById("modal-cont");
    modal.style.display = "none";
  }

  // When the "Book Appointment" button is clicked
  document.querySelector(".enquirybut").addEventListener("click", showModal);
  document.querySelector(".appoint").addEventListener("click", showModal);

  // When the "Close" button is clicked
  document.querySelector(".closebut").addEventListener("click", closeModal);

/*contact-form*/
function validateContactForm() {
            var name = document.forms["cont-form1"]["name"].value;
            var email = document.forms["cont-form1"]["email"].value;
            var phone = document.forms["cont-form1"]["phone"].value;
            var message = document.forms["cont-form1"]["message"].value;

            if (name === "") {
                alert("Name must be filled out");
                return false;
            }

            if (email === "") {
                alert("Email must be filled out");
                return false;
            }

            if (phone === "") {
                alert("Phone number must be filled out");
                return false;
            }

            if (message === "") {
                alert("Message must be filled out");
                return false;
            }

            // Additional validation for email and phone number can be added here

            return true;
        }


        //notifcation
        function showNotification() {
            var notification = document.getElementById('notification');
            notification.style.display = 'block';
        
            // Set a timeout to close the notification after 5 seconds (5000 milliseconds)
            setTimeout(closeNotification, 5000);
          }
        
          // Function to close the notification
          function closeNotification() {
            var notification = document.getElementById('notification');
            notification.style.display = 'none';
          }
        
          // Automatically show the notification when the website loads
          window.addEventListener('load', showNotification);
        
         
        