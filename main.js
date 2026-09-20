// আপনার WhatsApp নম্বর
const WA_NUMBER = '8801719365983';
const DELIVERY_CHARGE = 70; // অটোমেটিক ডেলিভারি চার্জ

// প্রোডাক্ট ডাটা (বাংলা ও ইংলিশ বিবরণ সহ)
const paintings = [
    { id: 1, name: "Premium Art 1", nameBn: "প্রিমিয়াম আর্ট ১", price: 499, img: "assets/art1.png", descBn: "এটি একটি অসাধারণ প্রিমিয়াম পেইন্টিং। রঙের ব্যবহার এবং ডিটেইলিং দেখে মুগ্ধ হবেন।", descEn: "This is an exceptional premium painting. You will be amazed by the color usage and detailing." },
    { id: 2, name: "Exclusive Art 2", nameBn: "এক্সক্লুসিভ আর্ট ২", price: 299, img: "assets/art2.png", descBn: "বিশেষ ডিজাইনের এই পেইন্টিংটি আপনার ঘরকে করবে আরও সুন্দর।", descEn: "This specially designed painting will make your home more beautiful." },
    { id: 3, name: "Art 3", nameBn: "আর্ট ৩", price: 199, img: "assets/art3.png", descBn: "হাতে তৈরি এই শিল্পকর্মটি যেকোনো জায়গায় মানানসই।", descEn: "This handmade artwork is suitable for any place." },
    { id: 4, name: "Art 4", nameBn: "আর্ট ৪", price: 199, img: "assets/art4.png", descBn: "সুন্দর রঙের সমাহারে তৈরি এই আর্টওয়ার্ক।", descEn: "This artwork is created with a beautiful combination of colors." },
    { id: 5, name: "Art 5", nameBn: "আর্ট ৫", price: 199, img: "assets/art5.png", descBn: "শিল্পীর কল্পনা থেকে ফুটে ওঠা একটি অনন্য সৃষ্টি।", descEn: "A unique creation from the artist's imagination." },
    { id: 6, name: "Art 6", nameBn: "আর্ট ৬", price: 199, img: "assets/art6.png", descBn: "প্রতিটি ব্রাশ স্ট্রোকে লুকিয়ে আছে শিল্পীর আবেগ।", descEn: "The artist's emotion is hidden in every brush stroke." },
    { id: 7, name: "Art 7", nameBn: "আর্ট ৭", price: 199, img: "assets/art7.png", descBn: "ক্যানভাসে ফুটে উঠেছে প্রকৃতির অপরূপ সৌন্দর্য।", descEn: "The beauty of nature is reflected on the canvas." },
    { id: 8, name: "Art 8", nameBn: "আর্ট ৮", price: 199, img: "assets/art8.png", descBn: "আধুনিক শিল্পকলার একটি চমৎকার নিদর্শন।", descEn: "A wonderful example of modern art." },
    { id: 9, name: "Art 9", nameBn: "আর্ট ৯", price: 199, img: "assets/art9.png", descBn: "রঙিন এই পেইন্টিংটি আপনার মনকে করবে প্রফুল্ল।", descEn: "This colorful painting will make your mind cheerful." },
    { id: 10, name: "Art 10", nameBn: "আর্ট ১০", price: 199, img: "assets/art10.png", descBn: "শিল্পীর হাতের জাদুতে তৈরি এই অসাধারণ কাজ।", descEn: "This extraordinary work is created by the magic of the artist's hand." }
];

