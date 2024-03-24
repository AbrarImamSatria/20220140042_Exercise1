const gambar = document.querySelectorAll('.gambar-container img');

gambar.forEach(img => {
  img.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(0.95)';
    this.nextElementSibling.style.color = '#ff0404'; 
    this.style.boxShadow = '0px 0px 15px rgba(255, 4, 4, 0.5)'; // Efek bayangan saat dihover
  });

  img.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.nextElementSibling.style.color = '#fff'; 
    this.style.boxShadow = 'none'; // Menghapus efek bayangan saat tidak dihover
  });

  img.addEventListener('click', function() {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupImg = document.createElement('img');
    popupImg.src = this.src;
    popupImg.alt = this.alt;

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';

    closeButton.addEventListener('click', function() {
      popup.classList.remove('open');
      popup.addEventListener('transitionend', function() {
        popup.remove();
      });
    });

    const popupText = document.createElement('p');
    popupText.textContent = this.nextElementSibling.textContent;

    popup.appendChild(closeButton);
    popup.appendChild(popupImg);
    popup.appendChild(popupText);

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add('open');
    }, 50);
  });
});

const tombol = document.getElementById('tombol');

tombol.addEventListener('click', function() {
  const formContainer = document.createElement('div');
  formContainer.classList.add('popup');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';

  closeButton.addEventListener('click', function() {
    formContainer.classList.remove('open');
    formContainer.addEventListener('transitionend', function() {
      formContainer.remove();
    });
  });

  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-header">
      <h2>SILAHKAN DI ISI</h2>
    </div>
    <div class="form-group">
      <label for="nama">Nama:</label>
      <input type="text" id="nama" name="nama" required>
    </div>
    <div class="form-group">
      <label for="menu">Menu Pilihan:</label>
      <input type="text" id="menu" name="menu" required>
    </div>
    <div class="form-group">
      <label for="telepon">Nomor Telepon:</label>
      <input type="tel" id="telepon" name="telepon" required>
    </div>
    <div class="form-group">
      <label for="alamat">Alamat:</label>
      <textarea id="alamat" name="alamat" required></textarea>
    </div>
    <button type="submit" id="submit-btn">Daftar</button>
  `;

  formContainer.appendChild(closeButton);
  formContainer.appendChild(form);

  document.body.appendChild(formContainer);

  setTimeout(() => {
    formContainer.classList.add('open');
  }, 50);

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    setTimeout(() => {
      formContainer.innerHTML = ''; 
      const confirmationMessage = document.createElement('p');
      confirmationMessage.textContent = 'Pesanan Anda Telah Diterima';
      formContainer.appendChild(confirmationMessage);
      formContainer.appendChild(closeButton); 
    }, 1000); 
  });
});

const judulHalaman = document.getElementById('menu-takjil');

judulHalaman.addEventListener('click', putarLagu);

function putarLagu() {
  const audio = document.getElementById('myAudio');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
