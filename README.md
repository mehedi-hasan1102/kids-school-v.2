# Kids School

Public-facing school website with role-based dashboards for Students, Teachers, and Admin.

## Implemented Scope

- Public website pages:
  - Home (with rotating hero banner/carousel)
  - About Us (mission, vision, principal's message)
  - Academics (classes offered and curriculum details)
  - Admissions (process, requirements, fee structure)
  - Faculty (teacher profiles)
  - Events/News
  - Contact Us (address, phone, email, contact form)
- Authentication UI:
  - Login with email/username, password, and role selection
  - Role-based redirection after login
- Role-based dashboards:
  - Student: profile, attendance, results, announcements
  - Teacher: attendance management, result upload, assigned classes, announcements
  - Admin: management UI for students, teachers, content, banner images, announcements
- RBAC guard:
  - Protected dashboard routes via middleware + client checks
  - Simulated auth state via cookie + localStorage (frontend mode)

## Technology Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React Slick + Slick Carousel (hero/banner slider)
- React Fast Marquee

## Hosting Plan

### Option 1: Vercel (Recommended)
- Best fit for Next.js deployment with CI/CD from GitHub.
- Suitable for fast rollout and automatic previews.

### Option 2: VPS (Node runtime)
- Deploy with PM2/Nginx for full control.
- Better for custom infra or mixed services.

### Option 3: Shared Hosting
- Not recommended for full Next.js SSR apps unless static export only.

## Database Plan

### Recommended: PostgreSQL or MySQL
Core tables for backend phase:
- `users` (id, name, identifier, password_hash, role, status)
- `students` (user_id, class, section, roll, guardian info)
- `teachers` (user_id, department, subjects)
- `announcements` (title, body, scope, published_at)
- `results` (student_id, subject, marks, grade, exam_term)
- `attendance` (student_id, class_date, status)
- `hero_banners` (title, subtitle, image_url, cta, is_active, order)

## Deployment Timeline

### Week 1
- Finalize UI and content approval
- Implement backend auth API (JWT/session)

### Week 2
- Integrate database models + CRUD for students/teachers/content
- Connect dashboards to real APIs

### Week 3
- QA, security hardening, role permission tests
- Production deployment and monitoring setup

## Local Run

```bash
npm install
npm run dev
```

## Demo Login Credentials

- Student: `student@kidsschool.edu` / `student123`
- Teacher: `teacher@kidsschool.edu` / `teacher123`
- Admin: `admin@kidsschool.edu` / `admin123`
