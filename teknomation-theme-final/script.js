// Data Constants
const SERVICES = [
    {
        title: "Industrial Automation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        description: "Streamline your production lines with our state-of-the-art robotic and PLC solutions. We design, implement, and maintain automated systems that reduce human error and maximize throughput."
    },
    {
        title: "Strategic Consulting",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        description: "Navigate complex market shifts with our expert business consultants. We provide data-driven insights to help you optimize your supply chain, financial structures, and market positioning."
    },
    {
        title: "Smart Infrastructure",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        description: "Transform your facility into a connected hub. Our smart infrastructure solutions integrate IoT sensors, secure networking, and real-time monitoring to give you total control over your environment."
    },
    {
        title: "Security & Compliance",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        description: "Protect your physical and digital assets. We offer comprehensive security audits, ISO compliance certification assistance, and advanced surveillance integration."
    }
];

const PRODUCTS = [
    { id: 1, name: "Aura Pro Controller", price: "$299", category: "Controllers", image: "https://picsum.photos/seed/tech1/600/600" },
    { id: 2, name: "Industrial Sensor Hub", price: "$149", category: "Sensors", image: "https://picsum.photos/seed/tech2/600/600" },
    { id: 3, name: "Smart Gate Module", price: "$499", category: "Automation", image: "https://picsum.photos/seed/tech3/600/600" },
    { id: 4, name: "Secure Link Router", price: "$199", category: "Networking", image: "https://picsum.photos/seed/tech4/600/600" },
    { id: 5, name: "Thermal Camera Unit", price: "$899", category: "Security", image: "https://picsum.photos/seed/tech5/600/600" },
    { id: 6, name: "Power Management Unit", price: "$349", category: "Power", image: "https://picsum.photos/seed/tech6/600/600" },
    { id: 7, name: "HMI Touch Panel", price: "$599", category: "Interface", image: "https://picsum.photos/seed/tech7/600/600" },
    { id: 8, name: "Wireless Bridge", price: "$249", category: "Networking", image: "https://picsum.photos/seed/tech8/600/600" },
];

const PROJECTS = [
    {
        title: "Smart Logistics Hub",
        category: "Automation",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        description: "A fully automated warehouse system integrating robotic arms and conveyor sensors."
    },
    {
        title: "Eco-Friendly Data Center",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
        description: "Advanced cooling and power management for a sustainable high-density computing facility."
    },
    {
        title: "Secure Campus Network",
        category: "Networking",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
        description: "A high-speed, encrypted wireless mesh network for a multi-building corporate campus."
    },
    {
        title: "Automated Gate System",
        category: "Security",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        description: "Biometric access control and heavy-duty gate automation for a high-security facility."
    },
    {
        title: "Smart Factory Integration",
        category: "Manufacturing",
        image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
        description: "End-to-end IoT integration for real-time production monitoring and predictive maintenance."
    },
    {
        title: "Renewable Energy Hub",
        category: "Power",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800",
        description: "Smart grid management for a solar and wind energy storage facility."
    }
];

const TESTIMONIALS = [
    {
        name: "Varun Kumar Thapliyal",
        role: "CEO, Reliance AI",
        text: "Working with them has been a game changer for our organization. Their commitment to safeguarding our data and ensuring compliance has given us peace of mind.",
        avatar: "https://i.pravatar.cc/150?u=varun"
    },
    {
        name: "Sarah Jenkins",
        role: "Director, TechFlow",
        text: "The expertise and proactive approach have not only enhanced our security posture but also built trust with our clients. Highly recommend their services!",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Michael Chen",
        role: "CTO, Global Logistics",
        text: "The automation solutions provided by Aura have reduced our operational costs by 40%. The ROI was evident within the first quarter.",
        avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
        name: "Elena Rodriguez",
        role: "Founder, GreenSpace",
        text: "Their attention to detail in the design phase was exceptional. The final product exceeded our expectations in both form and function.",
        avatar: "https://i.pravatar.cc/150?u=elena"
    },
    {
        name: "David Wilson",
        role: "Operations Manager, BuildCorp",
        text: "Implementing Aura's smart gate modules has streamlined our site access significantly. The security features are top-notch and easy to manage.",
        avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
        name: "Aisha Khan",
        role: "Lead Architect, UrbanDesign",
        text: "Aura's industrial design aesthetic perfectly complements our modern architectural projects. Their components are as beautiful as they are functional.",
        avatar: "https://i.pravatar.cc/150?u=aisha"
    },
    {
        name: "Robert Miller",
        role: "Founder, TechGrid",
        text: "The strategic capital solutions provided during our funding round were instrumental in our expansion. Aura is more than just a vendor; they're a partner.",
        avatar: "https://i.pravatar.cc/150?u=robert"
    },
    {
        name: "Sophia Lee",
        role: "Director, FutureWorks",
        text: "We've seen a significant improvement in our real-time monitoring capabilities since switching to Aura's sensor hubs. Highly reliable technology.",
        avatar: "https://i.pravatar.cc/150?u=sophia"
    }
];

