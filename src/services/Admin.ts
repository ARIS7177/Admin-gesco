interface AdminType {
  authenticate: (token: string, user: string) => Boolean,
  isAuthenticate: () => boolean | string | null
}

export const Admin: AdminType =  {
  authenticate(token, user) {
    localStorage.setItem('token', token) ;
    localStorage.setItem('user', JSON.stringify(user))

    return true ;
  },

  isAuthenticate() {
    const token = localStorage.getItem('token') ;

    if(!token) return false ;

    return localStorage.getItem('user')
  }
}