let cart = [];
let totalPrice = 0;

// Fungsi untuk menambahkan barang ke keranjang
function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    renderCart();
}

// Fungsi untuk menampilkan keranjang dan tombol hapus
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    cartItems.innerHTML = ''; // Mengosongkan isi keranjang sebelum memperbarui
    cart.forEach((cartItem, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${cartItem.item}</span>
            <span>Rp ${cartItem.price}</span>
            <button onclick="removeFromCart(${index})">Hapus</button>
        `;
        cartItems.appendChild(div);
    });

    totalPriceEl.textContent = totalPrice;
}

// Fungsi untuk menghapus barang dari keranjang
function removeFromCart(index) {
    totalPrice -= cart[index].price; // Mengurangi harga dari total
    cart.splice(index, 1);          // Menghapus item dari array cart
    renderCart();                   // Memperbarui tampilan keranjang
}

// Fungsi untuk checkout dan mengosongkan keranjang
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang kosong. Silakan tambahkan barang terlebih dahulu.');
        return;
    }
    alert('Terima kasih sudah berbelanja di SANDYAKALA!');
    cart = [];                      // Mengosongkan keranjang
    totalPrice = 0;                 // Reset total harga
    renderCart();                   // Memperbarui tampilan keranjang
}
