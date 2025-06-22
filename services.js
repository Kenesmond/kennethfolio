// Services data
const servicesData = [
    {
        id: 1,
        title: "Custom Website Development",
        category: "web",
        price: "$2,500 - $10,000",
        duration: "4-8 weeks",
        description: "Full-stack web development with modern technologies including React, Node.js, and responsive design.",
        features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
        // image: "https://via.placeholder.com/300x200/4f46e5/ffffff?text=Web+Dev"
        image: "./item8.jpg"

    },
    {
        id: 2,
        title: "E-commerce Solutions",
        category: "web",
        price: "$5,000 - $20,000",
        duration: "6-12 weeks",
        description: "Complete e-commerce platforms with payment integration, inventory management, and admin panels.",
        features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Optimized"],
        // image: "https://via.placeholder.com/300x200/059669/ffffff?text=E-commerce"
        image: "./item8.jpg"
    },
    {
        id: 3,
        title: "UI/UX Design",
        category: "design",
        price: "$1,500 - $5,000",
        duration: "2-4 weeks",
        description: "User-centered design solutions including wireframes, prototypes, and visual design systems.",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
        // image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=UI%2FUX"
        image: "./item8.jpg"
    },
    {
        id: 4,
        title: "Brand Identity Design",
        category: "design",
        price: "$800 - $3,000",
        duration: "1-3 weeks",
        description: "Complete brand identity packages including logo design, color schemes, and brand guidelines.",
        features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
        // image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=Branding"
        image: "./item8.jpg"
    },
    {
        id: 5,
        title: "Digital Marketing Strategy",
        category: "marketing",
        price: "$1,200 - $4,000",
        duration: "2-6 weeks",
        description: "Comprehensive digital marketing strategies including SEO, social media, and content marketing.",
        features: ["SEO Strategy", "Social Media", "Content Planning", "Analytics Setup"],
        // image: "https://via.placeholder.com/300x200/ea580c/ffffff?text=Marketing"
        image: "./item8.jpg"
    },
    {
        id: 6,
        title: "SEO Optimization",
        category: "marketing",
        price: "$500 - $2,000",
        duration: "Ongoing",
        description: "Search engine optimization services to improve your website's visibility and ranking.",
        features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Tracking"],
        // image: "https://via.placeholder.com/300x200/0891b2/ffffff?text=SEO"
        image: "./item8.jpg"
    },
    {
        id: 7,
        title: "Business Consulting",
        category: "consulting",
        price: "$150 - $300/hour",
        duration: "Flexible",
        description: "Strategic business consulting to help optimize operations and drive growth.",
        features: ["Strategy Planning", "Process Optimization", "Market Analysis", "Growth Planning"],
        // image: "https://via.placeholder.com/300x200/be185d/ffffff?text=Consulting"
        image: "./item8.jpg"
    },
    {
        id: 8,
        title: "Tech Stack Consulting",
        category: "consulting",
        price: "$200 - $400/hour",
        duration: "Flexible",
        description: "Technical consulting for choosing the right technology stack for your projects.",
        features: ["Technology Assessment", "Architecture Planning", "Best Practices", "Implementation Guide"],
        // image: "https://via.placeholder.com/300x200/0d9488/ffffff?text=Tech+Consulting"
        image: "./item8.jpg"
    },
    {
        id: 9,
        title: "Mobile App Development",
        category: "web",
        price: "$8,000 - $25,000",
        duration: "8-16 weeks",
        description: "Native and cross-platform mobile application development for iOS and Android.",
        features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"],
        // image: "https://via.placeholder.com/300x200/7c2d12/ffffff?text=Mobile+App"
        image: "./item8.jpg"
    },
    {
        id: 10,
        title: "Graphic Design Services",
        category: "design",
        price: "$300 - $1,500",
        duration: "1-2 weeks",
        description: "Professional graphic design for marketing materials, presentations, and digital assets.",
        features: ["Print Design", "Digital Graphics", "Presentations", "Marketing Materials"],
        // image: "https://via.placeholder.com/300x200/1e40af/ffffff?text=Graphics"
        image: "./item8.jpg"
    },
    {
        id: 11,
        title: "Social Media Management",
        category: "marketing",
        price: "$800 - $2,500/month",
        duration: "Ongoing",
        description: "Complete social media management including content creation, posting, and engagement.",
        features: ["Content Creation", "Scheduled Posting", "Community Management", "Analytics Reports"],
        // image: "https://via.placeholder.com/300x200/c2410c/ffffff?text=Social+Media"
        image: "./item8.jpg"
    },
    {
        id: 12,
        title: "API Development",
        category: "web",
        price: "$2,000 - $8,000",
        duration: "3-6 weeks",
        description: "RESTful API development and integration services for web and mobile applications.",
        features: ["RESTful APIs", "Database Integration", "Authentication", "Documentation"],
        // image: "https://via.placeholder.com/300x200/166534/ffffff?text=API+Dev"
        image: "./item8.jpg"
    },
    {
        id: 13,
        title: "Website Redesign",
        category: "design",
        price: "$3,000 - $12,000",
        duration: "4-8 weeks",
        description: "Complete website redesign with modern UI/UX principles and improved user experience.",
        features: ["Modern Design", "User Experience", "Performance Optimization", "Mobile First"],
        // image: "https://via.placeholder.com/300x200/991b1b/ffffff?text=Redesign"
        image: "./item8.jpg"
    },
    {
        id: 14,
        title: "Content Marketing",
        category: "marketing",
        price: "$1,000 - $3,500/month",
        duration: "Ongoing",
        description: "Strategic content marketing including blog posts, articles, and content strategy.",
        features: ["Content Strategy", "Blog Writing", "SEO Content", "Content Calendar"],
        // image: "https://via.placeholder.com/300x200/a16207/ffffff?text=Content"
        image: "./item8.jpg"
    },
    {
        id: 15,
        title: "Digital Transformation",
        category: "consulting",
        price: "$5,000 - $20,000",
        duration: "8-16 weeks",
        description: "Complete digital transformation consulting to modernize business processes and technology.",
        features: ["Process Analysis", "Technology Integration", "Training", "Implementation Support"],
        // image: "https://via.placeholder.com/300x200/6d28d9/ffffff?text=Digital+Transform"
        image: "./item8.jpg"
    },
    {
        id: 16,
        title: "Database Design",
        category: "web",
        price: "$1,500 - $6,000",
        duration: "2-5 weeks",
        description: "Professional database design and optimization for web applications and systems.",
        features: ["Schema Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
        // image: "https://via.placeholder.com/300x200/0c4a6e/ffffff?text=Database"
        image: "./item8.jpg"
    },
    {
        id: 17,
        title: "Logo Animation",
        category: "design",
        price: "$500 - $2,000",
        duration: "1-2 weeks",
        description: "Professional logo animation and motion graphics for branding and marketing materials.",
        features: ["2D Animation", "Motion Graphics", "Multiple Formats", "Brand Integration"],
        // image: "https://via.placeholder.com/300x200/be123c/ffffff?text=Animation"
        image: "./item8.jpg"
    },
    {
        id: 18,
        title: "Email Marketing",
        category: "marketing",
        price: "$600 - $2,000/month",
        duration: "Ongoing",
        description: "Email marketing campaigns including design, automation, and performance tracking.",
        features: ["Campaign Design", "Automation", "A/B Testing", "Performance Analytics"],
        // image: "https://via.placeholder.com/300x200/0369a1/ffffff?text=Email+Marketing"
        image: "./item8.jpg"
    },
    {
        id: 19,
        title: "Performance Consulting",
        category: "consulting",
        price: "$180 - $350/hour",
        duration: "Flexible",
        description: "Website and application performance consulting to optimize speed and user experience.",
        features: ["Performance Audit", "Optimization Strategy", "Implementation Guide", "Monitoring Setup"],
        // image: "https://via.placeholder.com/300x200/059212/ffffff?text=Performance"
        image: "./item8.jpg"
    },
    {
        id: 20,
        title: "Cloud Migration",
        category: "web",
        price: "$3,000 - $15,000",
        duration: "4-10 weeks",
        description: "Complete cloud migration services including planning, implementation, and optimization.",
        features: ["Migration Planning", "Cloud Setup", "Data Transfer", "Optimization"],
        // image: "https://via.placeholder.com/300x200/7c2d12/ffffff?text=Cloud"
        image: "./item8.jpg"
    },
    {
        id: 21,
        title: "Print Design",
        category: "design",
        price: "$200 - $1,000",
        duration: "3-7 days",
        description: "Professional print design services for business cards, brochures, and marketing materials.",
        features: ["Business Cards", "Brochures", "Flyers", "Print Ready Files"],
        // image: "https://via.placeholder.com/300x200/4338ca/ffffff?text=Print+Design"
        image: "./item8.jpg"
    },
    {
        id: 22,
        title: "PPC Advertising",
        category: "marketing",
        price: "$1,000 - $5,000/month",
        duration: "Ongoing",
        description: "Pay-per-click advertising management for Google Ads, Facebook Ads, and other platforms.",
        features: ["Campaign Setup", "Keyword Research", "Ad Creation", "Performance Optimization"],
        // image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=PPC"
        image: "./item8.jpg"
    },
    {
        id: 23,
        title: "Security Consulting",
        category: "consulting",
        price: "$250 - $500/hour",
        duration: "Flexible",
        description: "Cybersecurity consulting including security audits, vulnerability assessments, and recommendations.",
        features: ["Security Audit", "Vulnerability Assessment", "Security Planning", "Implementation Support"],
        // image: "https://via.placeholder.com/300x200/b91c1c/ffffff?text=Security"
        image: "./item8.jpg"
    },
    {
        id: 24,
        title: "DevOps Setup",
        category: "web",
        price: "$2,500 - $10,000",
        duration: "3-8 weeks",
        description: "Complete DevOps setup including CI/CD pipelines, deployment automation, and monitoring.",
        features: ["CI/CD Setup", "Deployment Automation", "Monitoring", "Infrastructure as Code"],
        // image: "https://via.placeholder.com/300x200/0f766e/ffffff?text=DevOps"
        image: "./item8.jpg"
    }
];

// Global variables
let currentPage = 1;
let itemsPerPage = 6;
let filteredServices = [...servicesData];
let currentCategory = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    updatePagination();
});