const crafts = [
    { id: 11, name: "Craft 1", nameBn: "ক্রাফট ১", price: 199, img: "assets/craft1.png", descBn: "হাতে তৈরি এই ক্রাফট আইটেমটি আপনার ঘরকে দেবে একটি নতুন মাত্রা।", descEn: "This handmade craft item will give your home a new dimension." },
    { id: 12, name: "Craft 2", nameBn: "ক্রাফট ২", price: 199, img: "assets/craft2.png", descBn: "ঐতিহ্যবাহী ডিজাইনে তৈরি এই ক্রাফট।", descEn: "This craft is made in traditional design." },
    { id: 13, name: "Craft 3", nameBn: "ক্রাফট ৩", price: 199, img: "assets/craft3.png", descBn: "প্রকৃতির উপাদান দিয়ে তৈরি এই সুন্দর ক্রাফট।", descEn: "This beautiful craft is made with natural materials." },
    { id: 14, name: "Craft 4", nameBn: "ক্রাফট ৪", price: 199, img: "assets/craft4.png", descBn: "শিল্পীর নিপুণ হাতে গড়া এই ক্রাফট আইটেম।", descEn: "This craft item is shaped by the artist's skilled hands." },
    { id: 15, name: "Craft 5", nameBn: "ক্রাফট ৫", price: 199, img: "assets/craft5.png", descBn: "ইউনিক ডিজাইনের এই ক্রাফটটি উপহার দেওয়ার জন্যও পারফেক্ট।", descEn: "This uniquely designed craft is also perfect for gifting." },
    { id: 16, name: "Craft 6", nameBn: "ক্রাফট ৬", price: 199, img: "assets/craft6.png", descBn: "রঙিন এবং আকর্ষণীয় এই ক্রাফট আইটেম।", descEn: "This is a colorful and attractive craft item." },
    { id: 17, name: "Craft 7", nameBn: "ক্রাফট ৭", price: 199, img: "assets/craft7.png", descBn: "হ্যান্ডমেড এই ক্রাফটটি যেকোনো রুমের শোভা বাড়াবে।", descEn: "This handmade craft will enhance the beauty of any room." },
    { id: 18, name: "Craft 8", nameBn: "ক্রাফট ৮", price: 199, img: "assets/craft8.png", descBn: "সুন্দর কারুকাজে ভরপুর এই ক্রাফট।", descEn: "This craft is full of beautiful craftsmanship." },
    { id: 19, name: "Craft 9", nameBn: "ক্রাফট ৯", price: 199, img: "assets/craft9.png", descBn: "আধুনিক এবং ট্র্যাডিশনাল ডিজাইনের মিশেলে তৈরি।", descEn: "Made with a blend of modern and traditional design." },
    { id: 20, name: "Craft 10", nameBn: "ক্রাফট ১০", price: 199, img: "assets/craft10.png", descBn: "শিল্পীর সৃজনশীলতার একটি চমৎকার নিদর্শন।", descEn: "A wonderful example of the artist's creativity." }
];

let selectedProduct = null;

// সাউন্ড ইফেক্ট (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
    } else if (type === 'open') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
    }
}

// পেজ লোড হলে
window.onload = function() {
    showProducts(paintings, 'paintingGrid', 'পেইন্টিং | Painting');
    showProducts(crafts, 'craftGrid', 'ক্রাফট | Craft');
    initScrollAnimations();
    initTiltEffect();
};

