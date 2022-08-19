function extractFile(fileName) {
    let fileNameIndexStart = fileName.lastIndexOf("\\") + 1;
    let extStart = fileName.lastIndexOf(".") + 1;
    let fileNameIndexEnd = extStart - 1;
    let fileNames = fileName.substring(fileNameIndexStart, fileNameIndexEnd)
    let ext = fileName.substring(extStart)
    console.log(`File name: ${fileNames}`);
    console.log(`File extension: ${ext}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');