const FAQS = [
    {
        question: "How does it work?",
        answer: "Once you register, one of our tax specialists who is keen to specific regulations and tax laws of your country, will contact you for onboarding. It includes registering you as a company and sorting out your current finances."
    },
    {
        question: "Do you have any discounts?",
        answer: "We offer seasonal discounts and special pricing for startups and non-profits. Contact our sales team for a custom quote."
    },
    {
        question: "My clients are from another country. How does it affect my taxes?",
        answer: "Our platform handles cross-border tax compliance automatically, ensuring you meet the requirements of both your home country and your clients' locations."
    },
    {
        question: "Can I register in the middle of the year?",
        answer: "Yes, you can join at any time. We'll help you migrate your data and ensure a smooth transition regardless of the fiscal calendar."
    },
    {
        question: "What's the cancellation policy?",
        answer: "We offer a flexible monthly subscription. You can cancel at any time with a 30-day notice period."
    }
];

const GALLERY = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
];

const MILESTONES = [
    { year: "2009", title: "The Beginning", desc: "Aura was founded as a boutique engineering consultancy in London." },
    { year: "2012", title: "First Major Contract", desc: "Partnered with a leading European logistics firm to automate their primary hub." },
    { year: "2015", title: "Global Expansion", desc: "Opened offices in Singapore and New York to serve the Asian and American markets." },
    { year: "2018", title: "Innovation Award", desc: "Received the 'Industrial Excellence' award for our Smart Gate Module series." },
    { year: "2021", title: "Sustainability Pledge", desc: "Committed to 100% carbon-neutral operations and eco-friendly manufacturing." },
    { year: "2024", title: "The Future", desc: "Launching our next-gen AI-driven automation platform for global enterprises." },
];

const VALUES = [
    { icon: "target", title: "Precision", desc: "We believe in the power of detail. Every component is engineered to perfection." },
    { icon: "zap", title: "Innovation", desc: "We don't just follow trends; we set them through continuous R&D." },
    { icon: "shield", title: "Integrity", desc: "Our clients trust us with their most critical assets. We honor that trust." },
    { icon: "heart", title: "Sustainability", desc: "We build for the future, ensuring our solutions are eco-friendly." },
];

const CONTACT_INFO = [
    { icon: "phone-call", title: "Call Us", desc: "Mon-Fri: 9am - 6pm", val: "+1 (555) 000-0000" },
    { icon: "mail", title: "Email Us", desc: "Support available 24/7", val: "hello@aura-design.com" },
    { icon: "map-pin", title: "Visit Us", desc: "Corporate Headquarters", val: "123 Innovation Way, Tech City" },
];

// State Management
let currentRoute = '#home';
let activeTestimonial = 0;
let visibleCards = 1;
let productFilter = 'All';
let productSearch = '';
let cart = [];
let selectedProduct = null;

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
const testimonialCarousel = document.querySelector('#testimonial-carousel .carousel-container');
const carouselDots = document.getElementById('carousel-dots');
const faqList = document.getElementById('faq-list');
const galleryGrid = document.getElementById('gallery-grid');
const servicesList = document.getElementById('services-list');
const productsGrid = document.getElementById('products-grid');
const productCategories = document.getElementById('product-categories');
const productSearchInput = document.getElementById('product-search');
const projectsListGrid = document.getElementById('projects-list-grid');
const milestonesList = document.getElementById('milestones-list');
const valuesGrid = document.getElementById('values-grid');
const contactInfoGrid = document.getElementById('contact-info-grid');

