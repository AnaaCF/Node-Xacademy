const {libraryProvider} = require('../provides')
const creatLibrary = async (library) => {
    return await libraryProvider.creatLibrary(library);
}

const getLibrary = async (LibraryId) => {
    return await libraryProvider.getLibrary(LibraryId);
}
const upDataLibrary = async (id,libraryOptions) =>{
    return await libraryProvider.upDataLibrary(id,libraryOptions);
}
const getLibraries = async () => {
    return await libraryProvider.getLibraries();
}

module.exports = {creatLibrary, getLibrary, upDataLibrary, getLibraries};