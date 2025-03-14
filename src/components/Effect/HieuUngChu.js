import React, { useEffect } from 'react';
import './HieuUngChu.css'; // Import CSS cho hiệu ứng

const HieuUngChu = () => {
  // Hiệu ứng sao theo con trỏ chuột
  useEffect(() => {
    const createStars = (e) => {
      // Tạo 1-2 sao mỗi lần di chuyển chuột
      for (let i = 0; i < Math.floor(Math.random() * 2) + 1; i++) {
        const star = document.createElement('div');
        star.className = 'cursor-star';
        star.style.left = `${e.clientX + (Math.random() - 0.5) * 10}px`; // Giảm khoảng cách phát tán
        star.style.top = `${e.clientY + (Math.random() - 0.5) * 10}px`;
        document.body.appendChild(star);

        // Sử dụng requestAnimationFrame để xóa sao mượt mà
        const fadeOut = () => {
          let opacity = 1;
          const fade = () => {
            opacity -= 0.03; // Giảm tốc độ mờ dần để mượt hơn
            if (opacity > 0) {
              star.style.opacity = opacity;
              requestAnimationFrame(fade);
            } else {
              star.remove();
            }
          };
          requestAnimationFrame(fade);
        };
        fadeOut();
      }
    };

    document.addEventListener('mousemove', createStars);

    return () => {
      document.removeEventListener('mousemove', createStars);
    };
  }, []);

  return (
    <div className="meteor-container">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="meteor"
          style={{
            top: `${(index + 1) * 5}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 2}s`, // Đa dạng tốc độ
            width: `${Math.random() * 2 + 1}px`, // Đa dạng kích thước
            height: `${Math.random() * 2 + 1}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default HieuUngChu;