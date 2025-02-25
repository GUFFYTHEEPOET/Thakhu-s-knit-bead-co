// Product data - Define this at the top level scope
const products = [
    {
      id: 1,
      name: "Keychains",
      price: 25.00
    },
    {
      id: 2,
      name: "Necklace",
      price: 35.00
    },
    {
      id: 3,
      name: "Bracelet",
      price: 20.00
    },
    {
      id: 4,
      name: "Combo(Bracelet and Necklace)",
      price: 50.00
    },
    {
      id: 5,
      name: "His & Hers",
      price: 40.00
    },
    {
      id: 6,
      name: "2 in 1",
      price: 40.00
    },
    {
      id: 7,
      name: "Modern Makunda",
      price: 25.00
    }
  ];
  
  // WhatsApp order handling - Define this at the top level scope
  function handleWhatsAppOrder(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
  
    const message = `Hi, I'm interested in ordering the ${product.name} (R${product.price})`;
    const whatsappUrl = `https://wa.me/+27793267910?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  
  // Mobile menu functionality
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
  
    let isMenuOpen = false;
  
    mobileMenuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle('active');
      
      // Update menu icon
      if (isMenuOpen) {
        menuIcon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      } else {
        menuIcon.innerHTML = `
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        `;
      }
    });
  
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        isMenuOpen = false;
        menuIcon.innerHTML = `
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        `;
      });
    });
  
    // Test WhatsApp functionality
    console.log('WhatsApp ordering system initialized');
  });