// Router Logic
function handleRouting() {
    const hash = window.location.hash || '#home';
    currentRoute = hash;

    // Special handling for product detail if selectedProduct is missing
    if (hash === '#product-detail' && !selectedProduct) {
        window.location.hash = '#products';
        return;
    }

    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show current section
    const targetSection = document.getElementById('page-' + hash.substring(1));
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Update navbar active state
    document.querySelectorAll('.nav-item').forEach(link => {
        const path = link.getAttribute('href');
        const isMobile = link.closest('#mobile-menu');
        
        if (path === hash) {
            link.classList.add('text-brand-brown');
            if (!isMobile) link.classList.remove('text-[#5E6265]');
            else link.classList.remove('text-brand-dark');
        } else {
            link.classList.remove('text-brand-brown');
            if (!isMobile) link.classList.add('text-[#5E6265]');
            else link.classList.add('text-brand-dark');
        }
    });

    // Close mobile menu
    mobileMenu.classList.add('hidden');
    menuToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-trigger animations
    checkFadeIn();
}

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuToggle.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    lucide.createIcons();
});

// Scroll Header Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('py-3', 'shadow-md');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.add('py-6');
        navbar.classList.remove('py-3', 'shadow-md');
    }
    checkFadeIn();
});

// Fade-in Animation Logic
function checkFadeIn() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
            el.classList.add('visible');
        }
    });
}

// Carousel Logic
function updateCarousel() {
    const maxIdx = Math.max(0, TESTIMONIALS.length - visibleCards);
    if (activeTestimonial > maxIdx) activeTestimonial = 0;
    
    const offset = activeTestimonial * (100 / visibleCards);
    testimonialCarousel.style.transform = `translateX(-${offset}%)`;

    // Update dots
    const dots = carouselDots.querySelectorAll('button');
    dots.forEach((dot, idx) => {
        if (idx === activeTestimonial) {
            dot.classList.add('bg-brand-brown', 'w-4');
            dot.classList.remove('bg-brand-brown/30', 'w-2');
        } else {
            dot.classList.remove('bg-brand-brown', 'w-4');
            dot.classList.add('bg-brand-brown/30', 'w-2');
        }
    });
}

