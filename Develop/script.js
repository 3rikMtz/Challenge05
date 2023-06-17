$(function () {
  // Display current date in header
  $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

  // Define business hours
  const startHour = 8; // 8AM
  const endHour = 20;  // 8PM

  // Generate dynamic time-blocks
  for(let i = startHour; i <= endHour; i++) {
    let timeBlock = $('<div>').addClass('row time-block').attr('id', `hour-${i}`);
    let hourLabel = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(`${i <= 12 ? i : i - 12}${i < 12 ? 'AM' : 'PM'}`);
    let textarea = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows', 3);
    let saveButton = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label', 'save');
    let icon = $('<i>').addClass('fas fa-save').attr('aria-hidden', true);

    // Check if the hour has passed
    if(i < dayjs().hour()) {
      timeBlock.addClass('past');
    } else if(i === dayjs().hour()) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

    // Append elements to time block
    saveButton.append(icon);
    timeBlock.append(hourLabel, textarea, saveButton);

    // Append time block to the container
    $('.container-fluid').append(timeBlock);
  }

  // TODO: Add your code to handle click events on the save button, save to local storage and retrieve from local storage
});
