// script.js
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value.trim();

    if (message) {
        const card = document.createElement('div');
        card.className = 'message-card';
        card.innerHTML = `
            <p>${message}</p>
            <span class="timestamp">${new Date().toLocaleTimeString()}</span>
        `;
        // 添加淡入动画
        card.style.animation = 'fadeIn 0.8s ease-out';
        document.getElementById('message-container').prepend(card);
        input.value = '';
        // 保存到本地存储
        localStorage.setItem('messages', JSON.stringify([...JSON.parse(localStorage.getItem('messages') || '[]'), message]));
    }
});
// script.js 追加
particlesJS('particles-js', {
    particles: {
        color: '#ff69b4', // 粉色粒子
        size: 3,
        line_linked: { enable: false },
        move: { speed: 2 }
    }
});
// script.js 追加
function updateMotherDayCountdown() {
    const nextYear = new Date().getFullYear() + 1;
    const targetDate = new Date(`${nextYear}-05-11`); // 2026年母亲节
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerHTML = `距离明年母亲节还有 ${days} 天`;
}
// 在HTML中添加<div id="countdown"></div>