function initCarousel() {
    testimonialCarousel.innerHTML = TESTIMONIALS.map(t => `
        <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] shrink-0">
            <div class="bg-white p-8 rounded-3xl shadow-xl border border-brand-brown/10 h-full flex flex-col">
                <div class="text-brand-brown mb-6">
                    <span class="text-6xl font-serif">“</span>
                </div>
                <p class="text-brand-dark/70 mb-8 leading-relaxed italic text-lg flex-1">
                    ${t.text}
                </p>
                <div class="flex items-center gap-4 mt-auto">
                    <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full border-2 border-brand-brown" />
                    <div>
                        <div class="font-bold">${t.name}</div>
                        <div class="text-xs text-brand-dark/50 uppercase tracking-widest">${t.role}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    const dotCount = Math.max(0, TESTIMONIALS.length - visibleCards + 1);
    carouselDots.innerHTML = Array.from({ length: dotCount }).map((_, idx) => `
        <button class="w-2 h-2 rounded-full transition-all bg-brand-brown/30" onclick="setActiveTestimonial(${idx})"></button>
    `).join('');

    updateCarousel();
}

window.setActiveTestimonial = (idx) => {
    activeTestimonial = idx;
    updateCarousel();
};

document.getElementById('next-testimonial').addEventListener('click', () => {
    const maxIdx = Math.max(0, TESTIMONIALS.length - visibleCards);
    activeTestimonial = activeTestimonial >= maxIdx ? 0 : activeTestimonial + 1;
    updateCarousel();
});

document.getElementById('prev-testimonial').addEventListener('click', () => {
    const maxIdx = Math.max(0, TESTIMONIALS.length - visibleCards);
    activeTestimonial = activeTestimonial <= 0 ? maxIdx : activeTestimonial - 1;
    updateCarousel();
});

// FAQ Logic
function initFAQ() {
    faqList.innerHTML = FAQS.map((faq, idx) => `
        <div class="border-b border-brand-brown/20 last:border-0">
            <button class="w-full py-6 flex items-center justify-between text-left group faq-toggle" data-index="${idx}">
                <span class="text-xl font-medium transition-colors text-brand-dark/70 group-hover:text-brand-dark">
                    ${faq.question}
                </span>
                <i data-lucide="chevron-down" class="w-5 h-5 transition-transform"></i>
            </button>
            <div class="faq-content">
                <p class="pb-6 text-brand-dark/60 leading-relaxed max-w-xl">
                    ${faq.answer}
                </p>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            const isOpen = content.classList.contains('open');

            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(c => c.classList.remove('open'));
            document.querySelectorAll('.faq-toggle i').forEach(i => i.style.transform = 'rotate(0deg)');

            if (!isOpen) {
                content.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
    lucide.createIcons();
}

// Gallery Logic
function initGallery() {
    galleryGrid.innerHTML = GALLERY.map((img, idx) => `
        <div class="gallery-item fade-in">
            <div class="rounded-3xl overflow-hidden group relative">
                <img src="${img}" alt="Project ${idx + 1}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div class="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors flex items-center justify-center">
                    <div class="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Project
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Services Page Logic
function initServicesPage() {
    servicesList.innerHTML = SERVICES.map((service, idx) => `
        <div class="grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}">
            <div class="fade-in ${idx % 2 === 1 ? 'lg:order-2' : ''}">
                <div class="aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover" />
                </div>
            </div>
            <div class="fade-in ${idx % 2 === 1 ? 'lg:order-1' : ''}">
                <div class="text-brand-brown font-bold uppercase tracking-widest text-sm mb-4">Service 0${idx + 1}</div>
                <h2 class="text-4xl font-bold mb-6">${service.title}</h2>
                <p class="text-brand-dark/60 text-lg leading-relaxed mb-8">
                    ${service.description}
                </p>
                <div class="grid sm:grid-cols-2 gap-6 mb-10">
                    <div class="flex gap-3">
                        <i data-lucide="zap" class="text-brand-brown shrink-0 w-5 h-5"></i>
                        <span class="font-medium">High Efficiency</span>
                    </div>
                    <div class="flex gap-3">
                        <i data-lucide="shield" class="text-brand-brown shrink-0 w-5 h-5"></i>
                        <span class="font-medium">Certified Quality</span>
                    </div>
                    <div class="flex gap-3">
                        <i data-lucide="clock" class="text-brand-brown shrink-0 w-5 h-5"></i>
                        <span class="font-medium">24/7 Support</span>
                    </div>
                    <div class="flex gap-3">
                        <i data-lucide="award" class="text-brand-brown shrink-0 w-5 h-5"></i>
                        <span class="font-medium">Proven ROI</span>
                    </div>
                </div>
                <button class="btn-primary inline-flex items-center gap-2">
                    Inquire Now <i data-lucide="arrow-right" class="w-4.5 h-4.5"></i>
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Products Page Logic
function renderProducts() {
    const filtered = PRODUCTS.filter(p => {
        const matchesCat = productFilter === 'All' || p.category === productFilter;
        const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase());
        return matchesCat && matchesSearch;
    });

    productsGrid.innerHTML = filtered.map(product => `
        <div class="bg-white p-4 rounded-3xl border border-brand-brown/10 group fade-in visible flex flex-col h-full">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6 bg-brand-light relative cursor-pointer" onclick="openProductDetail(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div class="flex-1">
                <div class="text-xs text-brand-brown font-bold uppercase tracking-widest mb-1">${product.category}</div>
                <h3 class="font-bold mb-1 text-lg">${product.name}</h3>
                <div class="text-brand-brown font-bold text-xl mb-4">${product.price}</div>
            </div>
            <div class="flex gap-2">
                <button onclick="addToCart(${product.id})" class="flex-1 bg-brand-dark text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2">
                    <i data-lucide="shopping-cart" class="w-4 h-4"></i> Add to Cart
                </button>
                <button onclick="openProductDetail(${product.id})" class="w-12 h-12 border border-brand-brown/20 rounded-xl flex items-center justify-center hover:bg-brand-light transition-colors">
                    <i data-lucide="eye" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        cart.push({ ...product, cartId: Date.now() });
        updateCartUI();
        showNotification(`${product.name} added to cart!`);
    }
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.classList.toggle('hidden', cart.length === 0);
    }

    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="flex flex-col items-center justify-center py-12 text-center">
                    <div class="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-dark/20 mb-4">
                        <i data-lucide="shopping-bag" class="w-8 h-8"></i>
                    </div>
                    <p class="text-brand-dark/50">Your cart is empty</p>
                </div>
            `;
        } else {
            cartItemsList.innerHTML = cart.map(item => `
                <div class="flex items-center gap-4 p-4 bg-brand-light rounded-2xl mb-3">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover" />
                    <div class="flex-1">
                        <h4 class="font-bold text-sm">${item.name}</h4>
                        <div class="text-brand-brown font-bold">${item.price}</div>
                    </div>
                    <button onclick="removeFromCart(${item.cartId})" class="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>
            `).join('');
        }
    }

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + parseInt(item.price.replace('$', '')), 0);
        cartTotal.textContent = `$${total}`;
    }
    
    lucide.createIcons();
}

