  export const getFileArr = (filelist) => {
    const files = [];
    if(filelist){
      for(let i = 0; i < filelist.length; i++)
      {
        files.push(filelist.item(i));
      }
    }

    return files;
  }
