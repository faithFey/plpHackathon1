function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu after click
      document.getElementById('nav-list').classList.remove('active');
    });
  });
  
  // Form validation
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // You can integrate a real email service here
    alert("Message sent successfully!");
    this.reset();
  });
  