// script.js

document.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const bodyElement = document.body;
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const setTheme = (theme) => {
    bodyElement.setAttribute('data-bs-theme', theme);
    if (darkModeSwitch) {
      darkModeSwitch.checked = theme === 'dark';
    }
    localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } 
  else if (prefersDarkScheme.matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  if (darkModeSwitch) {
    darkModeSwitch.addEventListener('change', () => {
      if (darkModeSwitch.checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
  }

  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme_user_interacted')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  if (darkModeSwitch) {
    darkModeSwitch.addEventListener('change', () => {
      localStorage.setItem('theme_user_interacted', 'true');
    });
  }
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      formStatus.innerHTML = '<div class="d-flex flex-row"><div class="spinner-border me-3" role="status"></div> <p>Sending...</p></div>';

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formStatus.innerHTML = '<p class="success">Thanks for your message! I will get back to you soon.</p>';
          contactForm.reset();
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            formStatus.innerHTML = `<p class="error">${data["errors"].map(error => error["message"]).join(", ")}</p>`;
          } else {
            formStatus.innerHTML = '<p class="error">Oops! There was a problem submitting your form. Please try again later.</p>';
          }
        }
      } catch (error) {
        formStatus.innerHTML = '<p class="error">Oops! There was a problem submitting your form. Please check your network connection.</p>';
        console.error('Form submission error:', error);
      }
    });
  }
      const openModalFromHash = () => {
        const hash = window.location.hash;
        if (hash) {
            const modalElement = document.querySelector(hash);
            if (modalElement && modalElement.classList.contains('modal')) {
                setTimeout(() => {
                    const modalInstance = new bootstrap.Modal(modalElement);
                    modalInstance.show();
                }, 100);
            }
        }
    };
    openModalFromHash();
});