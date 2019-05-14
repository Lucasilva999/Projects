const env = process.env.NODE_ENV || 'dev'

const config = () => {
    switch (env) {
        case 'dev': 
        return {
            bd_string: 'mongodb+srv://user_admin:Admin.Bson2019-api@clusterapi-3uj9x.mongodb.net/test?retryWrites=true',
            jwt_pass: 'LucasilvaAPI/jwt2019//',
            jwt_expires_in: '7d'
        }
        case 'hml':
        return {
            bd_string: 'mongodb+srv://user_admin:Admin.Bson2019-api@clusterapi-3uj9x.mongodb.net/test?retryWrites=true'
        }
        case 'prod': 
        return {
            bd_string: 'mongodb+srv://user_admin:Admin.Bson2019-api@clusterapi-3uj9x.mongodb.net/test?retryWrites=true'
        }    
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}...`)

module.exports = config()