function confirm() {
  let userName = document.getElementById("username").value;
  let passWord = document.getElementById("password").value;

  if (userName == "") {
    alert("Input your username");
  } else if (passWord == "") {
    alert("Input your password");
  } else {
    alert("Sign in sucessfully");
  }
}


// Bài 2 //

/*
- Khái niệm OOP: (Object Oriented Programming) 
  lập trình hướng đối tượng là một phương pháp lập trình dựa trên khái niệm về lớp và đối tượng. 
  OOP tập trung vào các đối tượng thao tác hơn là logic để thao tác chúng, giúp code dễ quản lý, tái sử dụng được và dễ bảo trì. 

  Mục tiêu của OOP là tối ưu việc quản lý source code, 
  giúp tăng khả năng tái sử dụng và tóm gọn các thủ tục đã biết trước tính chất thông qua việc sử dụng các đối tượng.

  

- Object - Đối tượng trong OOP bao gồm 2 thành phần chính:
  Thuộc tính (Attribute): là những thông tin, đặc điểm của đối tượng
  Phương thức (Method): là những hành vi mà đối tượng có thể thực hiện

- Class: Lớp là sự trừu tượng hóa của đối tượng. Những đối tượng có những đặc tính tương tự nhau sẽ được tập hợp thành một lớp. 
  Lớp cũng sẽ bao gồm 2 thông tin là thuộc tính và phương thức.

  Một đối tượng sẽ được xem là một thực thể của lớp.


- 4 tính chất của OOP:

1. Tính đóng gói (Encapsulation): 
    Tính đóng gói cho phép che giấu thông tin và những tính chất xử lý bên trong của đối tượng. 
    Các đối tượng khác không thể tác động trực tiếp đến dữ liệu bên trong và làm thay đổi trạng thái của đối tượng 
    mà bắt buộc phải thông qua các phương thức công khai do đối tượng đó cung cấp.

2. Tính kế thừa (Inheritance)
   Tính kế thừa cho phép xây dựng một lớp mới (lớp Con), kế thừa và tái sử dụng các thuộc tính, phương thức dựa trên lớp cũ (lớp Cha) đã có trước đó. 
    Các lớp Con kế thừa toàn bộ thành phần của lớp Cha và không cần phải định nghĩa lại. 
    Lớp Con có thể mở rộng các thành phần kế thừa hoặc bổ sung những thành phần mới.

3. Tính đa hình (Polymorphism)
    Tính đa hình trong lập trình OOP cho phép các đối tượng khác nhau thực thi chức năng giống nhau theo những cách khác nhau.

4. Tính trừu tượng (Abstraction)
    Tính trừu tượng giúp loại bỏ những thứ phức tạp, không cần thiết của đối tượng và chỉ tập trung vào những gì cốt lõi, quan trọng.

*/





