// Project data
const projects = [
    {
        id: 1,
        title: "Student Management Portal",
        description: "A comprehensive student management system with login functionality, profile picture upload, and student information editing capabilities.",
        category: "fullstack",
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "postgres", "Express"],
        image: "🎓",
        demoUrl: "#",
        codeUrl: "#",
        details: "Built a complete student management portal featuring user authentication, profile management, and administrative tools. Implemented secure login system with JWT tokens, file upload functionality for profile pictures, and CRUD operations for student data management."
    },
    {
        id: 2,
        title: "Hotel Management System",
        description: "A full-featured hotel management website with room booking functionality and customer management.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "postgres", "Bootstrap"],
        image: "🏨",
        demoUrl: "#",
        codeUrl: "#",
        details: "Developed a comprehensive hotel management system with room availability tracking, booking management, customer profiles, and payment integration. Features include real-time room status updates, booking calendar, and administrative dashboard."
    },
    {
        id: 3,
        title: "Construction Company Website",
        description: "A responsive corporate website for a construction company showcasing services and projects.",
        category: "frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
        image: "🏗️",
        demoUrl: "#",
        codeUrl: "#",
        details: "Created a modern, responsive website for a construction company featuring project galleries, service descriptions, team profiles, and contact forms. Implemented smooth animations and mobile-first design approach."
    },
    {
        id: 4,
        title: "Restaurant Delivery App",
        description: "A food delivery platform where customers can order food and have it delivered to their location.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        image: "🍕",
        demoUrl: "#",
        codeUrl: "#",
        details: "Built a complete food delivery application with menu browsing, cart functionality, order tracking, and payment processing. Integrated with Stripe for secure payments and implemented real-time order status updates."
    },
    {
        id: 5,
        title: "Payment Wallet App",
        description: "A digital wallet application for sending and receiving money with secure transaction processing.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
        image: "💳",
        demoUrl: "#",
        codeUrl: "#",
        details: "Developed a secure digital wallet application with user authentication, transaction history, money transfer capabilities, and balance management. Implemented encryption for sensitive data and transaction logging."
    },
    {
        id: 6,
        title: "Church Website",
        description: "An appealing church website with event management and community features.",
        category: "frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        image: "⛪",
        demoUrl: "#",
        codeUrl: "#",
        details: "Created a beautiful church website featuring event calendars, sermon archives, community news, and donation systems. Designed with accessibility in mind and optimized for all devices."
    },
    {
        id: 7,
        title: "Job Recruitment Platform",
        description: "A job application platform connecting employers with job seekers.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        image: "💼",
        demoUrl: "#",
        codeUrl: "#",
        details: "Built a comprehensive job recruitment platform with job posting, application tracking, resume upload, and real-time messaging between employers and candidates. Features advanced search and filtering capabilities."
    },
    {
        id: 8,
        title: "E-commerce Dashboard",
        description: "An admin dashboard for managing e-commerce operations and analytics.",
        category: "frontend",
        technologies: ["React", "Chart.js", "Material-UI", "Redux"],
        image: "📊",
        demoUrl: "#",
        codeUrl: "#",
        details: "Developed a comprehensive admin dashboard for e-commerce management featuring sales analytics, inventory tracking, customer management, and order processing. Implemented interactive charts and real-time data visualization."
    },
    {
        id: 9,
        title: "Blog Management System",
        description: "A content management system for creating and managing blog posts.",
        category: "fullstack",
        technologies: ["Node.js", "Express", "MongoDB", "EJS", "Multer"],
        image: "📝",
        demoUrl: "#",
        codeUrl: "#",
        details: "Created a full-featured blog management system with rich text editor, image upload, category management, and comment system. Implemented SEO optimization and social media sharing capabilities."
    },
    {
        id: 10,
        title: "Weather App",
        description: "A responsive weather application with location-based forecasts.",
        category: "frontend",
        technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
        image: "🌤️",
        demoUrl: "#",
        codeUrl: "#",
        details: "Built a modern weather application with current conditions, 7-day forecasts, and location search. Integrated with OpenWeatherMap API and implemented geolocation for automatic location detection."
    },
    {
        id: 11,
        title: "Task Management API",
        description: "A RESTful API for task management with user authentication.",
        category: "backend",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
        image: "⚙️",
        demoUrl: "#",
        codeUrl: "#",
        details: "Developed a robust REST API for task management featuring user authentication, CRUD operations, task categorization, and due date management. Implemented comprehensive error handling and API documentation."
    },
    {
        id: 12,
        title: "Real Estate Website",
        description: "A property listing website with search and filter functionality.",
        category: "frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Leaflet"],
        image: "🏠",
        demoUrl: "#",
        codeUrl: "#",
        details: "Created a modern real estate website with property listings, advanced search filters, interactive maps, and contact forms. Implemented responsive design and optimized for search engines."
    },
    {
        id: 13,
        title: "Chat Application",
        description: "A real-time chat application with multiple room support.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
        image: "💬",
        demoUrl: "#",
        codeUrl: "#",
        details: "Built a real-time chat application with multiple chat rooms, private messaging, user authentication, and message history. Implemented real-time notifications and emoji support."
    },
    {
        id: 14,
        title: "Inventory Management API",
        description: "A backend system for managing inventory and stock levels.",
        category: "backend",
        technologies: ["Node.js", "Express", "PostgreSQL", "Sequelize"],
        image: "📦",
        demoUrl: "#",
        codeUrl: "#",
        details: "Developed a comprehensive inventory management API with stock tracking, supplier management, order processing, and automated reorder alerts. Implemented data validation and transaction management."
    },
    {
        id: 15,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills.",
        category: "frontend",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        image: "🎨",
        demoUrl: "#",
        codeUrl: "#",
        details: "Designed and developed a creative portfolio website with smooth animations, project showcases, and interactive elements. Implemented modern design principles and optimized performance."
    },
    {
        id: 16,
        title: "User Authentication API",
        description: "A secure authentication system with JWT and password encryption.",
        category: "backend",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
        image: "🔐",
        demoUrl: "#",
        codeUrl: "#",
        details: "Built a robust authentication API with user registration, login, password reset, and email verification. Implemented JWT tokens, password hashing, and rate limiting for security."
    },
    {
        id: 17,
        title: "Event Management System",
        description: "A platform for creating and managing events with ticket booking.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        image: "🎪",
        demoUrl: "#",
        codeUrl: "#",
        details: "Developed a complete event management platform with event creation, ticket booking, payment processing, and attendee management. Features include QR code generation and event analytics."
    },
    {
        id: 18,
        title: "Social Media Dashboard",
        description: "A dashboard for managing multiple social media accounts and analytics.",
        category: "frontend",
        technologies: ["React", "Chart.js", "Material-UI", "Axios"],
        image: "📱",
        demoUrl: "#",
        codeUrl: "#",
        details: "Created a comprehensive social media management dashboard with post scheduling, analytics visualization, and multi-platform integration. Implemented responsive design and real-time data updates."
    }
];

