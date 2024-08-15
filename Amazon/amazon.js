const resize = () => {
    const navbar = document.querySelector('.navbar');
    const searchInput = document.querySelector('.search-input');
    const navSearch = document.querySelector('.nav-search');
    const pannelOptions = document.querySelector('.pannnel-options');
    const footPannel2 = document.querySelector('.foot-pannel2');
  
    // Adjust navbar height based on screen size
    if (window.innerWidth < 768) {
      navbar.style.height = 'auto';
    } else {
      navbar.style.height = '60px';
    }
  
    // Adjust search input width based on screen size
    if (window.innerWidth < 768) {
      searchInput.style.width = '70%';
    } else {
      searchInput.style.width = '100%';
    }
  
    // Adjust navSearch width based on screen size
    if (window.innerWidth < 768) {
      navSearch.style.width = '100%';
    } else {
      navSearch.style.width = '666px';
    }
  
    // Adjust pannelOptions layout based on screen size
    if (window.innerWidth < 768) {
      pannelOptions.style.display = 'flex';
      pannelOptions.style.flexDirection = 'column';
    } else {
      pannelOptions.style.display = 'inline';
      pannelOptions.style.flexDirection = 'row';
    }
  
    // Adjust footPannel2 layout based on screen size
    if (window.innerWidth < 768) {
      footPannel2.style.flexDirection = 'column';
    } else {
      footPannel2.style.flexDirection = 'row';
    }
  };
  
  window.addEventListener('resize', resize);
  resize();