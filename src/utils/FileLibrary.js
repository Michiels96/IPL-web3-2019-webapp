export const extractFileContent = (event, MAX_SIZE = 1048576, fileType) => {
  return new Promise((resolve, reject) => {
    const fileToExtract = event.target.files[0];
    let regex;
    if (fileType !== undefined) {
      regex = new RegExp("^(" + fileType + ")", "i");      
    }
    if ((regex && fileToExtract.type.match(regex)) || fileType === undefined) {
      var reader = new FileReader();

      if (fileToExtract.size <= MAX_SIZE) {        
        reader.onerror = () => {
          reader.abort();
          reject(new Error("Problem parsing input file."));
        };

        reader.onload = (e) => {          
          resolve(e.target.result);
        };
        reader.readAsDataURL(fileToExtract);
      
      } else {
        reject(
          new Error(
            "Your file is too large (" +
              fileToExtract.size / MAX_SIZE +
              " MB). Please upload a file < 1MB."
          )
        );
      }
    } else {
      reject(
        new Error("Your file type is not the right one (" + fileType + ").")
      );
    }
  });
};
