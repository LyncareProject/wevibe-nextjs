import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    userId : string;
    email: string;
    name: string;
    image: string;
    role: string;
    provider: string;
    company: string;
    rank: string;
    userId: string;
    createdAt: Date;
    emailVerified: Date;
  }

  interface Profile {
    properties: {
      nickname: string;
      profile_image: string;
    };
    kakao_account: {
      email: string;
    };
  }

  interface Session {
    user: User;
  }

  interface Token {
    user: User;
  }
}
