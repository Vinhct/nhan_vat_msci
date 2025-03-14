import React, { useState, useEffect, useRef } from 'react';
import './Skills.css'; // Import CSS

const Skills = ({ selectedHero }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const skillItemsRef = useRef([]);

  // Tự động chọn kỹ năng đầu tiên khi selectedHero thay đổi
  useEffect(() => {
    if (selectedHero && selectedHero.skills && selectedHero.skills.length > 0) {
      setSelectedSkill(selectedHero.skills[0]); // Chọn kỹ năng đầu tiên
    }
  }, [selectedHero]);

  // IntersectionObserver cho animation khi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Thêm class khi item vào viewport
            observer.unobserve(entry.target); // Ngừng theo dõi sau khi animation chạy
          }
        });
      },
      {
        threshold: 0.1, // Kích hoạt khi 10% item vào viewport
        rootMargin: '0px 0px -10% 0px', // Kích hoạt sớm hơn 10% chiều cao
      }
    );

    skillItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect(); // Dọn dẹp observer
    };
  }, [selectedHero]);

  if (!selectedHero || !selectedHero.skills || selectedHero.skills.length === 0) {
    return null;
  }

  const handleSkillClick = (skill) => {
    setSelectedSkill((prev) => (prev?.name === skill.name ? null : skill)); // Toggle khi click lại
  };

  // URL của hình ảnh từ mạng (thay bằng link thực tế của bạn)
  const backgroundUrl = 'https://example.com/background-skills.jpg'; // Thay bằng URL thực tế

  return (
    <div
      className="skills-container"
      style={{
        background: `url(${backgroundUrl}) no-repeat center center / cover fixed`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <h2 className="skills-title">
        <span className="skills-number">01</span> HERO SKILLS
      </h2>
      <div className="skills-content">
        <div className="skills-grid">
          {selectedHero.skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillItemsRef.current[index] = el)} // Lưu ref cho từng item
              className={`skill-item ${selectedSkill?.name === skill.name ? 'skill-item-selected' : ''}`}
              onClick={() => handleSkillClick(skill)}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
        <div className="skills-details-section">
          <div className="skill-details-wrapper">
            {selectedSkill && (
              <div className="skill-details-panel">
                <h3>{selectedSkill.name}</h3>
                <p>{selectedSkill.description}</p>
                {selectedSkill.videoUrl && (
                  <iframe
                    width="560"
                    height="315"
                    src={selectedSkill.videoUrl}
                    title={`${selectedSkill.name} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="radar-chart-placeholder">
                  <span>Survival</span>
                  <span>Support</span>
                  <span>Control</span>
                  <span>Damage</span>
                  <span>Mobility</span>
                </div>
                {/* Thêm ảnh mô tả skill */}
                {selectedSkill.skillImage && (
                  <div className="skill-image-container">
                    <img
                      src={selectedSkill.skillImage}
                      alt={`${selectedSkill.name} Image`}
                      className="skill-image"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="character-image-container">
            <img src={selectedHero.characterImage} alt={selectedHero.name} className="character-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;