const API = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh/token',
    me: '/auth/me',
    forgotPassword: '/auth/forgot/password',
    resetPassword: '/auth/reset/password',
  },
  listings: {
    getAll: '/listings',
    getById: (id: string) => `/listings/${id}`,
    create: '/listings',
    update: (id: string) => `/listings/${id}`,
    delete: (id: string) => `/listings/${id}`,
    search: '/listings/search',
  },
  vendor: {
    profile: '/vendor/profile',
    listings: '/vendor/listings',
    dashboard: '/vendor/dashboard',
  },
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile',
    changePassword: '/user/change-password',
  },
  contact: {
    send: '/contact',
  },
} as const;

export default API;
