function loadenv(keyname){
    const envVariable = process.env[keyname];
    if(!envVariable){
        throw new Error(`Configuration must include ${keyname}`)
    }
    return envVariable
}
module.exports = {
    secretKey: loadEnvironmentVariable('SECRET_KEY'),
}