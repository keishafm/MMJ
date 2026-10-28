// Data Dummy MMJ Digital Space dengan Dukungan Lintas Angkatan
const archiveData = [
    { id: 1, title: "Lomba Poster Digital Antar Kelas", category: "Lomba", batch: "Angkatan 18", date: "12 Oktober 2026", image: "https://images.unsplash.com/photo-1542744094-3a31243364d0?auto=format&fit=crop&w=800&q=80", desc: "Dokumentasi kegiatan kompetisi desain poster digital yang diikuti oleh perwakilan setiap kelas." },
    { id: 2, title: "Upacara Hari Pahlawan Nasional", category: "Acara Sekolah", batch: "Angkatan 18", date: "10 November 2026", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", desc: "Liputan foto resmi upacara peringatan Hari Pahlawan oleh tim jurnalis." },
    { id: 3, title: "Pameran Karya Visual & Sinematografi", category: "Acara Sekolah", batch: "Angkatan 17", date: "15 Desember 2025", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", desc: "Arsip kegiatan pameran akhir tahun dari kakak tingkat angkatan sebelumnya." },
    { id: 4, title: "Workshop Jurnalistik & Videografi", category: "Organisasi", batch: "Angkatan 17", date: "20 Januari 2025", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", desc: "Pelatihan dasar teknik pengambilan video jurnalistik." }
];

const newsData = [
    { id: 1, title: "Tim MMJ Raih Juara 1 Kompetisi Jurnalistik Pelajar", category: "Prestasi", batch: "Angkatan 18", date: "15 Februari 2026", author: "Ahmad Rizky", thumbnail: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80", content: "Tim jurnalistik berhasil menorehkan prestasi gemilang dalam ajang lomba jurnalistik tingkat kabupaten." },
    { id: 2, title: "Pekan Kreativitas Siswa Resmi Dibuka", category: "Liputan", batch: "Angkatan 17", date: "02 Februari 2025", author: "Dewi Lestari", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80", content: "Acara tahunan sekolah yang menampilkan berbagai karya digital dan fotografi." }
];

const showcaseData = [
    { id: 1, title: "Poster Sosialisasi Anti Bullying", category: "Poster", batch: "Angkatan 18", creator: "Dimas Pratama", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Feed Instagram Kegiatan HUT Sekolah", category: "Social Media", batch: "Angkatan 18", creator: "Nabila Zahra", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Banner Pameran Seni Angkatan 17", category: "Banner", batch: "Angkatan 17", creator: "Rian Hidayat", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" }
];

// Navigation Switcher
function switchPage(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`page-${pageId}`).classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-blue-500', 'font-bold');
        if(link.getAttribute('data-target') === pageId) {
            link.classList.add('text-blue-500', 'font-bold');
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}
menuBtn.addEventListener('click', toggleMenu);

// Render Memory Archive
function renderArchive(data) {
    const grid = document.getElementById('archive-grid');
    grid.innerHTML = data.map(item => `
        <div onclick="openArchiveDetail(${item.id})" class="group bg-cardBg border border-cardBorder rounded-2xl overflow-hidden hover:border-blue-500/50 cursor-pointer transition">
            <div class="h-48 overflow-hidden relative">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-3 left-3 flex gap-2">
                    <span class="bg-darkBg/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-blue-400 border border-cardBorder">${item.category}</span>
                    <span class="bg-darkBg/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-cardBorder">${item.batch}</span>
                </div>
            </div>
            <div class="p-5 space-y-2">
                <span class="text-xs text-gray-500">${item.date}</span>
                <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition">${item.title}</h3>
                <p class="text-gray-400 text-sm line-clamp-2">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function applyArchiveFilters() {
    const searchVal = document.getElementById('archive-search').value.toLowerCase();
    const catVal = document.getElementById('archive-cat-filter').value;
    const batchVal = document.getElementById('archive-batch-filter').value;

    const filtered = archiveData.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(searchVal);
        const matchCat = catVal === 'all' || item.category === catVal;
        const matchBatch = batchVal === 'all' || item.batch === batchVal;
        return matchSearch && matchCat && matchBatch;
    });

    renderArchive(filtered);
}

document.getElementById('archive-search').addEventListener('input', applyArchiveFilters);

// Render Newsroom
function renderNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = newsData.map(news => `
        <div onclick="openNewsDetail(${news.id})" class="group bg-cardBg border border-cardBorder rounded-2xl overflow-hidden hover:border-blue-500/50 cursor-pointer transition flex flex-col justify-between">
            <div>
                <div class="h-48 overflow-hidden relative">
                    <img src="${news.thumbnail}" alt="${news.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute top-3 left-3 flex gap-2">
                        <span class="bg-darkBg/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-purple-400 border border-cardBorder">${news.category}</span>
                        <span class="bg-darkBg/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-cardBorder">${news.batch}</span>
                    </div>
                </div>
                <div class="p-5 space-y-2">
                    <div class="flex items-center justify-between text-xs text-gray-500">
                        <span>${news.date}</span>
                        <span>Oleh: ${news.author}</span>
                    </div>
                    <h3 class="text-lg font-bold text-white group-hover:text-purple-400 transition">${news.title}</h3>
                    <p class="text-gray-400 text-sm line-clamp-3">${news.content}</p>
                </div>
            </div>
            <div class="p-5 pt-0">
                <span class="text-xs font-semibold text-blue-400 group-hover:underline">Baca selengkapnya &rarr;</span>
            </div>
        </div>
    `).join('');
}

// Render Members Hub
function switchDivision(divKey) {
    document.querySelectorAll('.div-tab').forEach(tab => {
        tab.classList.remove('bg-blue-600', 'text-white');
        tab.classList.add('bg-cardBg', 'text-gray-400', 'border', 'border-cardBorder');
    });
    event.target.classList.add('bg-blue-600', 'text-white');
    event.target.classList.remove('bg-cardBg', 'text-gray-400', 'border');

    const content = document.getElementById('division-content');
    if(divKey === 'struktur') {
        content.innerHTML = `
            <div class="bg-cardBg border border-cardBorder rounded-2xl p-6 space-y-6">
                <h3 class="text-xl font-bold text-white">Struktur Kepengurusan MMJ (Lintas Angkatan)</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="p-4 rounded-xl bg-darkBg border border-cardBorder">
                        <span class="text-xs text-blue-400 font-semibold">Ketua Umum</span>
                        <h4 class="text-lg font-bold text-white mt-1">Muhammad Farhan</h4>
                    </div>
                    <div class="p-4 rounded-xl bg-darkBg border border-cardBorder">
                        <span class="text-xs text-purple-400 font-semibold">Wakil Ketua</span>
                        <h4 class="text-lg font-bold text-white mt-1">Aulia Zahra</h4>
                    </div>
                    <div class="p-4 rounded-xl bg-darkBg border border-cardBorder">
                        <span class="text-xs text-emerald-400 font-semibold">Sekretaris / Bendahara</span>
                        <h4 class="text-lg font-bold text-white mt-1">Nasywa Salsabila</h4>
                    </div>
                </div>
            </div>
        `;
    } else if(divKey === 'humas') {
        content.innerHTML = `
            <div class="bg-cardBg border border-cardBorder rounded-2xl p-8 space-y-6">
                <div class="space-y-2">
                    <span class="text-xs font-semibold text-blue-400 uppercase tracking-widest">Profil Divisi</span>
                    <h2 class="text-2xl font-bold text-white">Divisi Hubungan Masyarakat (Humas)</h2>
                    <p class="text-gray-400 text-sm leading-relaxed">Divisi Humas menjembatani komunikasi antara organisasi MMJ dengan sekolah dan pihak luar.</p>
                </div>
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="bg-cardBg border border-cardBorder rounded-2xl p-8 space-y-4 text-center">
                <h3 class="text-xl font-bold text-white">Informasi Divisi ${divKey.toUpperCase()}</h3>
                <p class="text-gray-400 text-sm">Halaman detail profil dan program kerja divisi.</p>
            </div>
        `;
    }
}

// Render Design Showcase
function renderShowcase(data) {
    const grid = document.getElementById('showcase-grid');
    grid.innerHTML = data.map(item => `
        <div onclick="openShowcaseDetail(${item.id})" class="group bg-cardBg border border-cardBorder rounded-2xl overflow-hidden hover:border-blue-500/50 cursor-pointer transition">
            <div class="h-64 overflow-hidden relative">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-3 left-3 flex gap-2">
                    <span class="bg-darkBg/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 border border-cardBorder">${item.category}</span>
                    <span class="bg-darkBg/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-blue-400 border border-cardBorder">${item.batch}</span>
                </div>
            </div>
            <div class="p-5 space-y-1">
                <h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition">${item.title}</h3>
                <p class="text-xs text-gray-400">Kreator: ${item.creator}</p>
            </div>
        </div>
    `).join('');
}

function applyShowcaseFilter() {
    const batchVal = document.getElementById('showcase-batch-filter').value;
    if(batchVal === 'all') {
        renderShowcase(showcaseData);
    } else {
        const filtered = showcaseData.filter(item => item.batch === batchVal);
        renderShowcase(filtered);
    }
}

// Modal Handlers
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

function openArchiveDetail(id) {
    const item = archiveData.find(i => i.id === id);
    modalContent.innerHTML = `
        <img src="${item.image}" class="w-full h-72 object-cover rounded-xl">
        <div class="space-y-2">
            <span class="text-xs text-blue-400 font-semibold">${item.category} · ${item.batch} · ${item.date}</span>
            <h2 class="text-2xl font-bold text-white">${item.title}</h2>
            <p class="text-gray-300 text-sm leading-relaxed">${item.desc}</p>
        </div>
    `;
    modal.classList.remove('hidden');
}

function openNewsDetail(id) {
    const news = newsData.find(n => n.id === id);
    modalContent.innerHTML = `
        <img src="${news.thumbnail}" class="w-full h-72 object-cover rounded-xl">
        <div class="space-y-3">
            <div class="flex items-center justify-between text-xs text-gray-400">
                <span class="text-purple-400 font-semibold">${news.category} (${news.batch})</span>
                <span>${news.date} | Oleh: ${news.author}</span>
            </div>
            <h2 class="text-2xl font-bold text-white">${news.title}</h2>
            <p class="text-gray-300 text-sm leading-relaxed">${news.content}</p>
        </div>
    `;
    modal.classList.remove('hidden');
}

function openShowcaseDetail(id) {
    const item = showcaseData.find(i => i.id === id);
    modalContent.innerHTML = `
        <img src="${item.image}" class="w-full max-h-[75vh] object-contain rounded-xl bg-darkBg">
        <div class="space-y-2 text-center">
            <span class="text-xs text-emerald-400 font-semibold">${item.category} · ${item.batch}</span>
            <h2 class="text-xl font-bold text-white">${item.title}</h2>
            <p class="text-xs text-gray-400">Dibuat oleh ${item.creator}</p>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

// Initializing on Load
window.addEventListener('DOMContentLoaded', () => {
    renderArchive(archiveData);
    renderNews();
    switchDivision('struktur');
    renderShowcase(showcaseData);
});
