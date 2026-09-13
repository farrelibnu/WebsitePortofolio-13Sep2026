sayWelcomeMessage()

function sayWelcomeMessage() {
    let userResponse = prompt("Halo, Siapa nama anda?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }
    document.getElementById("welcome-speech").innerText = `Hi ${userResponse || "Guest"}, Welcome To My Website`;
}


document.getElementById("form-list").addEventListener("submit", function (event) {
    event.preventDefault(); // cegah reload halaman

    // Ambil data dari form
    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal-lahir").value;
    const pesan = document.getElementById("pesan").value;
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked').value;

    // Ambil waktu saat ini
    const now = new Date();
    const waktu = now.toLocaleString("id-ID", {
        dateStyle: "full",
        timeStyle: "medium"
    });

    // Masukkan ke output box
    document.getElementById("outTime").textContent = waktu;
    document.getElementById("outNama").textContent = nama;
    document.getElementById("outTanggal").textContent = tanggal;
    document.getElementById("outGender").textContent = gender;
    document.getElementById("outPesan").textContent = pesan;
});
