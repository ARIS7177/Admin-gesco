interface AdminType {
  authenticate: (token: Token, user: User) => Boolean,
  isAuthenticate: () => false | User,
  getToken: () => Token | false,
  storeToken: (token: Token) => void,
  getUser: () => User | false,
  storeUser: (token: User) => void,
}

export interface Token {
  abilities: any,
  expiresAt: string | null,
  lastUsedAt: string | null,
  name: string | null,
  token: string,
  type: string,
}

export interface User {
  email: string,
  isActive: boolean,
  isSuperAdmin: boolean,
  telephone: number
}

export const Admin: AdminType =  {
  authenticate(token, user) {
    Admin.storeToken(token)
    Admin.storeUser(user)

    return true ;
  },

  storeToken(token){
    const serialisedToken = JSON.stringify(token) 
    localStorage.setItem('token', serialisedToken)

    return
  },

  getToken() {
    const storedToken = localStorage.getItem('token') ;

    if(!storedToken) return false 

    const decodedToken: Token = JSON.parse(storedToken) ;
    const { type, token } = decodedToken 

    if(!type || !token ) return false ;

    return decodedToken
  },

  storeUser(user: User) {
    const serialisedUser = JSON.stringify(user) ;
    localStorage.setItem('user', serialisedUser)
    
    return
  },

  getUser() {
    const storedUser = localStorage.getItem('user') ;

    if(!storedUser) return false 

    const decodedUser: User = JSON.parse(storedUser) ;
    const { email, telephone, isActive, isSuperAdmin } = decodedUser 

    if(!email || !telephone || !isActive || !isSuperAdmin) return false ;

    return decodedUser

  },

  isAuthenticate() {
    // Token ou false
    const statuts = Admin.getToken() ;

    if(!statuts) return statuts ;

    return Admin.getUser() ;
  }
}