function openProductDetail(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    selectedProduct = product;
    const container = document.getElementById('product-detail-container');
    
    // Mock reviews
    const reviews = [
        { name: "Alex Rivera", rating: 5, text: "Absolutely essential for our factory floor. The build quality is unmatched.", date: "2 weeks ago" },
        { name: "Sarah Chen", rating: 4, text: "Great performance, though the initial setup took a bit longer than expected.", date: "1 month ago" },
        { name: "Marcus Thorne", rating: 5, text: "Aura products never disappoint. This controller is a beast.", date: "3 days ago" }
    ];

    container.innerHTML = `
        <div class="mb-12">
            <button onclick="window.location.hash = '#products'" class="flex items-center gap-2 text-brand-dark/50 hover:text-brand-brown transition-colors font-bold uppercase tracking-widest text-xs">
                <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Products
            </button>
        </div>
        <div class="grid lg:grid-cols-2 gap-20 mb-24">
            <!-- Product Images -->
            <div class="space-y-6 fade-in">
                <div class="aspect-square rounded-[3rem] overflow-hidden bg-brand-light shadow-2xl">
                    <img id="main-product-image" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="aspect-square rounded-3xl overflow-hidden bg-brand-light cursor-pointer hover:ring-2 ring-brand-brown transition-all" onclick="changeProductImage('${product.image}')">
                        <img src="${product.image}" class="w-full h-full object-cover" />
                    </div>
                    <div class="aspect-square rounded-3xl overflow-hidden bg-brand-light cursor-pointer hover:ring-2 ring-brand-brown transition-all" onclick="changeProductImage('https://picsum.photos/seed/${product.id}a/800/800')">
                        <img src="https://picsum.photos/seed/${product.id}a/400/400" class="w-full h-full object-cover" />
                    </div>
                    <div class="aspect-square rounded-3xl overflow-hidden bg-brand-light cursor-pointer hover:ring-2 ring-brand-brown transition-all" onclick="changeProductImage('https://picsum.photos/seed/${product.id}b/800/800')">
                        <img src="https://picsum.photos/seed/${product.id}b/400/400" class="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <!-- Product Info -->
            <div class="fade-in">
                <div class="flex items-center gap-4 mb-6">
                    <div class="text-brand-brown font-bold uppercase tracking-widest text-sm">${product.category}</div>
                    <div class="w-1 h-1 bg-brand-brown/30 rounded-full"></div>
                    <div class="flex items-center gap-1 text-yellow-500">
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <span class="text-brand-dark/50 text-xs ml-2">(48 reviews)</span>
                    </div>
                </div>
                
                <h1 class="text-5xl font-bold mb-6 tracking-tight">${product.name}</h1>
                <div class="text-4xl font-bold text-brand-brown mb-8">${product.price}</div>
                
                <p class="text-xl text-brand-dark/60 mb-10 leading-relaxed">
                    The ${product.name} represents the pinnacle of industrial engineering. Designed for high-stress environments, it provides unmatched precision and reliability for your automation needs.
                </p>

                <div class="grid sm:grid-cols-2 gap-6 mb-12">
                    <div class="flex items-center gap-4 p-4 bg-brand-light rounded-2xl">
                        <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-brown">
                            <i data-lucide="truck" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="font-bold text-sm">Free Shipping</div>
                            <div class="text-xs text-brand-dark/50">Worldwide delivery</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-brand-light rounded-2xl">
                        <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-brown">
                            <i data-lucide="shield-check" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <div class="font-bold text-sm">5 Year Warranty</div>
                            <div class="text-xs text-brand-dark/50">Full coverage</div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="addToCart(${product.id})" class="flex-1 bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3">
                        <i data-lucide="shopping-cart" class="w-6 h-6"></i> Add to Cart
                    </button>
                    <button onclick="simulateCheckout()" class="flex-1 bg-brand-brown text-brand-dark py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all active:scale-95">
                        Buy Now
                    </button>
                </div>

                <!-- Payment Methods -->
                <div class="mt-12 pt-12 border-t border-brand-brown/10">
                    <div class="text-xs font-bold uppercase tracking-widest text-brand-dark/30 mb-6 text-center">Secure Payment Methods</div>
                    <div class="flex justify-center gap-8 opacity-30 grayscale">
                        <i data-lucide="credit-card" class="w-8 h-8"></i>
                        <i data-lucide="wallet" class="w-8 h-8"></i>
                        <i data-lucide="shield" class="w-8 h-8"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detailed Tabs -->
        <div class="mb-24 fade-in">
            <div class="flex border-b border-brand-brown/10 mb-12 overflow-x-auto">
                <button onclick="switchProductTab('description', this)" class="product-tab-btn px-8 py-4 font-bold border-b-2 border-brand-brown text-brand-brown whitespace-nowrap">Description</button>
                <button onclick="switchProductTab('specs', this)" class="product-tab-btn px-8 py-4 font-bold text-brand-dark/40 hover:text-brand-dark transition-colors whitespace-nowrap">Specifications</button>
                <button onclick="switchProductTab('shipping', this)" class="product-tab-btn px-8 py-4 font-bold text-brand-dark/40 hover:text-brand-dark transition-colors whitespace-nowrap">Shipping Policy</button>
                <button onclick="switchProductTab('reviews', this)" class="product-tab-btn px-8 py-4 font-bold text-brand-dark/40 hover:text-brand-dark transition-colors whitespace-nowrap">Reviews (48)</button>
            </div>

            <div class="grid lg:grid-cols-3 gap-16">
                <div class="lg:col-span-2 space-y-12">
                    <div id="tab-content-description" class="product-tab-content space-y-12">
                        <section>
                            <h3 class="text-2xl font-bold mb-6">Product Overview</h3>
                            <p class="text-brand-dark/60 leading-relaxed mb-6">
                                Our ${product.name} is built to withstand the most rigorous industrial applications. Whether you're managing a high-speed production line or a secure facility, this component provides the stability and performance you need.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-start gap-3">
                                    <i data-lucide="check" class="text-brand-brown w-5 h-5 mt-1"></i>
                                    <span class="text-brand-dark/70">Advanced thermal management for 24/7 operation.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i data-lucide="check" class="text-brand-brown w-5 h-5 mt-1"></i>
                                    <span class="text-brand-dark/70">Seamless integration with existing Aura ecosystems.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <i data-lucide="check" class="text-brand-brown w-5 h-5 mt-1"></i>
                                    <span class="text-brand-dark/70">Military-grade encryption for all data transmissions.</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div id="tab-content-specs" class="product-tab-content hidden">
                        <section>
                            <h3 class="text-2xl font-bold mb-6">Technical Specifications</h3>
                            <div class="overflow-hidden rounded-3xl border border-brand-brown/10">
                                <table class="w-full text-left text-sm">
                                    <tr class="border-b border-brand-brown/10">
                                        <th class="p-4 bg-brand-light font-bold w-1/3">Model</th>
                                        <td class="p-4">${product.name} v2.4</td>
                                    </tr>
                                    <tr class="border-b border-brand-brown/10">
                                        <th class="p-4 bg-brand-light font-bold">Input Voltage</th>
                                        <td class="p-4">110V - 240V AC</td>
                                    </tr>
                                    <tr class="border-b border-brand-brown/10">
                                        <th class="p-4 bg-brand-light font-bold">Connectivity</th>
                                        <td class="p-4">WiFi 6, Bluetooth 5.2, Ethernet</td>
                                    </tr>
                                    <tr>
                                        <th class="p-4 bg-brand-light font-bold">Operating Temp</th>
                                        <td class="p-4">-20°C to 65°C</td>
                                    </tr>
                                </table>
                            </div>
                        </section>
                    </div>

                    <div id="tab-content-shipping" class="product-tab-content hidden">
                        <section>
                            <h3 class="text-2xl font-bold mb-6">Shipping & Returns</h3>
                            <div class="bg-brand-light p-8 rounded-3xl">
                                <div class="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 class="font-bold mb-2">Shipping Policy</h4>
                                        <p class="text-sm text-brand-dark/60">We offer free express shipping on all orders over $500. Standard shipping takes 3-5 business days, while express takes 1-2 business days.</p>
                                    </div>
                                    <div>
                                        <h4 class="font-bold mb-2">Return Policy</h4>
                                        <p class="text-sm text-brand-dark/60">Items can be returned within 30 days of delivery. Must be in original packaging and unused condition.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <!-- Reviews Sidebar / Content -->
                <div id="tab-content-reviews" class="product-tab-content hidden space-y-8">
                    <h3 class="text-2xl font-bold mb-6">Customer Reviews</h3>
                    ${reviews.map(review => `
                        <div class="p-6 bg-white rounded-3xl border border-brand-brown/10 shadow-sm">
                            <div class="flex items-center justify-between mb-4">
                                <div class="font-bold">${review.name}</div>
                                <div class="text-xs text-brand-dark/30">${review.date}</div>
                            </div>
                            <div class="flex gap-1 text-yellow-500 mb-4">
                                ${Array.from({ length: review.rating }).map(() => '<i data-lucide="star" class="w-3 h-3 fill-current"></i>').join('')}
                            </div>
                            <p class="text-sm text-brand-dark/70 leading-relaxed">"${review.text}"</p>
                        </div>
                    `).join('')}
                    <button class="w-full py-4 border border-brand-brown/20 rounded-2xl font-bold hover:bg-brand-light transition-colors">
                        View All Reviews
                    </button>
                </div>
            </div>
        </div>
    `;
    
    window.location.hash = '#product-detail';
    lucide.createIcons();
    checkFadeIn();
}

