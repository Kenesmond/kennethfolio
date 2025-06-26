let currentPage = 1;
const totalPages = 3;

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
    setupFormValidation();
});

// Navigation functions
function nextPage() {
    if (validateCurrentPage()) {
        if (currentPage < totalPages) {
            document.getElementById(`page${currentPage}`).classList.remove('active');
            currentPage++;
            document.getElementById(`page${currentPage}`).classList.add('active');
            updateProgressBar();
            updateStepIndicators();
        }
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage--;
        document.getElementById(`page${currentPage}`).classList.add('active');
        updateProgressBar();
        updateStepIndicators();
    }
}

// Update progress bar
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = (currentPage / totalPages) * 100;
    progressFill.style.width = progressPercentage + '%';
}

// Update step indicators
function updateStepIndicators() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber === currentPage) {
            step.classList.add('active');
        } else if (stepNumber < currentPage) {
            step.classList.add('completed');
        }
    });
}

// Form validation
function validateCurrentPage() {
    const currentPageElement = document.getElementById(`page${currentPage}`);
    const requiredFields = currentPageElement.querySelectorAll('[required]');
    let isValid = true;

    // Remove previous error messages
    const errorMessages = currentPageElement.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    requiredFields.forEach(field => {
        field.classList.remove('error');
        
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            showFieldError(field, 'Please enter a valid email address');
            isValid = false;
        } else if (field.type === 'tel' && !isValidPhone(field.value)) {
            showFieldError(field, 'Please enter a valid phone number');
            isValid = false;
        }
    });

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Form submission
function setupFormValidation() {
    const form = document.getElementById('contactform');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateCurrentPage()) {
            submitForm();
        }
    });
}

function submitForm() {
    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    // Reset form
    document.getElementById('contactform').reset();
    currentPage = 1;
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    updateProgressBar();
    updateStepIndicators();
}
// Reset form on page load  
window.onload = function() {
    document.getElementById('contactform').reset();
    currentPage = 1;
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    updateProgressBar();
    updateStepIndicators();
};
// Reset form on reset button click
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('contactform').reset();
    currentPage = 1;
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    updateProgressBar();
    updateStepIndicators();
});
// Reset form on cancel button click
document.getElementById('cancelButton').addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel? All progress will be lost.')) {
        document.getElementById('contactform').reset();
        currentPage = 1;
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById('page1').classList.add('active');
        updateProgressBar();
        updateStepIndicators();
    }
});
// Add event listeners for next and previous buttons
document.getElementById('nextButton').addEventListener('click', nextPage);
document.getElementById('prevButton').addEventListener('click', prevPage);
// Add event listeners for step indicators  
document.querySelectorAll('.step').forEach((step, index) => {
    step.addEventListener('click', function() {
        if (index + 1 !== currentPage) {
            document.getElementById(`page${currentPage}`).classList.remove('active');
            currentPage = index + 1;
            document.getElementById(`page${currentPage}`).classList.add('active');
            updateProgressBar();
            updateStepIndicators();
        }
    });
});
