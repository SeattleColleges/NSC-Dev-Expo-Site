CREATE TABLE student_projects (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  project_name VARCHAR(150) NOT NULL,
  project_description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);