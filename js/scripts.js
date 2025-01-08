document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email and password
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return;
    }

    // If validation passes, redirect to projects page
    window.location.href = "projects.html";
});


//project page 

const cardsData = {
    song1: {
      imgSrc: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      title: "Summertime Sadness",
      description: "Lana Del Rey, an iconic American singer-songwriter..."
    },
    song2: {
      imgSrc: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      title: "Mitran Di Chhatri",
      description: "Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer..."
    },
    song3: {
        imgSrc: "assets/icon.jpg",
        title: "Summertime Sadness",
        description: "Lana Del Rey, an iconic American singer-songwriter..."
      },
      song4: {
        imgSrc: "assets/roronoa-zoro-wanted-5120x2880-10911.jpg",
        title: "Summertime Sadness",
        description: "Lana Del Rey, an iconic American singer-songwriter..."
      },

      song5: {
        imgSrc: "assets/roronoa-zoro-wanted-5120x2880-10911.jpg",
        title: "Summertime Sadness",
        description: "Lana Del Rey, an iconic American singer-songwriter..."
      },
    // Add more card data here
  };
  
  function showPopup(cardId) {
    const card = cardsData[cardId];
    if (card) {
        document.getElementById('popup-image').src = card.imgSrc;
        document.getElementById('popup-title').textContent = card.title;
        document.getElementById('popup-description').textContent = card.description;

        const donateButton = document.createElement('button');
        donateButton.textContent = "Donate";
        donateButton.classList.add('donate-button');

        const popupDescription = document.getElementById('popup-description');
        popupDescription.appendChild(donateButton);

        donateButton.addEventListener('click', (event) => {
            event.stopPropagation();
            // Store card details in localStorage
            localStorage.setItem('selectedCard', JSON.stringify({
                title: card.title,
                description: card.description
            }));
            // Redirect to payment page
            window.open("payment.html", "_blank");
        });

        const popupOverlay = document.getElementById('popup');
        popupOverlay.style.display = 'flex';
        popupOverlay.classList.remove('fade-out');
        popupOverlay.classList.add('fade-in');

        popupOverlay.addEventListener('click', closePopup);
    }
}



function closePopup() {
    const popupOverlay = document.getElementById('popup');
    popupOverlay.classList.remove('fade-in');
    popupOverlay.classList.add('fade-out');

    // Delay hiding the popup until after the fade-out animation completes
    popupOverlay.addEventListener('animationend', () => {
        if (popupOverlay.classList.contains('fade-out')) {
            popupOverlay.style.display = 'none';
            popupOverlay.classList.remove('fade-out');
        }
    }, { once: true });
}


  
 
  





 
