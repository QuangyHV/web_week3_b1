function palindrome(str) {
    // Chuyển tất cả các ký tự trong chuỗi về chữ thường và loại bỏ ký tự không phải chữ hoặc số
    let str1 = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Đảo ngược chuỗi đã được xử lý và lưu vào biến str2
    let str2 = str1.split('').reverse().join('');
    
    // So sánh chuỗi gốc (str1) với chuỗi đảo ngược (str2)
    return str1 === str2 ? true : false;
  }
  
  palindrome("eye");