// Render services grid
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const servicesToShow = filteredServices.slice(startIndex, endIndex);

    servicesGrid.innerHTML = servicesToShow.map(service => `
        <div class="service-card" data-category="${service.category}">
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}" loading="lazy">
                <div class="service-overlay">
                    <button class="view-details-btn" onclick="openModal(${service.id})">
                        View Details
                    </button>
                </div>
            </div>
            <div class="service-content">
                <div class="service-category">${getCategoryName(service.category)}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-meta">
                    <div class="service-price">${service.price}</div>
                    <div class="service-duration">${service.duration}</div>
                </div>
                <div class="service-features">
                    ${service.features.slice(0, 2).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
                <button class="contact-btn" onclick="contactForService('${service.title}')">
                    Get Quote
                </button>
            </div>
        </div>
    `).join('');

    updatePaginationInfo();
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'web': 'Web Development',
        'design': 'Design',
        'marketing': 'Marketing',
        'consulting': 'Consulting'
    };
    return categoryNames[category] || category;
}

// Filter services by category
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Apply filters
    applyFilters();
}

// Filter services by search term
function filterServices() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentPage = 1;
    applyFilters(searchTerm);
}

// Apply all filters
function applyFilters(searchTerm = '') {
    const searchInput = searchTerm || document.getElementById('searchInput').value.toLowerCase();
    
    filteredServices = servicesData.filter(service => {
        const matchesCategory = currentCategory === 'all' || service.category === currentCategory;
        const matchesSearch = searchInput === '' || 
            service.title.toLowerCase().includes(searchInput) ||
            service.description.toLowerCase().includes(searchInput) ||
            service.features.some(feature => feature.toLowerCase().includes(searchInput));
        
        return matchesCategory && matchesSearch;
    });

    renderServices();
    updatePagination();
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    
    if (direction === 1 && currentPage < totalPages) {
        currentPage++;
    } else if (direction === -1 && currentPage > 1) {
        currentPage--;
    }
    renderServices();
    updatePagination();
}
// Update pagination info
function updatePaginationInfo() {
    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const paginationInfo = document.getElementById('paginationInfo');
    paginationInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}
// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('page-btn');
        pageButton.onclick = () => {
            currentPage = i;
            renderServices();
            updatePaginationInfo();
        };
        pagination.appendChild(pageButton);
    }
}