 $(document).ready(function () {
      // Event listener for button click
      $("#loadPageButton").on("click", function () {
        // Trigger the page loading event
        $(document).trigger("pageLoading");
      });

      // Page loading event listener
      $(document).on("pageLoading", function () {
        // Change the background color of the body
        $("body").css("background-color", "#ffeeaa");

        // Simulate a delay for demonstration purposes (you can replace this with your actual loading logic)
        setTimeout(function () {
          // Reset the background color after the page is loaded
          $("body").css("background-color", "");
          console.log("Page loaded!");
        }, 2000);
      });
    });

