
const refs = {
    timer: document.querySelector('#timer-1'),

    valueDays: document.querySelector('[data-value="days"]'),
    valueHours: document.querySelector('[data-value="hours"]'),
    valueMins: document.querySelector('[data-value="mins"]'),
    valueSecs: document.querySelector('[data-value="secs"]'),
    };




class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.init();
    }
            
    init() {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        const time = this.getTimeComponents(deltaTime);
        console.log(time);
        this.updateClockface(time)
        this.start()
            
    }

    start() {
        console.log('start');
        setInterval(() => {
            console.log('here');
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
    
            this.updateClockface(time)
        }, 1000);
    }



    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / (1000)));
            
        return { days, hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
    updateClockface({ days, hours, mins, secs }) {
            document.querySelector(`${this.selector} [data-value="days"]`).textContent = days;
            document.querySelector(`${this.selector} [data-value="hours"]`).textContent = hours;
            document.querySelector(`${this.selector} [data-value="mins"]`).textContent = mins;
            document.querySelector(`${this.selector} [data-value="secs"]`).textContent = secs;
        }
        
        

}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 01, 2021'),
  });


  new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Dec 01, 2020'),
  });