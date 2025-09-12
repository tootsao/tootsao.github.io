function openModal() {
  document.getElementById('ticketModal').style.display = 'flex';
  document.getElementById('step1').style.display = 'block';
  document.getElementById('step2').style.display = 'none';
}

function closeModal() {
  document.getElementById('ticketModal').style.display = 'none';
}

function selectEvent(name) {
  document.getElementById('eventName').innerText = name;
  document.getElementById('standardCount').value = 0;
  document.getElementById('backstageCount').value = 0;
  document.getElementById('totalPrice').innerText = 0;

  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function updateTotal() {
  const standard = parseInt(document.getElementById('standardCount').value) * 10000;
  const backstage = parseInt(document.getElementById('backstageCount').value) * 30000;

  const total = standard + backstage;
  document.getElementById('totalPrice').innerText = total.toLocaleString();
}