function changeProductImage(src) {
    const mainImg = document.getElementById('main-product-image');
    if (mainImg) {
        mainImg.src = src;
    }
}

function switchProductTab(tabId, btn) {
    // Hide all contents
    document.querySelectorAll('.product-tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    // Show selected content
    document.getElementById(`tab-content-${tabId}`).classList.remove('hidden');
    
    // Update button styles
    document.querySelectorAll('.product-tab-btn').forEach(b => {
        b.classList.remove('border-b-2', 'border-brand-brown', 'text-brand-brown');
        b.classList.add('text-brand-dark/40');
    });
    btn.classList.add('border-b-2', 'border-brand-brown', 'text-brand-brown');
    btn.classList.remove('text-brand-dark/40');
}

function simulateCheckout() {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-brand-dark/90 z-[200] flex items-center justify-center p-6 backdrop-blur-md';
    overlay.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-[3rem] p-12 text-center fade-in visible">
            <div class="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center text-brand-brown mx-auto mb-8">
                <i data-lucide="credit-card" class="w-10 h-10"></i>
            </div>
            <h2 class="text-3xl font-bold mb-4">Secure Checkout</h2>
            <p class="text-brand-dark/60 mb-10">You are being redirected to our secure payment gateway powered by Stripe.</p>
            <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 border border-brand-brown/10 rounded-2xl text-left">
                    <i data-lucide="lock" class="text-green-500 w-5 h-5"></i>
                    <span class="text-sm font-medium">SSL Encrypted Connection</span>
                </div>
                <button onclick="this.parentElement.parentElement.parentElement.remove(); showNotification('Order placed successfully!')" class="w-full bg-brand-dark text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all">
                    Proceed to Payment
                </button>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" class="w-full py-4 text-brand-dark/40 font-bold hover:text-brand-dark transition-colors">
                    Cancel
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    lucide.createIcons();
}

function closeProductModal() {
    // This is now handled by routing, but keeping for compatibility if needed
    window.location.hash = '#products';
}

function toggleCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const isOpen = !cartDrawer.classList.contains('translate-x-full');
    
    if (isOpen) {
        cartDrawer.classList.add('translate-x-full');
    } else {
        cartDrawer.classList.remove('translate-x-full');
        updateCartUI();
    }
}

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 right-8 bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl z-[100] flex items-center gap-3 animate-bounce';
    toast.innerHTML = `
        <i data-lucide="check-circle" class="text-brand-brown w-5 h-5"></i>
        <span class="font-medium">${message}</span>
    `;
    document.body.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function initProductsPage() {
    const cats = ["All", "Controllers", "Sensors", "Automation", "Networking", "Security"];
    productCategories.innerHTML = cats.map(cat => `
        <button class="cat-btn px-6 py-2 rounded-full border border-brand-brown/20 text-sm font-medium hover:bg-brand-brown hover:text-white transition-colors whitespace-nowrap ${productFilter === cat ? 'bg-brand-brown text-white' : ''}" data-cat="${cat}">
            ${cat}
        </button>
    `).join('');

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            productFilter = btn.getAttribute('data-cat');
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('bg-brand-brown', 'text-white'));
            btn.classList.add('bg-brand-brown', 'text-white');
            renderProducts();
        });
    });

    productSearchInput.addEventListener('input', (e) => {
        productSearch = e.target.value;
        renderProducts();
    });

    renderProducts();
}

