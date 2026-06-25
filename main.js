// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => observer.observe(el));

// Contact form
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const fname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Build mailto link
  const body = encodeURIComponent(
    "Hi Arturo,\n\nMy name is " + fname + ".\n\nProject Type: " + subject + "\n\n" + message + "\n\nBest,\n" + fname
  );
  const mailtoLink = "mailto:arturoyparraguirre01@gmail.com?subject=Project Inquiry: " + encodeURIComponent(subject) + "&body=" + body;

  window.location.href = mailtoLink;

  // Show success
  form.style.display = 'none';
  success.style.display = 'block';
}

// Resume buttons
function handleResumeDownload(e) {
  const href = e.currentTarget.getAttribute('href');
  if (href === '#') {
    e.preventDefault();
    alert('📄 To activate this button, replace the href="#" in the HTML with your actual resume PDF link (Google Drive, Dropbox, or your own server).');
  }
}
function handleResumeView(e) {
  const href = e.currentTarget.getAttribute('href');
  if (href === '#') {
    e.preventDefault();
    alert('👁 To activate this button, replace the href="#" with a link to your resume (e.g. a Google Drive shareable PDF link).');
  }
}