// প্রোডাক্ট দেখানো (কার্ডে ক্লিক করলে ডিটেইল মডাল খুলবে)
function showProducts(list, gridId, category) {
    const grid = document.getElementById(gridId);
    let html = '';
    list.forEach(item => {
        html += `
            <div class="card reveal" onclick="openProductDetail(${item.id}, '${category}')">
                <div class="card-img-wrapper">
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x240/FFC107/4E342E?text=${item.name}'">
                </div>
                <div class="card-body">
                    <div class="card-title">${item.name}</div>
                    <div class="card-price">৳${item.price}</div>
                    <button class="btn-order" onclick="event.stopPropagation(); openOrder(${item.id}, '${category}')">অর্ডার করুন | Order Now</button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// প্রোডাক্ট ডিটেইল মডাল খোলা (বড় ছবি সহ)
function openProductDetail(id, category) {
    playSound('open');
    const list = category.includes('পেইন্টিং') ? paintings : crafts;
    selectedProduct = list.find(p => p.id === id);
    
    if(selectedProduct) {
        document.getElementById('detailImage').src = selectedProduct.img;
        document.getElementById('detailImage').alt = selectedProduct.name;
        document.getElementById('detailBadge').textContent = category;
        document.getElementById('detailTitle').textContent = selectedProduct.nameBn + ' | ' + selectedProduct.name;
        document.getElementById('detailPrice').textContent = '৳' + selectedProduct.price;
        document.getElementById('detailDescBn').textContent = selectedProduct.descBn;
        document.getElementById('detailDescEn').textContent = selectedProduct.descEn;
        
        // Order বাটনে ক্লিক করলে অর্ডার মডাল খুলবে
        document.getElementById('detailOrderBtn').onclick = function() {
            closeProductDetail();
            setTimeout(() => openOrder(id, category), 300);
        };
        
        document.getElementById('productDetailModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// প্রোডাক্ট ডিটেইল মডাল বন্ধ করা
function closeProductDetail() {
    playSound('click');
    document.getElementById('productDetailModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// অর্ডার মডাল খোলা
function openOrder(id, category) {
    playSound('click');
    const list = category.includes('পেইন্টিং') ? paintings : crafts;
    selectedProduct = list.find(p => p.id === id);
    
    if(selectedProduct) {
        document.getElementById('modalProductName').textContent = selectedProduct.nameBn + ' (' + selectedProduct.name + ')';
        document.getElementById('modalBasePrice').textContent = '৳' + selectedProduct.price;
        document.getElementById('modalDelivery').textContent = '৳' + DELIVERY_CHARGE;
        updateTotal();
        
        document.getElementById('orderModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// টোটাল আপডেট
function updateTotal() {
    if(!selectedProduct) return;
    const qty = parseInt(document.getElementById('cQty').value) || 1;
    const baseTotal = selectedProduct.price * qty;
    const finalTotal = baseTotal + DELIVERY_CHARGE;
    
    document.getElementById('modalTotalPrice').textContent = '৳' + finalTotal;
}

// অর্ডার মডাল বন্ধ করা
function closeModal() {
    playSound('click');
    document.getElementById('orderModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// WhatsApp-এ অর্ডার পাঠানো
function sendToWhatsApp(e) {
    e.preventDefault();
    playSound('success');
    fireConfetti(); 
    
    const name = document.getElementById('cName').value;
    const phone = document.getElementById('cPhone').value;
    const address = document.getElementById('cAddress').value;
    const qty = parseInt(document.getElementById('cQty').value) || 1;
    
    const baseTotal = selectedProduct.price * qty;
    const finalTotal = baseTotal + DELIVERY_CHARGE;
    
    const message = `*🎨 নতুন অর্ডার - Artist Tanzim*%0A%0A` +
                    ` *প্রোডাক্ট:* ${selectedProduct.nameBn} (${selectedProduct.name})%0A` +
                    `💰 *প্রোডাক্টের দাম:* ৳${selectedProduct.price} x ${qty} = ৳${baseTotal}%0A` +
                    `🚚 *ডেলিভারি চার্জ:* ৳${DELIVERY_CHARGE}%0A` +
                    `💵 *সর্বমোট (Total):* ৳${finalTotal}%0A%0A` +
                    `👤 *কাস্টমার তথ্য:*%0A` +
                    `নাম: ${name}%0A` +
                    `ফোন: ${phone}%0A` +
                    `ঠিকানা: ${address}`;
    
    const waLink = `https://wa.me/${WA_NUMBER}?text=${message}`;
    window.open(waLink, '_blank');
    
    setTimeout(() => {
        closeModal();
        document.getElementById('orderForm').reset();
        alert('✅ আপনার অর্ডারটি সফলভাবে WhatsApp-এ পাঠানো হয়েছে!');
    }, 1000);
}

// কনফেটি ইফেক্ট
function fireConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#FFC107', '#F57C00', '#D32F2F', '#1565C0', '#25D366'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// মডালের বাইরে ক্লিক করলে বন্ধ হবে
window.onclick = function(event) {
    const productModal = document.getElementById('productDetailModal');
    const orderModal = document.getElementById('orderModal');
    
    if (event.target === productModal) closeProductDetail();
    if (event.target === orderModal) closeModal();
}

// স্ক্রল রিভিল অ্যানিমেশন
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// 3D টিল্ট ইফেক্ট
function initTiltEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}