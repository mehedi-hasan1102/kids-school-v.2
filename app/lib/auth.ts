export type UserRole = "student" | "teacher" | "admin";

export type DemoUser = {
  role: UserRole;
  name: string;
  identifier: string;
  password: string;
};

export type SessionUser = {
  role: UserRole;
  name: string;
  identifier: string;
};

export const DEMO_USERS: DemoUser[] = [
  {
    role: "student",
    name: "Ayesha Rahman",
    identifier: "student@kidsschool.edu",
    password: "student123",
  },
  {
    role: "teacher",
    name: "Mr. Arif Hasan",
    identifier: "teacher@kidsschool.edu",
    password: "teacher123",
  },
  {
    role: "admin",
    name: "School Admin",
    identifier: "admin@kidsschool.edu",
    password: "admin123",
  },
];

export const ROLE_LABEL: Record<UserRole, string> = {
  student: "Student",
  teacher: "Teacher",
  admin: "Admin",
};

export const AUTH_STORAGE_KEY = "kidsSchoolUser";

export function getDashboardPath(role: UserRole): string {
  return `/dashboard/${role}`;
}

export function validateUser(
  identifier: string,
  password: string,
  role: UserRole,
): DemoUser | null {
  const normalized = identifier.trim().toLowerCase();

  return (
    DEMO_USERS.find(
      (user) =>
        user.role === role &&
        user.identifier.toLowerCase() === normalized &&
        user.password === password,
    ) ?? null
  );
}

export function toSessionUser(user: DemoUser): SessionUser {
  return {
    role: user.role,
    name: user.name,
    identifier: user.identifier,
  };
}

export function parseRole(value: string | undefined): UserRole | null {
  if (value === 'student' || value === 'teacher' || value === 'admin') {
    return value;
  }

  return null;
}
