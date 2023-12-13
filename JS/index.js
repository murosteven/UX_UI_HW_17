$(document).ready(function () {
      // Event listener for button click
      $("#loadPageButton").on("click", function () {
        // Trigger the page loading event
        $(document).trigger("pageLoading");
      });

      // Page loading event listener
      $(document).on("pageLoading", function () {
        // You can perform any actions you want when the page loading event is triggered
        console.log("Page is loading...");

        // Simulate a delay for demonstration purposes (you can replace this with your actual loading logic)
        setTimeout(function () {
          console.log("Page loaded!");
        }, 2000);
      });
    });
