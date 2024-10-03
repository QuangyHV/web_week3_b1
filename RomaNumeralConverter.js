function convertToRoman(num) {
    let result = '';  // Biến chứa kết quả cuối cùng
    let romanNums = {
      M: 1000, CM: 900, D: 500, CD: 400,
      C: 100, XC: 90, L: 50, XL: 40,
      X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
  
    // Vòng lặp để duyệt qua từng giá trị trong đối tượng romanNums
    for (let val in romanNums) {
      // Trong khi giá trị num lớn hơn hoặc bằng giá trị của ký tự La Mã hiện tại
      for (let i = romanNums[val]; num >= i; num -= i) {
        result += val; // Thêm ký tự La Mã vào kết quả
      }
    }
  
    console.log(result); // In ra kết quả (số La Mã)
    return result; // Trả về kết quả
  }
  
  convertToRoman(36);