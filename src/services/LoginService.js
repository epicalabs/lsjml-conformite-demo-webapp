
export const LoginService = (credentials) => {
    const {username, password} = credentials;

    let users = [
        {
            user: 'Mauricio',
            role: 'Administrateur',
            pass: 'Rednajava'
        },
        {
            user: 'Freddy',
            role: 'Qualité',
            pass: 'Rednajava'
        },
        {
            user: 'Laura',
            role: 'Achats', 
            pass: 'Rednajava'
        },
        {
            user: 'Carlos',
            role: 'Utilisateur',
            pass: 'Rednajava'
        },
    ]
    
    let userLogged = users.find(({user, pass}) => user === username && pass === password)
    console.log(userLogged);

    if (userLogged) 
        return userLogged
    else
        throw new Error('Nope, hay un fallo aqui')
    
}
