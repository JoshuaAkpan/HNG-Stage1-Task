document.addEventListener("DOMContentLoaded", () => {
  // To ensure the image has natural dimensions
  const img = document.getElementById("slackProfilePicture");

  // Event listener to set natural dimensions once the image is loaded
  img.addEventListener("load", () => {
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    img.width = naturalWidth;
    img.height = naturalHeight;

    console.log(
      `Natural Width: ${naturalWidth}, Natural Height: ${naturalHeight}`
    );
  });

  // Check if the image has already loaded
  if (img.complete) {
    // This manually dispatches the load event if the image is already loaded
    img.dispatchEvent(new Event("load"));
  }

  // To display the UTC time and current day
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];

    document.getElementById("utcTime").textContent = utcTime;
    document.getElementById("currentDay").textContent = currentDay;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
