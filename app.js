let metodePembayaran = "";

function bukaForm(item, harga) {
    localStorage.setItem("item", item);
    localStorage.setItem("harga", harga);
    
    document.getElementById("toko").style.display = "none";
    document.getElementById("formulirPembelian").style.display = "block";
    
    document.getElementById("item-info").innerText = `Item: ${item} - Harga Satuan: Rp. ${parseInt(harga).toLocaleString()}`;
    hitungTotal();
}

function hitungTotal() {
    let jumlah = document.getElementById("jumlah").value;
    let harga = localStorage.getItem("harga");
    let totalHarga = jumlah * harga;
    document.getElementById("total-harga").innerText = "Rp. " + totalHarga.toLocaleString();
}

function pilihPembayaran(metode) {
    metodePembayaran = metode;
    let metodeImages = document.querySelectorAll(".payment-options img");
    
    metodeImages.forEach(img => img.classList.remove("selected"));
    
    document.getElementById(metode.toLowerCase()).classList.add("selected");
}

function konfirmasiPembelian() {
    let item = localStorage.getItem("item");
    let jumlah = document.getElementById("jumlah").value;
    let harga = localStorage.getItem("harga");
    let totalHarga = jumlah * harga;
    let namaWorld = document.getElementById("nama-world").value;
    let ownerWorld = document.getElementById("owner-world").value;

    if (namaWorld === "" || ownerWorld === "" || metodePembayaran === "") {
        alert("Harap isi semua data!");
        return;
    }

    let pesan = `Total Beli: ${jumlah} ${item}%0A` +
            `•Total Harga: Rp. ${totalHarga.toLocaleString()}%0A` +
            `•Nama World: ${namaWorld}%0A` +
            `•Owner World: ${ownerWorld}%0A` +
                `•Metode Pembayaran: ${metodePembayaran}%0A%0A` +
                `*⌚JAM ONLINE SENIN-JUMAT 17:00-23.00 WIB*%0A` +
                  `*⌚JAM ONLINE SABTU-MINGGU 07:00-00:00 WIB*%0A%0A` +
                    `*🗣️ADMIN HANYA MELAYANI DIJAM OPRASIONAL👌*` ;

    let linkWA = `https://wa.me/628988977955?text=${pesan}`;

    window.location.href = linkWA;
}

function kembaliKeToko() {
    document.getElementById("formulirPembelian").style.display = "none";
    document.getElementById("toko").style.display = "block";
}