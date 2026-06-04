
import  { useEffect, useState } from 'react';
import type { FacultyCard } from './components/FacultyCard';

export const FacultyCard = ({
  name,
  title,
  bio,
  skills,
  contactInfo,
  education,
  languages,
  hobbies,
}: FacultyCardProps) => {
  // ✅ Web-safe responsive width tracking (replaces react-native)
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 600
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = width < 600;

  return (
    <div
      style={{
        maxWidth: '390px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '24px 20px',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#000000',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            backgroundColor: '#555555',
            color: '#ffffff',
            padding: '12px 14px',
            fontWeight: 'bold',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          LOGO
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ width: '32px', height: '4px', backgroundColor: '#000000' }} />
          <span style={{ width: '32px', height: '4px', backgroundColor: '#000000' }} />
          <span style={{ width: '32px', height: '4px', backgroundColor: '#000000' }} />
        </div>
      </div>

      {/* Profile Image */}
      <div
        style={{
          backgroundColor: '#777777',
          width: '100%',
          aspectRatio: '1.2 / 1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px',
        }}
      >
        <span style={{ fontSize: '10px', fontStyle: 'italic' }}>
          profile image*
        </span>
      </div>

      {/* Name */}
      <h2
        style={{
          fontSize: isSmallScreen ? '18px' : '32px',
          fontWeight: 'bold',
          margin: '0 0 4px 0',
          letterSpacing: '-0.5px',
        }}
      >
        {name}
      </h2>

      {/* Title */}
      <p
        style={{
          fontSize: isSmallScreen ? '16px' : '20px',
          fontStyle: 'italic',
          margin: '0 0 24px 0',
          whiteSpace: 'pre-line',
        }}
      >
        {title}
      </p>

      {/* BIO */}
      <div
        style={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: '20px',
        }}
      >
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontSize: '13px',
              lineHeight: '1.4',
              marginBottom: '32px',
            }}
          >
            {bio.map((paragraph, index) => (
              <p key={index} style={{ margin: 0 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            backgroundColor: '#222222',
            color: '#ffffff',
            padding: '6px 12px',
            fontSize: '14px',
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          Skills
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {skills.map((skill, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                gap: '6px',
                fontSize: isSmallScreen ? '16px' : '20px',
                fontWeight: 'bold',
                marginBottom: '14px',
              }}
            >
              <span style={{ fontSize: '9px', color: '#555' }}>icon*</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Info Box */}
      <div
        style={{
          backgroundColor: '#cccccc',
          padding: '24px 16px',
          border: '1px solid #777777',
          lineHeight: '1.3',
        }}
      >
        <div>
          <span>Email:</span>
          <strong style={{ display: 'block', paddingLeft: '16px' }}>
            {contactInfo.email}
          </strong>
        </div>

        <div>
          <span>Phone:</span>
          <strong style={{ display: 'block', paddingLeft: '16px' }}>
            {contactInfo.phone}
          </strong>
        </div>

        <div>
          <span>Office:</span>
          <strong style={{ display: 'block', paddingLeft: '16px' }}>
            {contactInfo.office.room}
          </strong>
          <strong style={{ display: 'block', paddingLeft: '16px', fontWeight: 'normal' }}>
            {contactInfo.office.hours}
          </strong>
        </div>

        <div>
          <span>Education:</span>
          {education.map((edu, idx) => (
            <div key={idx} style={{ paddingLeft: '16px', marginBottom: '8px' }}>
              <strong style={{ display: 'block' }}>{edu.institution}</strong>
              <span style={{ display: 'block', fontSize: '12px' }}>
                {edu.years}
              </span>
            </div>
          ))}
        </div>

        <div>
          <span>Languages:</span>
          {languages.map((lang, idx) => (
            <strong key={idx} style={{ display: 'block', paddingLeft: '16px' }}>
              {lang}
            </strong>
          ))}
        </div>

        <div>
          <span>Hobbies:</span>
          {hobbies.map((hobby, idx) => (
            <strong key={idx} style={{ display: 'block', paddingLeft: '16px' }}>
              {hobby}
            </strong>
          ))}
        </div>
      </div>
    </div>
  );
};

