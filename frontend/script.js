document.getElementById('registrationForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageEl = document.getElementById('message');
  const button = this.querySelector('button[type="submit"]');

  // Basic frontend validation
  if (!name || !email) {
    messageEl.textContent = 'Please fill all fields.';
    messageEl.className = 'msg error';
    return;
  }

  // Disable button while submitting
  const originalBtnText = button.textContent;
  button.disabled = true;
  button.textContent = 'Registering...';
  messageEl.textContent = '';
  messageEl.className = 'msg';

  try {
    // Use relative path to avoid CORS issues
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    // Parse JSON even on non-200 to get server message
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      messageEl.textContent = data.message || 'Registration failed.';
      messageEl.className = 'msg error';
    } else {
      messageEl.textContent = data.message || 'Registration successful!';
      messageEl.className = 'msg success';
      document.getElementById('registrationForm').reset();
    }
  } catch (err) {
    console.error(err);
    messageEl.textContent = 'Network error. Is the server running on http://localhost:3000?';
    messageEl.className = 'msg error';
  } finally {
    button.disabled = false;
    button.textContent = originalBtnText;
  }
});
