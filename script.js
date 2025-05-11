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
// 添加双击删除祝福卡片功能
document.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('dblclick', function() {
        this.remove();
        // 同步更新本地存储
    });
});
// 添加双击删除祝福卡片功能
document.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('dblclick', function() {
        this.remove();
        // 同步更新本地存储
    });
});
// script.js 更新
let lastDays = Infinity;

function updateMotherDayCountdown() {
    const nextYear = new Date().getFullYear() + 1;
    const targetDate = new Date(`${nextYear}-05-11`);
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.ceil(diff / (86400000));

    // 当天数变化时触发动画
    if(days !== lastDays) {
        const countdownEl = document.getElementById('countdown');
        countdownEl.style.animation = 'none';
        void countdownEl.offsetWidth; // 触发重绘
        countdownEl.style.animation = 'numberUpdate 0.6s ease-out';
    }

    document.getElementById('countdown').innerHTML =
        `距离${nextYear}年母亲节还有 <strong>${days}</strong> 天`;
    lastDays = days;
}

// 初始化倒计时
updateMotherDayCountdown();
setInterval(updateMotherDayCountdown, 1000);

