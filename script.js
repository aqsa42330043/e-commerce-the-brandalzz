// Fungsi untuk menambahkan produk ke keranjang
function addToCart() {
    alert("Produk berhasil ditambahkan ke keranjang!");
}

// Validasi formulir (misalnya, form kontak)
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Nama dan Email harus diisi!");
        return false;
    }

    // Cek email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    alert("Formulir berhasil dikirim!");
    return true;
}

let Totalprice = 0;

function addToCart(price) {
    Totalprice += price;
    document.getElementById('total price').innerText = Totalprice.toLocaleString();
    alert("produk telah di tambhkan kedalam keranjang! total: Rp" + Totalprice.toLocaleString());
}
 // Fungsi untuk menampilkan pesan sukses setelah form disubmit
 function tampilkanPesanSukses(event) {
    event.preventDefault(); // Mencegah form dari pengiriman sesungguhnya, untuk demo
 }