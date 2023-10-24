// This Is Only For Manoj-Md Easy Load
module.exports.load = {
got : async ()=> {
    return (await import('got')).default
},
chalk : async ()=> {
    return (await import('chalk')).default
},
FileType : async ()=> {
    return (await import('file-type')).default
}
}