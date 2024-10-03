function telephoneCheck(str) {
    // Kiểm tra định dạng đầu tiên: có thể có mã quốc gia, mã vùng trong dấu ngoặc, và số điện thoại không dấu gạch ngang
    if (/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)) {
      return true;
    }
    // Kiểm tra định dạng thứ hai: có mã quốc gia, mã vùng trong dấu ngoặc, và số điện thoại có dấu gạch ngang
    else if (/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)) {
      return true;
    }
    // Kiểm tra định dạng thứ ba: số điện thoại có thể có mã quốc gia và dấu gạch ngang
    else if (/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)) {
      return true;
    }
    // Nếu không khớp với bất kỳ định dạng nào, trả về false
    else {
      return false;
    }
  }
  
  telephoneCheck("555-555-5555");
  