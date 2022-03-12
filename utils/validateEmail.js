// Custom email validation
const validateEmail = function(email) {
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email);
};

module.exports = validateEmail;