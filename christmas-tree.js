// 눈송이 생성 함수
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.cssText = `
        position: fixed;
        top: -20px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 10 + 10}px;
        opacity: ${Math.random() * 0.5 + 0.5};
        animation: fall ${Math.random() * 3 + 2}s linear;
        color: white;
        z-index: 1000;
        pointer-events: none;
    `;
    
    document.body.appendChild(snowflake);
    
    // 애니메이션이 끝나면 눈송이 제거
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// 주기적으로 눈송이 생성
setInterval(createSnowflake, 200);

// 트리에 마우스 호버 시 효과
const tree = document.querySelector('.tree');
const message = document.querySelector('.message');

tree.addEventListener('mouseenter', () => {
    tree.style.transform = 'scale(1.05)';
    tree.style.transition = 'transform 0.3s ease';
});

tree.addEventListener('mouseleave', () => {
    tree.style.transform = 'scale(1)';
});

// 메시지 클릭 시 색상 변경
const colors = ['#ff00de', '#ffff00', '#00ff00', '#00ffff', '#ff0000', '#ff69b4'];
let colorIndex = 0;

message.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    const color = colors[colorIndex];
    message.style.textShadow = `0 0 10px #fff, 0 0 20px #fff, 0 0 30px ${color}, 0 0 40px ${color}`;
});

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('🎄 메리 크리스마스! 🎄');
    console.log('트리를 클릭하고 메시지를 클릭해보세요!');
});
