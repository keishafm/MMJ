// DATA STATIK (Mudah diperbarui atau dihubungkan ke database/JSON eksternal)

const archiveData = [
    {
        id: 1,
        title: "Liputan Khusus HUT SMKN 1 Singosari",
        category: "Event",
        date: "12 Oktober 2025",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        description: "Dokumentasi kemeriahan perayaan HUT sekolah dengan berbagai penampilan seni dan karya siswa."
    },
    {
        id: 2,
        title: "Upacara Bendera Hari Pahlawan",
        category: "Upacara",
        date: "10 November 2025",
        image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
        description: "Petugas upacara dan seluruh warga sekolah khidmat mengikuti rangkaian peringatan Hari Pahlawan."
    },
    {
        id: 3,
        title: "Juara 1 Lomba Video Pendek Tingkat Kabupaten",
        category: "Lomba",
        date: "05 Desember 2025",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        description: "Tim Multimedia Jurnalistik berhasil memboyong piala dalam ajang kompetisi kreatif pelajar."
    },
    {
        id: 4,
        title: "Workshop Jurnalistik & Videografi Dasar",
        category: "Event",
        date: "15 Januari 2026",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        description: "Pelatihan internal untuk meningkatkan skill dasar reportase dan teknik pengambilan gambar anggota baru."
    }
];

const newsData = [
    {
        id: 1,
        title: "Eksistensi Ekstrakurikuler Multimedia Jurnalistik dalam Merekam Jejak Prestasi Sekolah",
        category: "Liputan Utama",
        date: "20 Januari 2026",
        author: "Tim Redaksi MMJ",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        summary: "Bagaimana MMJ mengambil peran penting dalam mendokumentasikan setiap sejarah dan pencapaian siswa di SMKN 1 Singosari.",
        content: "Multimedia Jurnalistik (MMJ) SMK Negeri 1 Singosari terus berkomitmen menjadi wadah informasi yang cepat, akurat, dan inspiratif. Melalui berbagai platform digital, anggota MMJ tidak hanya belajar tentang teknik fotografi dan penulisan berita, tetapi juga membangun teamwork yang solid dalam meliput setiap kegiatan besar sekolah. Dengan semangat 'CAPTURE THE MOMENT, PRESERVE THE STORY', setiap jurnalis muda dilatih untuk memiliki kepekaan jurnalistik tinggi di era informasi digital saat ini."
    },
    {
        id: 2,
        title: "Tips & Trik Mengambil Sudut Pandang Foto Event Sekolah yang Estetik",
        category: "Edukasi",
        date: "18 Januari 2026",
        author: "Divisi Kreatif MMJ",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        summary: "Panduan praktis bagi fotografer pemula untuk menghasilkan potret kegiatan sekolah yang bercerita dan bernyawa.",
        content: "Dalam dunia jurnalistik visual, sebuah foto tidak sekadar memperlihatkan objek, melainkan menceritakan emosi dan suasana saat itu. Beberapa teknik penting meliputi penggunaan rule of thirds, pemilihan angle rendah untuk memberikan kesan megah, serta candid shot untuk menangkap momen natural tanpa rekayasa."
    }
];

const designData = [
    {
        id: 1,
        title: "Poster Sosialisasi Anti Bullying",
        category: "Poster",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Feeds IG: Jadwal Pekan Olahraga",
        category: "Feeds",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Banner Utama Pentas Seni Sekolah",
        category: "Banner",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Desain Infografis Literasi Digital",
        category: "Poster",
        image: "https://images.unsplash.com/photo-1542744094-3a31246263d0?auto=format&fit=crop&w=800&q=80"
    }
];

// NAVIGASI & ROUTING HALAMAN
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tutup mobile menu jika terbuka
    document.getElementById('navMenu').classList.remove('active');
}

// TOGGLE HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// RENDER MEMORY ARCHIVE
function renderArchive(data) {
    const grid = document.getElementById('archiveGrid');
    grid.innerHTML = '';
    
    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Dokumentasi tidak ditemukan.</p>`;
        return;
    }

    data.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.title}" class="card-img" onclick="openLightbox('${item.image}', '${item.title}')">
                <div class="card-body">
                    <div class="card-meta">
                        <span class="badge">${item.category}</span>
                        <span>${item.date}</span>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;
    });
}

function filterCategory(category, btn) {
    document.querySelectorAll('#archive .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (category === 'all') {
        renderArchive(archiveData);
    } else {
        const filtered = archiveData.filter(item => item.category === category);
        renderArchive(filtered);
    }
}

function filterArchive() {
    const keyword = document.getElementById('archiveSearch').value.toLowerCase();
    const filtered = archiveData.filter(item => 
        item.title.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword)
    );
    renderArchive(filtered);
}

// RENDER NEWSROOM
function renderNews() {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = '';

    newsData.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.title}" class="card-img" onclick="openNewsDetail(${item.id})">
                <div class="card-body">
                    <div class="card-meta">
                        <span class="badge">${item.category}</span>
                        <span>${item.date}</span>
                    </div>
                    <h3 class="card-title" style="cursor: pointer;" onclick="openNewsDetail(${item.id})">${item.title}</h3>
                    <p class="card-text">${item.summary}</p>
                    <div style="margin-top: auto; font-size: 0.85krem; color: var(--text-muted);">Oleh: ${item.author}</div>
                </div>
            </div>
        `;
    });
}

function openNewsDetail(id) {
    const item = newsData.find(n => n.id === id);
    if (!item) return;

    const container = document.getElementById('newsDetailContent');
    container.innerHTML = `
        <span class="badge">${item.category}</span>
        <h1>${item.title}</h1>
        <div class="news-detail-meta">
            <span><i class="fa-solid fa-calendar"></i> ${item.date}</span>
            <span><i class="fa-solid fa-user"></i> ${item.author}</span>
        </div>
        <img src="${item.image}" alt="${item.title}">
        <div class="news-body">
            <p>${item.content}</p>
        </div>
    `;

    switchPage('newsDetail');
}

// MEMBERS HUB TABS
function switchHubTab(tabName) {
    document.querySelectorAll('.hub-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.hub-tab-content').forEach(content => content.classList.remove('active'));

    if (tabName === 'structure') {
        document.querySelectorAll('.hub-tab-btn')[0].classList.add('active');
        document.getElementById('tabStructure').classList.add('active');
    } else if (tabName === 'humas') {
        document.querySelectorAll('.hub-tab-btn')[1].classList.add('active');
        document.getElementById('tabHumas').classList.add('active');
    }
}

// RENDER DESIGN SHOWCASE
function renderDesign(data) {
    const grid = document.getElementById('designGrid');
    grid.innerHTML = '';

    data.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.title}" class="card-img" onclick="openLightbox('${item.image}', '${item.title}')">
                <div class="card-body">
                    <div class="card-meta">
                        <span class="badge">${item.category}</span>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                </div>
            </div>
        `;
    });
}

function filterDesign(category, btn) {
    document.querySelectorAll('#design .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (category === 'all') {
        renderDesign(designData);
    } else {
        const filtered = designData.filter(item => item.category === category);
        renderDesign(filtered);
    }
}

// LIGHTBOX MODAL
function openLightbox(imgSrc, captionText) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');

    lightbox.style.display = 'flex';
    img.src = imgSrc;
    caption.textContent = captionText;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// INITIALIZATION ON LOAD
window.addEventListener('DOMContentLoaded', () => {
    renderArchive(archiveData);
    renderNews();
    renderDesign(designData);
});
