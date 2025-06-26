// About Page JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.item ul');
    const navLinks = document.querySelectorAll('.item ul li a');
    const nav = document.querySelector('.nav');
    const skillItems = document.querySelectorAll('.course ul li');
    const experienceItems = document.querySelectorAll('.li ul li, .ul ul li, .sites ul li');
    const profileImage = document.querySelector('.img img');
    const sections = document.querySelectorAll('.pic, .page');
    let lastScrollTop = 0;

    // Mobile menu toggle functionality
    if (menuToggle && navItems) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active class for mobile menu
            navItems.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Add rotation animation to hamburger menu
            if (navItems.classList.contains('active')) {
                menuToggle.style.transform = 'rotate(90deg)';
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.style.transform = 'rotate(0deg)';
                menuToggle.innerHTML = '☰';
            }
        });
    }

    // Active navigation link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu after clicking a link
            if (navItems && navItems.classList.contains('active')) {
                navItems.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                    menuToggle.style.transform = 'rotate(0deg)';
                    menuToggle.innerHTML = '☰';
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && navItems && navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                menuToggle.style.transform = 'rotate(0deg)';
                menuToggle.innerHTML = '☰';
            }
        }
    });

    // Sticky navigation with scroll effects
    if (nav) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class for styling
            if (scrollTop > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Hide/show navigation on scroll
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                nav.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Skills animation on hover and click
    skillItems.forEach((skill, index) => {
        // Add entrance animation delay
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.classList.add('skill-animate');
        
        // Hover effects
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
            this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        });
        
        // Click animation
        skill.addEventListener('click', function() {
            this.style.animation = 'skillPulse 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });

    // Experience items animation
    experienceItems.forEach((item, index) => {
        // Add entrance animation
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        
        // Trigger animation when in view
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(item);
        
        // Hover effects
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '6px';
            this.style.paddingLeft = '1.5rem';
            this.style.backgroundColor = '#f0f8ff';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '4px';
            this.style.paddingLeft = '0.5rem';
            this.style.backgroundColor = '#f8f9fa';
        });
    });

    // Profile image effects
    if (profileImage) {
        // Image loading animation
        profileImage.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        // Click to enlarge image
        profileImage.addEventListener('click', function() {
            createImageModal(this.src);
        });
        
        // Parallax effect on scroll
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.1;
            if (profileImage) {
                profileImage.style.transform = `translateY(${parallax}px) scale(1)`;
            }
        });
    }

    // Create image modal for profile picture
    function createImageModal(imageSrc) {
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-backdrop">
                <div class="modal-content">
                    <img src="${imageSrc}" alt="Profile Picture">
                    <button class="modal-close">&times;</button>
                </div>
            </div>
        `;
        
        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;
        
        const modalImage = modal.querySelector('img');
        modalImage.style.cssText = `
            width: 100%;
            height: auto;
            border-radius: 10px;
        `;
        
        const closeButton = modal.querySelector('.modal-close');
        closeButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 2rem;
            color: #666;
            cursor: pointer;
            transition: color 0.3s ease;
        `;
        
        document.body.appendChild(modal);
        
        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
        
        // Close modal functionality
        function closeModal() {
            modal.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
        
        closeButton.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.className === 'modal-backdrop') {
                closeModal();
            }
        });
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    // Typing animation for welcome message
    const welcomeTitle = document.querySelector('.welcome h1');
    if (welcomeTitle) {
        const text = welcomeTitle.textContent;
        welcomeTitle.textContent = '';
        welcomeTitle.style.borderRight = '2px solid #fff';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                welcomeTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(() => {
                    welcomeTitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Section animations on scroll
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate child elements
                const childElements = entry.target.querySelectorAll('h1, h2, h3, h4, h5, p, li, img');
                childElements.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(section => {
        sectionObserver.observe(section);
        
        // Prepare child elements for animation
        const childElements = section.querySelectorAll('h1, h2, h3, h4, h5, p, li, img');
        childElements.forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = 'all 0.6s ease';
        });
    });

    // Progress bar for page scroll
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const totalDocScrollLength = docHeight - winHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);
        
        progressBar.style.width = scrollPosition + '%';
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact information click to copy
    const contactItems = document.querySelectorAll('.list li');
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.title = 'Click to copy';
        
        item.addEventListener('click', function() {
            const text = this.textContent.split(': ')[1];
            if (text) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification('Copied to clipboard!', 'success');
                }).catch(() => {
                    showNotification('Failed to copy', 'error');
                });
            }
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 25px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            ${type === 'success' ? 'background: linear-gradient(135deg, #27ae60, #2ecc71);' : 
              type === 'error' ? 'background: linear-gradient(135deg, #e74c3c, #c0392b);' : 
              'background: linear-gradient(135deg, #667eea, #764ba2);'}
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navItems && navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                menuToggle.style.transform = 'rotate(0deg)';
                menuToggle.innerHTML = '☰';
            }
        }
    });
});