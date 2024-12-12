const display = document.getElementById('time');

function Time(){
    let hours = new Date().getHours();
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours - 12 : hours;
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;

    const date = new Date().toDateString();
    const day = date.split(' ')[0];
    const month = date.split(' ')[1];
    const dayNum = date.split(' ')[2];
    const year = date.split(' ')[3];
    document.getElementById('date').textContent = `${day}, ${month} ${dayNum}, ${year}`;

}

Time();
setInterval(Time, 1000);