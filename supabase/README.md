# Supabase Student Projects Table

# Project Overview

This project is a simple PostgreSQL and Supabase example for practicing database table creation, CRUD operations, API testing, and collaborative Git workflows.

The project stores student project information inside a PostgreSQL table named:

```sql
student_projects
```

---

# Features

- PostgreSQL table schema
- Supabase-ready SQL structure
- CRUD operation practice
- API testing notes
- Simple project organization

---

# Project Structure

```text
project-root
├── supabase
│   └── schema.sql
│
├── api-tests
│   └── student-projects-api.md
│
└── README.md
```

---

# Database Table

The database table includes:

- id
- student_name
- project_name
- project_description
- created_at

---

# How to Run

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Open Project Folder

```bash
cd NSC-Dev-Expo-Site
```

---

## 3. Open Supabase SQL Editor

Go to:

```text
https://supabase.com
```

Open your Supabase project and navigate to:

```text
SQL Editor
```

---

## 4. Run SQL Schema

Open:

```text
supabase/schema.sql
```

Copy and run the SQL script inside Supabase.

---

# 5. Test CRUD Operations

Use the API testing notes file:

```text
api-tests/student-projects-api.md
```

Practice:

- INSERT
- SELECT
- UPDATE
- DELETE

queries on the `student_projects` table.


# Example SQL Query

```sql
INSERT INTO student_projects (
  student_name,
  project_name,
  project_description
)
VALUES (
  'Bashir',
  'Supabase Practice Project',
  'Testing PostgreSQL and CRUD operations'
);



# Learning Goals

This project helps practice:

- PostgreSQL database design
- Supabase integration
- CRUD operations
- API testing workflows
- Git collaboration
- Pull request workflows

