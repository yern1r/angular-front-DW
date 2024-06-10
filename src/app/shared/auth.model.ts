export interface AuthResponse {
    code: number;
    message: string;
    data: string; // JWT token
  }