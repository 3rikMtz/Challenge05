# Work Day Scheduler

This is a simple work day scheduler that allows users to manage their daily tasks and events. The scheduler displays time blocks for each hour of a typical working day (9am-5pm) and provides the ability to save and retrieve events using local storage.

## Features

- Displays the current date in the header.
- Dynamically generates time blocks for each hour of the working day.
- Time blocks are color-coded to indicate past, present, and future time slots.
- Users can enter and save events for each time block.
- Saved events persist even after refreshing the page.

## Usage

1. Open the scheduler in your web browser.

2. The current date will be displayed at the top of the scheduler.

3. Scroll down to view the time blocks for each hour of the working day.

4. Each time block represents an hour and is color-coded as follows:
   - Past time blocks are shown in a different color to indicate they have already occurred.
   - The current hour's time block is highlighted to distinguish the present time.
   - Future time blocks are displayed in a different color to represent upcoming hours.

5. Click into a time block to enter an event or task.

6. After entering your event, click the save button on the right side of the time block to save it to local storage.

7. Saved events will persist even if you refresh the page or close the browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Day.js library

## Future Enhancements

Here are some potential future enhancements for the work day scheduler:

- Implement user authentication to allow multiple users to have their own personalized schedules.
- Add the ability to edit or delete saved events.
- Provide reminders or notifications for upcoming events.
- Integrate with external calendar APIs for seamless synchronization with other calendar applications.

## Credits
It utilizes the Day.js library for handling date and time operations.

## License

This project is licensed under the [MIT License](LICENSE).
