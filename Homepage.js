// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.item');
    const navLinks = document.querySelectorAll('.item a');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const scrollThreshold = 100;
    const headerHeight = header ? header.offsetHeight : 0;
    let lastScrollTop = 0;
    let isScrolling;

    // Mobile menu toggle - Fixed class names
    if (menuToggle && navItems) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle active class for mobile menu
            navItems.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Add animation class
            menuToggle.style.transform = navItems.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
        });
    }

    // Active link highlighting - Fixed class names
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
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - (headerHeight || 80);
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button functionality
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (scrollToTopBtn) {
            if (window.pageYOffset > scrollThreshold) {
                scrollToTopBtn.style.display = 'block';
                scrollToTopBtn.style.opacity = '1';
            } else {
                scrollToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= scrollThreshold) {
                        scrollToTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        }
    });

    // Header scroll effect
    if (nav) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                nav.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                nav.style.transform = 'translateY(0)';
            }
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Typing animation for hero text
    const heroTitle = document.querySelector('.sub-head h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #fff';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.grid, .page, .footer-section');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Image lazy loading
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        imageObserver.observe(img);
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.sub-head');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroSection.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Skills highlight animation
    const skillsElement = document.querySelector('#col');
    if (skillsElement) {
        const skills = skillsElement.textContent.split(',');
        let currentSkill = 0;
        
        function highlightSkill() {
            const skillsArray = skillsElement.textContent.split(',');
            skillsElement.innerHTML = skillsArray.map((skill, index) => {
                if (index === currentSkill) {
                    return `<span style="background: #fff; color: #667eea; padding: 2px 8px; border-radius: 15px; animation: pulse 0.5s ease;">${skill.trim()}</span>`;
                }
                return skill;
            }).join(', ');
            
            currentSkill = (currentSkill + 1) % skillsArray.length;
        }
        
        // Start skill highlighting
        setInterval(highlightSkill, 2000);
    }

    // Form validation (if contact form exists)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background: #27ae60;' : 'background: #e74c3c;'}
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
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
            }
        }
        
        // Ctrl + Home scrolls to top
        if (e.ctrlKey && e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Performance optimization - Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Handle scroll-based animations here
        const scrolled = window.pageYOffset;
        
        // Update scroll progress indicator if it exists
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const totalDocScrollLength = docHeight - winHeight;
            const scrollPostion = Math.floor(scrolled / totalDocScrollLength * 100);
            scrollProgress.style.width = scrollPostion + '%';
        }
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // Initialize page
    console.log('Homepage initialized successfully');
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}