
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    document.getElementById('currentDay').textContent = dayOfWeek;


    function displayUTCTime() {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        const utcTimeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('currentTime').textContent = utcTimeString;
    }
    
    // Update the time every second
    setInterval(displayUTCTime, 1000);
    
    // Initial call to display the time immediately
    displayUTCTime();