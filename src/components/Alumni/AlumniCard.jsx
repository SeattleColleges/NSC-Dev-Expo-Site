import './alumni.css';

export default function AlumniCard({ profileImg, name, role, companyIcons, quote }) {
  return (
    <div className="alumni-card">
      <div className="alumni-top">

        {/* LEFT COLUMN */}
        <div className="alumni-left">
          {profileImg ? (
            <img src={profileImg} className="profile-square" />
          ) : (
            <div className="profile-square placeholder">IMG</div>
          )}

          <div className="company-icons">
            {companyIcons?.length > 0 ? (
              companyIcons.map((icon, i) => (
                <img key={i} src={icon} className="company-icon" />
              ))
            ) : (
              <>
                <div className="company-placeholder"></div>
                <div className="company-placeholder"></div>
              </>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="alumni-right">
          <h3 className="alumni-name">{name}</h3>
          <p className="alumni-role">{role}</p>

          {/* DESCRIPTION */}
          <p className="alumni-quote">{quote}</p>
        </div>
      </div>

      
    </div>
  );
}