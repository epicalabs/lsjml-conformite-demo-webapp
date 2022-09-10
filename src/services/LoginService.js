
export const LoginService = (credentials) => {
    const {username, password} = credentials;
    
    if (username === 'Mauricio' && password === 'Rednajava') {
        return credentials;
    }else{
        throw new Error('F, no se pudo')
    }

}
