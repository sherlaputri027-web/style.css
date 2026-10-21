// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
    // 3. Jalankan kode ini ketika tombol di-klik
    alert('Halo! Terima kasih sudah berkunjung!');
});
body {
    background-color: #FFFFE0; /* Warna kuning cerah */
    font-family: Arial, sans-serif; /* Jenis huruf yang bersih dan mudah dibaca */
    color: #191970; /* Warna teks utama (Biru Gelap) */
}

.kartu-profil {
    width: 300px;
    margin: 50px auto; /* 50px jarak atas/bawah, auto menengahkan kiri/kanan */
    padding: 20px;
    background-color: white;
    border-radius: 15px; /* Membuat sudut menjadi melengkung */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Efek bayangan */
    text-align: center;
}

/* Tambahan buat tombol sapa biar nyambung sama JS kamu */
#sapaButton {
    padding: 10px 20px;
    background-color: #191970;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

#sapaButton:hover {
    background-color: #2a2aa0;
}