// Pagination and filtering variables
let currentPage = 1;
let itemsPerPage = 6;
let filteredProjects = [...projects];
let currentCategory = 'all';

// DOM elements
const projectsGrid = document.getElementById('projectsGrid');
const paginationInfo = document.getElementById('paginationInfo');
const pageNumbers = document.getElementById('pageNumbers');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const itemsPerPageSelect = document.getElementById('itemsPerPage');
const searchInput = document.getElementById('searchInput');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    updatePagination();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.item');
    
    if (menuToggle && navItems.classList.contains(active)) {
        navItems.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});

// Display projects for current page
function displayProjects() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const projectsToShow = filteredProjects.slice(startIndex, endIndex);
    
    projectsGrid.innerHTML = '';
    
    if (projectsToShow.length === 0) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: #fff; padding: 2rem;">
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }
    
    projectsToShow.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <div class="project-image">
            <span>${project.image}</span>
            <div class="project-category">${project.category}</div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoUrl}" class="project-link btn-demo" target="_blank">Live Demo</a>
                <a href="${project.codeUrl}" class="project-link btn-code" target="_blank">View Code</a>
                <button class="project-link btn-demo" onclick="openModal(${project.id})">Details</button>
            </div>
        </div>
    `;
    
    return card;
}

// Filter projects by category
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    applyFilters();
}

// Filter projects by search term
function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    currentPage = 1;
    
    applyFilters(searchTerm);
}

// Apply all filters
function applyFilters(searchTerm = '') {
    filteredProjects = projects.filter(project => {
        const matchesCategory = currentCategory === 'all' || project.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm));
        
        return matchesCategory && matchesSearch;
    });
    
    displayProjects();
    updatePagination();
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, filteredProjects.length);
    
    // Update pagination info
    paginationInfo.textContent = `Showing ${startItem}-${endItem} of ${filteredProjects.length} projects`;
    
    // Update navigation buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Generate page numbers
    generatePageNumbers(totalPages);
}

// Generate page number buttons
function generatePageNumbers(totalPages) {
    pageNumbers.innerHTML = '';
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Add first page and ellipsis if needed
    if (startPage > 1) {
        addPageButton(1);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.color = '#fff';
            ellipsis.style.padding = '0.5rem';
            pageNumbers.appendChild(ellipsis);
        }
    }
    
    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i);
    }
    // Add last page and ellipsis if needed
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.color = '#fff';
            ellipsis.style.padding = '0.5rem';
            pageNumbers.appendChild(ellipsis);
        }
        addPageButton(totalPages);
    }
}
// Add a page number button
function addPageButton(page) {
    const button = document.createElement('button');
    button.textContent = page;
    button.className = 'page-btn';
    button.disabled = page === currentPage;
    button.addEventListener('click', () => {
        currentPage = page;
        displayProjects();
        updatePagination();
    });
    pageNumbers.appendChild(button);
}
// Open project details modal
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.details}</p>
            <div class="modal-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="modal-links">
                <a href="${project.demoUrl}" class="btn-demo" target="_blank">Live Demo</a>
                <a href="${project.codeUrl}" class="btn-code" target="_blank">View Code</a>
            </div>
        `;
        projectModal.style.display = 'block';
    }
}
// Close project details modal
function closeModal() {
    projectModal.style.display = 'none';
}
// Event listeners for pagination buttons
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProjects();
        updatePagination();
    }
});
nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProjects();
        updatePagination();
    }
});
// Event listener for items per page select
itemsPerPageSelect.addEventListener('change', (event) => {
    itemsPerPage = parseInt(event.target.value, 10);
    currentPage = 1; // Reset to first page
    displayProjects();
    updatePagination();
});
// Event listener for search input
searchInput.addEventListener('input', filterProjects);
// Event listener for modal close button
const modalCloseBtn = document.getElementById('modalCloseBtn');
if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
}
// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === projectModal) {
        closeModal();
    }
});
// Close modal with Escape key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