// Projects Page Logic
function initProjectsPage() {
    projectsListGrid.innerHTML = PROJECTS.map((project, idx) => `
        <div class="group cursor-pointer fade-in">
            <div class="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div class="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/60 transition-colors flex items-center justify-center">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        <i data-lucide="external-link" class="text-brand-dark w-5 h-5"></i>
                    </div>
                </div>
            </div>
            <div class="text-brand-brown font-bold uppercase tracking-widest text-xs mb-2">${project.category}</div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-brand-brown transition-colors">${project.title}</h3>
            <p class="text-brand-dark/60 leading-relaxed">
                ${project.description}
            </p>
        </div>
    `).join('');
    lucide.createIcons();
}

// About Page Logic
function initAboutPage() {
    milestonesList.innerHTML = MILESTONES.map((m, idx) => `
        <div class="flex flex-col md:flex-row gap-8 items-start md:items-center p-8 rounded-3xl border border-brand-brown/10 hover:bg-brand-light transition-colors fade-in">
            <div class="text-4xl font-bold text-brand-brown shrink-0 md:w-32">${m.year}</div>
            <div class="h-px bg-brand-brown/20 flex-1 hidden md:block"></div>
            <div class="md:w-2/3">
                <h4 class="text-xl font-bold mb-2">${m.title}</h4>
                <p class="text-brand-dark/60">${m.desc}</p>
            </div>
        </div>
    `).join('');

    valuesGrid.innerHTML = VALUES.map(value => `
        <div class="bg-white p-8 rounded-3xl border border-brand-brown/10 text-center fade-in">
            <div class="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-brown mx-auto mb-6">
                <i data-lucide="${value.icon}" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">${value.title}</h3>
            <p class="text-brand-dark/60 leading-relaxed">
                ${value.desc}
            </p>
        </div>
    `).join('');
    lucide.createIcons();
}

