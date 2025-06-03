console.log('Script loaded successfully.');

document.addEventListener('DOMContentLoaded', function() {
    // Responsive navigation toggle (for mobile)
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Enhance contact form interactivity if on contact.html
    const contactForm = document.querySelector('form');
    if (contactForm) {
        const confirmation = document.createElement('div');
        confirmation.className = 'confirmation-message';
        confirmation.style.display = 'none';
        confirmation.style.marginTop = '1em';
        confirmation.style.color = '#6b3e26';
        confirmation.style.fontWeight = 'bold';
        contactForm.parentNode.insertBefore(confirmation, contactForm.nextSibling);

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = contactForm.elements['name'] ? contactForm.elements['name'].value : '';
            confirmation.textContent = `Thank you${name ? ', ' + name : ''}! Your message has been sent. We will contact you soon.`;
            confirmation.style.display = 'block';
            contactForm.reset();
        });
    }
});
