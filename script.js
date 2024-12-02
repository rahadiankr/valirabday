

// Inisialisasi variabel dan konstanta
var teksSekarang = 1;
const body = document.querySelector("body");
audio = new Audio('' + linkmp3.src); // Membuat objek audio
audio.loop = true;

// Inisialisasi Swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
    },
    on: {
        // Event listener untuk perubahan slide
        slideChange: function () {
            var currentIndex = swiper.activeIndex;

            // Menambahkan efek animasi ketika slide berubah
            teksSekarang++;
            teksScale = document.querySelector('#teks' + teksSekarang);
            stikerScale = document.querySelector('#stiker' + teksSekarang);
            setTimeout(function () {
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");

                // Memanggil fungsi untuk animasi khusus pada slide tertentu
                if (teksSekarang == 3) { katanimasi() }
            }, 50);
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Mendapatkan teks dari elemen HTML dan mengosongkan konten teks tersebut
var teks = teks3.innerHTML;
teks3.innerHTML = "";

// Fungsi untuk animasi khusus pada slide tertentu
function katanimasi() {
    new TypeIt("#teks3", {
        strings: ["" + teks],
        startDelay: 250,
        speed: 50,
        cursor: true,
        afterComplete: function () {
            clearInterval(scrollInterval);
            teks3.innerHTML = teks;
            setInterval(berjatuhan, 200); // Memulai animasi jatuh hati
        },
    }).go();
}

// Event listener saat halaman dimuat
window.addEventListener("load", (event) => {
    window.scrollTo(0, 0);
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none"; // Menyembunyikan overlay loading
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex"; // Menampilkan tombol love
});

var sudahKlik = true; // Variabel untuk menentukan apakah tombol sudah diklik
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sini Pencet Sini 👆 </br> <span style="font-size:15px">(pakai hp aja biar bagus)</span > </p>';

// Event listener saat tombol love diklik
document.getElementById("loveIn").onclick = function () {
    if (sudahKlik) {
        audio.play(); // Memainkan audio
        document.querySelector(".overlay").style.display = "none"; // Menyembunyikan overlay
        stiker1.classList.add("scale1");
        teks1.classList.add("scale1"); // Menambahkan efek animasi pada stiker dan teks pertama
    } else {
        sudahKlik = true; // Tandai bahwa tombol sudah diklik
        document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sini Pencet Sini 👆 </br> <span style="font-size:15px">(pakai hp aja biar bagus)</span ></p>';
    }
}

// Fungsi untuk membuat animasi jatuh hati
function berjatuhan() {
    const heart = document.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw"; // Menentukan posisi horizontal
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"; // Menentukan durasi animasi
    document.body.appendChild(heart); // Menambahkan hati ke dalam body
}

// Menghapus hati yang sudah jatuh jika jumlahnya lebih dari 100
setInterval(function () {
    var heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

// Fungsi untuk mengatur scroll otomatis pada halaman
const scrollContainer = document.getElementById("scroll-container");
const textContainer = document.getElementById("textsec2");

function autoScroll() {
    scrollContainer.scrollTop += 10; // Menggeser posisi scroll
}

const scrollInterval = setInterval(autoScroll, 50); // Menjalankan scroll otomatis setiap 50ms
