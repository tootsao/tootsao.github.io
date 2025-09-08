// Otevření modalu
  function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }

  // Zavření modalu
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  // Funkce pro výběr vstupenky
  function selectTicket(type) {
    alert('Vybral jsi: ' + type + ' (demo)');
    closeModal();
  }

  // Zavření modalu kliknutím mimo obsah
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
      closeModal();
    }
  });