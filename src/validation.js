const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

window.validateEmail = validateEmail;


function validatePhoneNumber(phoneNumber) {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    return pattern.test(phoneNumber);
  }
 
window.validatePhoneNumber = validatePhoneNumber;