// Contact Page Logic
function initContactPage() {
    contactInfoGrid.innerHTML = CONTACT_INFO.map(card => `
        <div class="bg-brand-light p-10 rounded-3xl border border-brand-brown/10 text-center fade-in">
            <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-brown mx-auto mb-6 shadow-sm">
                <i data-lucide="${card.icon}" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">${card.title}</h3>
            <p class="text-brand-dark/40 text-sm mb-4 uppercase tracking-widest font-bold">${card.desc}</p>
            <p class="text-lg font-medium text-brand-dark">${card.val}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

// Newsletter Form
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
});

// Initialization
window.addEventListener('DOMContentLoaded', () => {
    // Determine visible cards for carousel
    const updateVisibleCards = () => {
        if (window.innerWidth >= 1024) visibleCards = 3;
        else if (window.innerWidth >= 768) visibleCards = 2;
        else visibleCards = 1;
        initCarousel();
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);

    // Initialize all components
    initFAQ();
    initGallery();
    initServicesPage();
    initProductsPage();
    initProjectsPage();
    initAboutPage();
    initContactPage();
    updateCartUI();

    // Global functions for buttons
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.toggleCart = toggleCart;
    window.openProductDetail = openProductDetail;
    window.closeProductModal = closeProductModal;
    window.simulateCheckout = simulateCheckout;
    window.switchProductTab = switchProductTab;
    window.changeProductImage = changeProductImage;

    // Handle initial routing
    handleRouting();
    window.addEventListener('hashchange', handleRouting);

    // Ensure all hash links trigger routing correctly
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === window.location.hash) {
                // If already on the same hash, manually trigger routing to ensure section is visible
                handleRouting();
            }
        });
    });

    // Initial check for animations
    setTimeout(checkFadeIn, 100);

    // Initialize Lucide Icons
    lucide.createIcons();
});
