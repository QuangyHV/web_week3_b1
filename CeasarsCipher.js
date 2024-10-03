function rot13(str) {
    let codeArr = [];
    for (let i = 0; i < str.length; i++) {
      codeArr.push(str.charCodeAt(i)); // Lấy mã ASCII của từng ký tự và thêm vào mảng codeArr
    }
  
    let decodeArr = codeArr.map(function(code) {
      // Nếu ký tự thuộc khoảng từ 'A' đến 'M' (mã ASCII từ 65 đến 77)
      if (code >= 65 && code <= 77) {
        return code + 13; // Dịch chuyển 13 vị trí về phía trước trong bảng chữ cái
      } 
      // Nếu ký tự thuộc khoảng từ 'N' đến 'Z' (mã ASCII từ 78 đến 90)
      else if (code >= 78 && code <= 90) {
        return code - 13; // Dịch chuyển 13 vị trí về phía sau
      } 
      // Nếu ký tự không phải là chữ cái (vd: dấu cách, dấu chấm, số, v.v.)
      else {
        return code; // Giữ nguyên ký tự (không thay đổi)
      }
    });
  
    // Biến đổi mảng mã ASCII trở lại thành chuỗi các ký tự
    return String.fromCharCode(...decodeArr);
  }
  
  console.log(rot13("SERR PBQR PNZC")); // Kết quả: FREE CODE CAMP