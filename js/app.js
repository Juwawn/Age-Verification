const today = new Date();

const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate() - 1;
const dateInput = document.getElementById('dateInput');

const checkbox = document.getElementById('checkbox');
let message = document.getElementById('message');

// console.log(checkbox.checked);





// console.log(dateInput);

const validate =()=> {
    const isChecked = checkbox.checked;
    const message = document.getElementById('message');
    let messageText;
    if (!isChecked) {
        messageText = 'Please check the box to verify your age'
        message.innerHTML = `
            ${messageText};
        `
        
    } else {
        messageText = "Checkbox is checked"
        getDOB();
    }
}

const getDOB =()=> {
    const isChecked = checkbox.checked;
    const message = document.getElementById('message');
    let messageText;
    if (!isChecked) {
        messageText = 'Please check the box to verify your age'
        message.innerHTML = `${messageText};`
        
    } else {
        
    }




    const userDate = new Date(dateInput.value); // need to get just the year of the userDate
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    verifyAge(userYear, userMonth, userDay);
};

const verifyAge = (year, month, day)=> {
    // console.log(year, month, day);
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    // Need to check to see the user's birth year is valid
    // Is userYear >= validYear? this was backwards
    if(validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                console.log("month pass the day", validDay, userDay);
                messageText = "access granted bc of idk";
                message.innerHTML = `
            ${messageText};
        `
            } else {
                messageText = "access denied bc of yr";
                message.innerHTML = `
            ${messageText};
        `
            } 
        } else {
            messageText = "access denied bc of no";
            message.innerHTML = `
            ${messageText};
        `
        }
    } else {
        messageText = "access denied bc of yes";
        message.innerHTML = `
            ${messageText};
        `
    }
    };