- Use case và kiến trúc liên quan đến thiết kế kỹ thuật như thế nào?
- Nguyên tắc thiết kế hướng đối tượng là gì?
- Tại sao lại thiết kế dựa vào giao diện?
- Thiết kế kỹ thuật cho các quy trình agile là gì?
- Làm thế nào để bạn xác định được các lớp, chức năng và thuật toán, đặc biệt là trong sơ đồ UML?
- Bạn lên kế hoạch như thế nào cho các thành phần có thể dùng lại?
- Làm thế nào để 1 ai đó sử dụng các tiêu chuẩn để thiết kế kỹ thuật?
- Các thiết kế kỹ thuật được sử dụng trong các dự án lớn và trong thế giới thực như thế nào?

Thiết kế kỹ thuật là một hoạt động kỹ thuật tuân theo kiến trúc đã lựa chọn và bao gồm tất cả cá khía cạnh của kỹ thuật tạo mã ngắn. Nó giải quyết các mục tiêu chính của việc thiết kế phần mềm (chương 17): đầy đủ, để hiểu, mô đun hoá, gắn kết, khớp nối, linh hoạt, mạnh mẽ, khả năng sử dụng lại, ẩn thông tin, hiệu quả và độ tin cậy cao. Chương này bắt đầu bằng cách thuật lại quy trình thiết kế kỹ thuật cho các thành phần đã được phát triển rồi, đặc biệt là use case của quy trình phân tích yêu cầu và thiết kế kiến trúc cấp cao (Phần 19.1).

Nói về tính đầy đủ thì thiết kế kỹ thuật cung cấp đầy đủ chi tiết cho các nhà phát triên để thực hiện các yêu cầu của ứng dụng. Đối với tính dể hiểu và tính mô đun hoá, các thiết kế hướng đối tượng xác định lớp, thuộc tính, phương thức của chúng.Nguyên tắc của việc thiết kế kỹ thuật hướng đối tượng sẽ được giới thiệu trong phần 19.3. Dạng này của ứng dụng cho phép chúng ta kiểm tra các thiết kế để có sự liên kết chặt chẽ với các thành phần cùng nhóm và liên kết yếu với các thành phần khác. Về tính linh hoạt, việc tái sử dụng các thành phần và ẩn thông tin sẽ được trình bày trong phần 19.4 và 19.6. Thiết kế kỹ thuật đòi hỏi sơ đồ tuần tự được phát triển từ use case (Phần 19.7), đây là nguồn chính cho việc xác định các lớp và phương thức. Chương kết thúc với các case study.

Phương pháp agile được giới thiệu trong chương 4 bắt đầu code mà không cần thiết kế kỹ thuật đầy đủ và có lẽ là không cần bất kỳ thiết kế kỹ thuật nào cả. Điều này có nghĩa là thiết kế kỹ thuật được hình thành trong đầu của các lập trình viên và thương được ghi lại trong code. Tuy nhiên, thiết kế kỹ thuật sẽ tiếp tục còn cần thiết đồi với các nhà phát triển agile, chúng ta sẽ thảo luận nó trong phần 19.8.

19.1 Liên hệ giữa use case, kiến trúc và thiết kế kỹ thuật

Mối liên hệ giữa use case, kiến trúc và thiết kế kỹ thuật có thể được hiểu tương tự như quy trình thiết kế một cây cầu. Use case sẽ là một phần của những yêu cầu đối với cây cầu (xem ví dụ về use case ở hình 19.2). Dựa trên những yêu cầu, kỹ sư sau đó sẽ chọn kiến trúc bằng cách lùi lại và nhìn toàn cảnh. Thông thường sẽ có nhiều kiến trúc. Trong trường hợp này kiến trúc treo đã được lựa chọn. Quá trình này được mình hoạ trong hình 19.2.

Một khi kiến trúc đã được chọn, các kỹ sư có thể phát triển bản thiết kế kỹ thuật để khới động các use case với kiến trúc đã chọn. Điều này được đề xuất trong hình 19.3.

Trong phần mềm cũng tương tự như ví dụ về cây cầu, mỗi giai đoạn tương ứng với tích luỹ thêm các lớp được thể hiện trong hình 19.2 và 19.3. Trong bước 1 use case được chỉ định là 1 phần của yêu cầu. Trong bước 2 các usecase này cùng với các nguồn khác được sử dụng để xác định các lớp domain. Ở bước 3, chúng ta phát triển kiến trúc phần mềm như mô tả ở chương 18. Bước 4, chúng ta phát triển thiết kế kỹ thuật bằng các xác định các lớp thiết kế. Chúng ta bắt đầu với lớp Domain (ví dụ: Phương tiện, đường) và thêm các lớp thiết kế bổ sung (ví dụ: thành cầu, cáp) để hoàn thành thiết kế. Sau đó chúng ta kiểm tra kiến trúc và thiết kế kỹ thuật hỗ trợ các use case yêu cầu. Tương tự cầu, chúng ta kiểm tra xem liệu xe ô tô có thể sủe dụng thiết kế cầu để đi từ Green Hill tới Jones Hollow như đã xác định từ trước. Đối với thiết kế phần mềm, chúng ta sẽ kiểm tra xem rằng những lớp và phương thức đã được xác định với bản thiết kế kỹ thuật có khả năng thực thi các use case yêu cầu hay không.

19.2 Bản đồ đường đặc trương cho quá trình thiết kế kỹ thuật

Thiết kế kỹ thuật bắt đầu với kết quả của giai đoạn chọn kiến trúc và kết thúc bằng một kế hoạch chi tiết hoàn chỉnh cho giai đoạn lập trình. Hình 19.4 trình bày một quy trình điển hình về các bước để thực hiện thiết kê kỹ thuật. Sự thật là không có một cách tiêu chuẩn phổ biên nào về quá trình này và trong thực tế chúng ta thường quay lại thiết kế khi đối mặt với sự thật của việc biến một thiết kế thành hiện thực. Quy trình agile được giới thiệu ở phần 19.8 và chương 4 là ví dụ rõ nhất cho điều này.

Bước 2 của hình 19.4 tạo các lớp 1 mặt liên kết với kiến trúc 1 mặt liên kết với các lớp domain, như được mình hoạ trong phần trước. Các mẫu thiết kế có thể giúp làm phần này cho các thiết kế phần mềm. Chúng tôi thường bắt đầu quá trình thiết kế kỹ thuật với những phần thiết kế mà phải được thực hiện, đến những cái có thể hoặc có nhiều nguy cơ nhất. Ví dụ, trong việc thiết kế Encounter chúng tôi có thể xem xét rủi ro bên trong các lớp đã được mô đun hoá (tất cả các ký tự trong gói, vv). Điều này cần được giải quyết càng sớm càng tốt bằng cách xác định các chi tiết về phương thức giao diện để chúng ta có ý tưởng về cách thức mô đun hoá hoạt động. Nếu việc sử dụng mẫu thiết kế State đưọc xem là rủi ro thì chúng to sẽ xác định chi tiết trước.

Bước 3 của hình 19.4 bao gồm kiểm tra xem chúng tôi có 1 bản thiết kế hoàn chỉnh hay không. Nó cần bao gồm việc đảm bảo rằng mô hình đối tượng có thể hổ trợ được cho use case. Bước 6 tiếp tục thực hành tìm cách kiểm thử ngay khi một thành phần được xác định.

Trong phát triển dựa trên kiểm thử,  thường được kết hợp với phát triển agile, bước 6 và 7 được thực hiện trước một vài (có thể là tất cả) các bước từ 1 đến 5, và việc triển khai chúng được bao gồm trong quy trình. Nói cách khác, những bộ test được phát triển sớm nhất có thể, sau đó thiết kế, và code tạo ra để đáp ứng những bộ kiểm thử đó. Bất kể phương pháp nào được sử dụng, tạo ra bộ kiểm thử siwms sẽ thường là ý tưởng tuyệt vời.

19.3 Quy tắc thiết kế hướng đối tượng

Martin đã xác định 5 nguyên tắc để thiết kế lớp cho phần mềm hướng đối tượng đi đôi với phát triển nhanh. Nó được tóm tắt trong hình 19.5.

Những nguyên tắc này khá tương tự hoặc giống với một vài cái mà chúng ta đã thảo luận. 

Nguyên tắc trách nhiệm duy nhất nhấn mạnh sự cần thiết của việc các lớp sẽ có một trách nhiệm rõ ràng ví dụ như "đại diện cho dữ liệu khách hàng" hoặc "đại diện cho đơn hàng" thay vì các chủ đề rộng hơn như "tất cả những gì biết về khách hàng và sở thích của họ" hay "sở thích cắm trại". Nói cách khác, lớp nên thể hiện mức độ gắn kết cao. Khi mà lớp chỉ có duy nhất một trách nhiệm thì nó sẽ dể dàng duy trì và sử dụng lại.

Nguyên tắc đóng mở (OCP) phát biểu rằng các mô đun nên mở cho việc mở rộng và đóng cho những sự sửa đổi. Điều này nghĩa là nếu một mô đun đã tồn tại cần hỗ trợ các yêu cầu bổ sung thì mã code ban đầu vẫn được giữ nguyên. Nó sẽ không cần phải sửa đổi. Nói cách khác, chức năng mới nên được triển khai bằng code mới thay vì sửa code cũ. Xem xét một ví dụ trong Listing 19.1, như được mô tả trong [1]. Mã này thoả mãn yêu cầu vẽ một tập hợp các hình bao gồm hình tròn và hình vuông. Tuy nhiên mã này vi phạm OCP vì các hình dạng khác với hình tròn và hình vuông sẽ không thể vẽ được mà không sửa đổi code không đơn giản chỉ là thêm vào thân của function.

Một cách phổ biến để tránh sửa đổi và tuân thủ OCP là sử dụng tính kế thừa và đa hình. Listing 19.2 cho thấy cách này được thực hiện trong một phiên bản mới của hàm drawAllShapes(). Trong phiên bản mới này, các hình như Circle, Square được kế thừa từ lớp cơ sở là Shape. Khi một Shape được lấy ra từ vector, phương thức draw() đa hình của nó sẽ được gọi để vẽ hình dạng của nó. Điều này có nghĩa là mỗi loại hình sẽ biết cách để tự vẽ nó. Nếu cần thêm hình dạng mới thì không cần sửa lại hàm drawALlShapes() - nó sẽ tự động gọi phương thức draw() của hình dạng mới đó khi nó được lại ra khỏi vector.

Nguyên tắc Thay Thế Lít Kốp (LSP) phát biểu rằng bất kỳ đoạn code nào mà có tham chiếu đến 1 thể hiện của một lớp cơ sở cũng phải hoạt động chính xác nếu như thay thế nó bằng một thể hiện của lớp dẫn xuất. Nói cách khác là một lớp dẫn xuất phải thực hiện đúng semantics của lớp cơ sở. Nếu nguyên tắc này bị vi phạm thì mỗi khi một lớp dẫn xuất được tạo ra code phải sửa đổi để tham chiếu tới một lớp mới, vi phạm OCP.

Nguyên tắc đảo ngược phụ thuộc (DIP) liên quan đến các chi tiết ẩn. Nó yêu cầu chúng ta thiết kế các mô đun cấp cao mà không bị phụ thuộc vào các mô đun cấp thấp. Thay vào đó mỗi mô đun nên phụ thuộc vào lớp trừu tượng hay interface. Điều này làm cho các mô đun có thể hiểu và có thể sử dụng được chính nó. Xem ví dụ được trình bày bởi Martin [3].

Mô đun Copy phụ thuộc vào các cấp độ thấp hơn - đọc bàn phím - ghi máy in, gây khó khăn khi sử dụng lại như mô đun Copy cho mục đích chung. Băng cách áp dụng DIP, chúng tôi trừu tượng hoá các mô đun đọc và ghi như trong hình 19.7. Bây giờ mô đun Copy chỉ phụ thuộc vào lớp trừu tượng Reader và Writer, làm cho nó linh hoạt và dể đóng gói hơn. Nếu các loại Reader và Writer mới được tạo ra thì mô đun Copy sẽ không bị ảnh hưởng.

Nguyên tắc tách nhỏ interface cho phép chúng ta thu thập các interface liên quan vào các interface riêng thay vì trộn các phương thức không liên quan. Điều này được rút ra từ các bài học về thiết kế thành phần nơi mà chúng ta đã học cách để đóng gói các bộ phương thức trong các bộ nhỏ có thể quản lý được, bằng cách giữa các interface nhỏ bạn có thể tăng sự gắn kết giữa chúng.

19.4 Thiết kế dựa vào interface

Ý tưởng của việc thiết ké dựa vào interface giống như việc bạn sử dụng hợp đồng. Các thành phần của chương trình sẽ cung cấp chức năng (Ví dụ như lớp khách hàng) đảm bảo để có các chức năng của interface với tên riêng, loại tham số, and loại trả về (ví dụ void bill(void) và boolean printAccount(String accoutType)). Các thành phần của một chương trình có sử dụng chức năng này có thể được thiết kế mà không cần biết các chức năng này hoạt động như thế nào, nhưng gì họ cần biết là sử dụng nó như thế nào. Chúng ta đã thảo luận khái niệm này trong bối cảnh của mẫu thiết kế nơi mà các mẫu này có khách hàng. Mẫu thiết kế Facade cũng là một cách cung cấp interface rõ ràng tới một gói lớp.

Thiệt kế dựa vào interface có nhiều loại. Một là sử dụng lớp trừu tượng. Ví dụ, nếu bạn code về động vật có vú thì thì sau đó chúng ta sẽ cố gắng code nó cho một đối tượng động vật duy nhất. Nói cách khác, chúng ta sẽ cố để chỉ sử dụng nó cho interface Động vật. Điều này làm cho việc thiết kế sẽ linh hoạt hơn.

Một ví dụ nữa là giả sử chúng ta đang viết code về khách hàng. Điều này có thể hiểu là viết code dựa trên interface khách hàng. Chúng ta có thể xem xết việc sử dụng lớp trừu tượng Khách hàng, lớp này có thể có một lớp con không trừu tượng là Khách hàng Thường như hình 19.8. Thiết kế này linh hoạt hơn là việc viết code dựa trên một lớp không trừu tượng như Khách hàng Thường, bởi vì chúng ta có thể dể dàng thêm nhiều loại khách  hàng khác vào hơn, như Khách hàng Thân thuộc, với các loại phương thức bill() khác nhau mà không cần thay đổi code trong lớp Khách hàng. Việc chia thành lớp trừu tượng và các lớp con không trừu tượng là đặc trưng của nhiều mẫu thiết kế.

Riêng với Java, một từ khoá riêng của Java cung cấp đó là "Interfaces" dành cho vai trò interface được mô tả ở trên. Cái này chỉ cần một vài ký hiệu nhất định (tên, kiểu trả về, kiểu tham số). Không giống như kế thừa trong Java, một lớp có thể triển khai nhiều interface. Các ký hiệu UML cho một interface là hình chữ nhật nét đứt và một hình tam giác nét đứt thay thế cho các hình nét liền.

19.5 Xác định lớp, chức năng và thuật toán.

Mục tiêu của việc hoàn thành thiết kế kỹ thuật là cung cấp một bản kế hoạch chi tiết để một phần mềm có thể được xây dựng lên từ đây. Một bản kế hoạch nhà tốt sẽ làm cho những người xây dựng ít nghi ngờ nhất về những ý định của nhà thiết kế, và nó cũng đúng với thiết kế kỹ thuật cho phần mềm. Hình 19.9 mô tả các bước điển hình trong việc áp dụng thiết kế kỹ thuật cho mỗi lớp, và tiếp theo sẽ giải thích chi tiết cho từng bước.

Một sơ đồ lớp đầy đủ chi tiết bao gồm tất cả các thuộc tính, tên hoạt động, ký hiệu, tình trạng hiển thị, kiểu trả về,... Chức năng truy xuất thường được bỏ qua hoặc không tuỳ chọn (ví dự như getSize(), getName()), bởi vì những cái này có thể suy ra được từ các thuộc tính tương ứng. Các công cụ UML cho phép và thiết kế để ngăn chặn (ví dụ: không hiển thị) các yêu tố nhất định của một hình. Ví dụ như phần "responsibility" hoặc kiểu dữ liệu. Nhiều tool còn cho phép nhà thiết kế chỉ nhìn thấy class và các mối quan hệ để có thể có một cái nhìn tổng quát hơn.

Xác định các lớp là thông qua Ngôn ngữ định nghĩa giao diện CODBA (IDL). Đây là một định dạng văn bản tiêu chuẩn để xác định các interface được tạo ra từ các các lớp, thuộc tính và các chức năng của chúng. Đối với một IDL cụ thể, xem [4]

Trong một vài tổ chức, các thiết kế kỹ thuật được làm bằng cách cung cấp code thay vì UML. Điều này đôi khi đúng nếu cần đầy nhanh tốc độ. Ưu điểm của cách này là không cần chuyển lại các thông số kỹ thuật thành code. Còn nhược điểm là code thì khó đọc hơn văn xuôi thông thường. Sau đó các hàm trong mẫu code đó sẽ được thêm nôi dung trong quá trình triển khau bởi các lập trình viên. 

19.5.1 Điều kiện cần, điều kiện đủ, bất biến

Một cách hiệu quả để xác định các chức năng là bằng các điều kiện cần và điều kiện đủ. Điều kiện cần xác định các mối quan hệ giữa các biến và hằng được giả sử là tồn tại trước khi hàm thực hiện, điều kiện cần để xác định các mối quan hệ bắt buộc sau khi thực hiện hàm. Ví dụ, hàm withdraw(int withdrawalAmountP) của lớp Account có thể được xác định như trong hình 19.10. Một ví dụ khác về điều kiện cần là một tham số age mà phương thức giả định là tuổi phải lớn hơn 0. Những ảnh hưởng tới một phương thức là điều kiện đủ của nó. Chúng là lý do chính của phương thức, và cũng phải được xác định. Theo kinh nghiệm của các tác giả, các kỹ sư phần mềm yêu cầu đào tạo khá nhiều về khả năng xác định chính xác các điều kiện cần và điều kiện đủ, như trong Hình 19.10.

Các bất biến của một phương thức là các xác nhận vừa là điều kiện cần vừa là điều kiện đủ. Chúng là một cách để duy trì sự kiểm soát đối với hành vi của các hàm. Chúng xác đinh các mối quan hệ không được thay đổi, điều này rất tốt trong môi trường phần mềm, nơi mà những sự thay đổi thường rất khó kiểm soát. Một ví dụ từ Encounter là bất biến có thể có trong phương thức adjustQuality()

Bất biến: Tổng các giá trị của chất lượng.

Nói cách khác, khi một giá trị của một chất lượng bị thay đổi bởi adjustQuality(), các giá trị còn lại sẽ thay đổi sao cho tổng không thay đổi.

19.5.2 Biểu diễn thuật toán bằng sơ đồ hoạt động và mã giả

Nó rất hữu ích để xác định các thuật toán không cần thiết tại thời điểm thiết kế kỹ thuật. Ưu điểm của việc này là các kỹ sư có thể kiểm tra các thuật toán một cách riêng biệt mà không cần lập trình phức tạp, do đó kiểm tra được nhiều thiếu sót quan trọng trước khi chúng thành các lỗi lập trình. Đối với các hàm càng quan trọng thì phương pháp này càng quan trọng. Các phương pháp với sự phân chia phức tạp là các ứng cử viên cho sơ đồ hoạt động ("sơ đồ nâng cao"). Sơ đồ hoạt động được mô tả trong Chương 16.

Mã giả là một phương tiện để thể hiện một thuật toán bằng văn bản mà không cần ngôn ngữ lập trình cụ thể nào. Ví dụ, mã giả cho bộ điều khiển X-quang tự động giả định được hiển thị trong Hình 19.11. Một lợi thế của mã giả là dễ hiểu nhưng lại có thể được thực hiện đầy đủ và chính xác để biểu diễn các thuật toán. Một lợi thế khác là các thuật toán có thể được kiểm tra tính chính xác mà không cần ngôn ngữ lập trình. Ưu điểm thứ ba là tỷ lệ lỗi trong mã giả có thể được thu thập và sử dụng làm công cụ dự đoán tỷ lệ lỗi trong sản phẩm bằng cách sử dụng lịch sử lỗi.

Một số tổ chức sử dụng mã giả đã làm chú thích trong code. Sau đó dùng tool để trích xuất mã giả từ code. Ví dụ, bằng cách sử dụng "//p" để mở đầu các câu lệnh mã giả, code có thể thực hiện mã giả được trích dẫn ở trên - xem Hình 19.12.

Mỗi sơ đồ hoạt động và mã giả đều có những ưu điểm được liệt kê trong Hình 19.13 và 19,14. Việc có sử dụng chúng hay không phụ thuộc vào các yếu tố cụ thể trong từng ứng dụng. Một số nhà phát triển thường né tránh việc dùng sơ đồ hoạt động kiểu cũ, nhưng sơ đồ hoạt động và mã giả có thể gây rắc rối cho các phần được chọn của các ứng dụng, nơi chúng giúp tạo ra các sản phẩm chất lượng tốt hơn.

19.6 Sử dụng lại các thành phần

Hầu hết các ngành kỹ thuật (điện, cơ khí, v.v.) đều dựa vào việc sử dụng lại các thành phần có thể mua lẻ được. Ví dụ, nhà thiết kế cầu cố gắng sử dụng dầm chữ I tiêu chuẩn. Việc áp dụng rộng rãi các mô hình đối tượng và các thành phần khác đã giúp thúc đẩy việc tái sử dụng phần mềm. Do số lượng lớn các phương thức được đóng gói với các lớp, chức năng mà chúng ta cần thường tương đối dể dàng để biết nó ở đâu. Việc sử dụng các thư viện Microsoft, Visual Basic controls, Microsoft Assemblies, Java Beans và Interfaces trong Java là các ví dụ về tái sử dụng mã.

Framework cái mà đã được thảo luận trong chương trước về kiến ​​trúc, là các bộ package của các thành phần được thiết kế để tái sử dụng. Chúng tôi phát triển các framework để hỗ trợ các kiến ​​trúc ứng dụng và vì vậy chúng có thể tái sử dụng một cách hiệu quả. Java core APl là một ví dụ khác về framework được sử dụng rộng rãi. Java Bean cung cấp các thành phần có thể tái sử dụng cho các ứng dụng Java. Chúng bao gồm Graphics Beans và "enterprise" beans, để đóng gói các nhiệm vụ của công ty như là truy cập cơ sở dữ liệu. Ngoài ra, những lợi thế có được khi là các lớp, beans tuân theo các tiêu chuẩn khiến chúng có khả năng thao túng trong môi trường phát triển. Các chương trình dựa trên web như tập lệnh JavaScript và CGI thường được sử dụng lại.

Ở một cấp độ khác, Thư viện Mẫu Tiêu chuẩn (STL) cung cấp khả năng mix-and-match các thuật toán tiêu chuẩn như sắp xếp và tìm kiếm. STL có thể áp dụng cho nhiều cấu trúc dữ liệu và cho các đối tượng của hầu như ở bất kỳ lớp nào. Tóm lại, một thị trường thành phần đã xuất hiện và đang phát triển liên tục.

Nghiên cứu tình huống trong video game mà Encouter sẽ được trình bày ở cuối chương này chứa các ví dụ về việc tái sử dụng trong doanh nghiệp: trong trường hợp này là một doanh nghiệp phát triển trò chơi. Để tăng hiệu quả về chi phí và tính cạnh tranh, công ty tận dụng phần mềm của mình càng nhiều càng tốt trong các dự án. Ví dụ, thay vì đầu tư tài nguyên để phát triển một lớp cho nhân vật cho riêng Encounter, họ cố gắng phát triển thành một lớp nhân vật chung trong trò chơi và sử dụng một lớp con cho nhân vật của Encquer. Lớp nhân vật chung trong trò chơi có thể được sử dụng lại cho các trò chơi khác. Ý tưởng này được mở rộng nghiên cứu thành game framework bao gồm một số lớp liên quan, là bối cảnh chung để sử dụng lại.

Tìm thấy một thành phần có thể sử dụng được trong ứng dụng, vậy có nên sử dụng nó hay không? Các yếu tố điển hình trong việc đưa ra quyết định này được trình bày sau đây và chúng sẽ gợi ý những yếu tố cần được tính đến trong việc tự tạo ra các thành phần để sử dụng lại.

- Thành phần có được ghi chép kỹ lưỡng như phần còn lại của ứng dụng hay không? Nếu không thì nó có nên sử dụng nó hay không?
- Cần bao nhiêu tùy chỉnh thành phần và/hoặc tuỳ chỉnh ứng dụng?
- Thành phần này đã được thử nghiệm ở cùng cấp độ hoặc rộng hơn so với phần còn lại của ứng dụng chưa? Nếu không thì nó có nên sử dụng nó hay không?

Để quyết định việc có sử dụng lại các thành phần có kích thước lớn hay không, thì nên làm ra một bảng so sánh chi phí, tương tự như trong Chương 8 nơi hiển thị ví dụ tự làm so với mua.

19.7 Sơ đồ tuần tự và sơ đồ luồng dữ liệu trong thiết kế kỹ thuật

Một số thiết kế kỹ thuật được truyền đạt hiệu quả nhất thông qua các sơ đồ tuần tự chi tiết hoặc sơ đồ luồng dữ liệu chi tiết. Hình 19.15 và 19.16 cung cấp hướng dẫn về cách tạo ra một sơ đồ tuần tự và sơ đồ luồng dữ liệu để hoàn thành thiết kế kỹ thuật tương ứng. Dưới đây là chi tiết và ví dụ:

19.7.1 Sơ đồ tuần tự chi tiết

Nhớ lại rằng use case có thể được sử dụng để thể hiện các yêu cầu và chúng tôi cũng sử dụng chúng để xác định các lớp domain chính cho ứng dụng. Đối với giai đoạn thiết kế kỹ thuật, chúng tôi cung cấp các lớp với các phương thức được tham chiếu trong sơ đồ tuần tự. Ví dụ, sơ đồ trình tự cho "Enconter Foreign Charactor" được hiển thị trong Hình 19.8, hiển thị các tin nhắn qua lại giữa các đối tượng trong thiết kế phần mềm. Lý do chọn chức năng này là:

- 1. ForeignCharacter là có chức năng display. Chúng tôi sẽ triển khai nó với phương thức display(). (Bởi vì tất cả các nhân vật sẽ cần được hiển thị, nên chúng ta có thể đảm bảo yêu cầu này bằng cách cung cấp cho lớp cơ sở GameCharactor() một phương thức display().) Sơ đồ tuần tự hiển thị rằng EncouterGame đang tạo ra một nhân vật (bước 1.2) và có đính kèm theo nhân vật đó, sai đó gọi display(). Một cam kết được tạo ra và một thiết kế tốt là một thiết kế nắm bắt được điều này bằng cách tạo ra một đối tượng cam kết. Điều này được minh họa trong Hình 19.17.
- 2. Bước này trong use case chỉ ra rằng chúng ta cần một phương thức exec() trong Cam kết.
 - 2.1. Bước này yêu cầu Freddie và nhân vật người chơi chính có thể thay đổi giá trị chất lượng của nó. Vì khả năng này là phổ biến cho tất cả các nhân vật Encounter, chúng tôi cung cấp lớp EncounterCharactor cơ sở với một phương thức setQuality().
- 3. Bước này yêu cầu kết quả của cam kết được hiển thị. Hai bước con dưới đây sẽ hình thành cách để làm điều này:
 - 3.1. Cam kết đầu tiên tạo ra một đối tượng EngagementDisplay.
 - 3.2. Bây giờ chúng ta thực hiện hiển thị cam kết bằng cách gọi displayResult().

Bởi vì những phương thức yêu cầu hiện thực những use case này đã được biết đến , chúng ta có thể đưa chúng vào mô hình lớp, như trong Hình 19.19. Tiếp tục quá trình này, mô hình lớp và mô hình use case (trong dạng sơ đồ tuần tự) được hoàn thành chi tiết, như trình bày trongn case study. Mô hình state (nếu có) cũng phải được hoàn thành chi tiết. Một sơ đồ luồng dữ liệu là một mô hình có thể hữu ích khác và sẽ được thảo luận tiếp theo.
 
19.7.2 Mô hình luồng dữ liệu chi tiết

Để liên kết các mô hình luồng dữ liệu với các lớp, chúng ta có thể ánh xạ từng phần tử xử lý vào một phương thức của một lớp. Hình 19.20 cho thấy chế độ xem cấp cao của sơ đồ luồng dữ liệu cho ứng dụng ngân hàng ATM. Mô hình luồng dữ liệu có thể được rút ngắn. Ví dụ, Hình 19.21 mở rộng các phần tử xử lý từ DFD trong Hình 19.20.

Sự thu gọn cho phép chúng ta có một cái nhìn cao cấp hơn, tiếp theo giai đoạn kế tiếp có chứa nhiều chi tiết mà chúng ta hy vọng. Để không làm người đọc choáng ngợp. Mỗi phần tử xử lý được mở rộng thành DFD chi tiết hơn và quá trình mở rộng này được tiếp tục cho đến khi đạt được các phần tử xử lý ở mức thấp nhất. Cái sau thường là các hàm riêng lẻ, có thể thuộc các lớp khác nhau. Ví dụ, hàm getDeposit () được mở rộng thành ba hàm (lấy mật khẩu, xác minh nó và hiển thị). Hai trong số này tương tác với các cửa hàng dữ liệu (nhật ký giao dịch cục bộ, danh sách người dùng có vấn đề và mẫu để hiển thị màn hình) không được hiển thị trong DFD cấp cao. Lưu ý rằng các lối vào và lối ra dữ liệu từ các bản mở rộng chi tiết khớp với các lối vào trong các phiên bản mà chúng được mở rộng.

DFD không hữu ích cho tất cả các ứng dụng. Ví dụ, họ không thêm nhiều vào Encounter case study.

19.8 Thiết kế kỹ thuật và quy trình agile

Các quy trình agile được mô tả trong Chương 4 và được đề cập trong suốt cuốn sách này thường nhấn mạnh việc code và đặt mức ưu tiên thấp hơn cho tài liệu. Sau này còn bao gồm thêm thiết kế kỹ thuật. Một cách giải thích cực đoan cho điều này là thiết kế kỹ thuật chiếm rất ít, nhưng một cách giải thích chuẩn hơn là một quy trình agile sẽ tạo ra các thiết kế kỹ thuật chỉ cho những phần của ứng dụng mà có lợi khi nỗ lực sản xuất chúng. Một ví dụ là một thuật toán phức tạp nhưng quan trọng. Mặt khác, một phát triển non-agile có thể ghi lại mọi phương pháp. Đối với những dự án lớn, việc đưa ra phán quyết của hàng trăm kỹ sư phần mềm về việc liệu các thiết kế kỹ thuật có nên được ghi lại hay không có thể không được các nhà quản lý dự án ủng hộ.

Rõ ràng là các kỹ sư phần mềm không nên tham gia vào các hoạt động với lợi ích không đủ. Tuy nhiên, một vấn đề làm cho điều này chưa rõ ràng là liệu người ta đánh giá lợi ích trong ngắn hạn hay dài hạn. Tài liệu thiết kế tốt, chi tiết của một lớp hỗ trợ mã (có thể là nhận xét) sẽ giúp đỡ rất nhiều cho người bảo trì. Nó cũng sẽ phải được cập nhật bởi các nhà bảo trì. Đây có lẽ là một lợi ích lâu dài và không rõ ràng trong ngắn hạn.

19.9 Thiết kế trong quá trình phát triển

Nhớ lại rằng cách tiếp cận phát triển thống nhất của Jacobson và cộng sự, được mô tả trong Chương 3, các nhóm lặp lại thành các mục "Khởi động", "Phát sinh", "Xây dựng" và "Chuyển đổi" (xem Hình 19.22). Thiết kế diễn ra trong quá trình "Phát sinh" nhưng chủ yếu nó lại diễn ra trong các lần "Xây dựng"lặp đi lặp lại. Ý tưởng là hầu hết các yêu cầu sẽ được thu thập bởi các giai đoạn đó. Giai đoạn "Phân tích" thường được xác định là một phần của quá trình thác nước. So với thuật ngữ của cuốn sách này, giai đoạn Phân tích bao gồm một phần phân tích yêu cầu và một phần lựa chọn kiến ​​trúc. Quá trình thống nhất khuyến khích ba loại ("bản mẫu") của các lớp ở cấp độ phân tích: thực thể, ranh giới và các lớp điều khiển; trong khi không có hạn chế như vậy đối với các lớp thiết kế. Các lớp thực thể thể hiện bản chất của khái niệm và không có khả năng thay đổi theo thời gian hoặc giữa các ứng dụng. Các lớp ranh giới giao tiếp với các đối tượng thực thể và các lớp điều khiển chứa các phương thức liên quan đến các đối tượng thực thể nhưng thường đặc biệt đối với ứng dụng mà lớp thực thể đang được sử dụng. Các lớp ranh giới thường giống như đối tượng Người hòa giải trong mẫu thiết kế Người hòa giải được mô tả trong Chương 16. Quy trình hợp nhất thúc đẩy các công cụ trực quan để thiết kế. Một ví dụ về điều này là công cụ Rational Rose được bán bởi IBM. 

19.10  IEEE Standard 890 cho thiết kế chi tiết

Nhớ lại tiêu chuẩn IEEE 1016-1998 cho Tài liệu thiết kế phần mềm được trình bày trong Chương 18 về kiến ​​trúc phần mềm, như trong Hình 19.23. Định dạng này cho phần thiết kế kỹ thuật của tài liệu này bao gồm việc chỉ định mô tả lần lượt từng mô-đun (package), với mô tả chi tiết của từng phần dữ liệu. Đối với thiết kế OO, cái sau có thể được thay thế bằng một mô tả chi tiết của từng lớp.

19.11 Cập nhật một dự án với thiết kế kỹ thuật

Khi một thiết kế kỹ thuật có trong tay, kế hoạch dự án có thể được thực hiện cụ thể hơn trong một số khía cạnh. Cụ thể, ước tính chi phí có thể được thực hiện chính xác hơn nhiều, lịch trình có thể được chia thành các nhiệm vụ và các nhiệm vụ có thể được phân bổ cho các cá nhân. Hình 19.24 bao gồm hầu hết các cập nhật quan trọng sẽ được thực hiện khi thiết kế kỹ thuật hoàn tất.

Vì chúng ta có thể ước tính số lượng và kích thước của các phương thức liên quan đến ứng dụng bằng cách sử dụng các thiết kế kỹ thuật, nên có thể ước tính chính xác hơn về quy mô dự án. Như được mô tả trong Chương 8, chi phí dự án có thể được suy ra từ kích thước. Hình 19.25 cho thấy một cách để thực hiện điều này.

Mô hình COCOMO bây giờ có thể được sử dụng lại để tinh chỉnh ước tính thời gian công việc. Tốt nhất là sử dụng dữ liệu cá nhân để ước tính LOC cho các công việc rất nhỏ và nhỏ như vậy. Trong trường hợp không có các dữ liệu này, bộ phận, nhóm hoặc dữ liệu công ty có thể được sử dụng. Mặt khác, bảng của Humphrey (Hình 19.26) [6] có thể được áp dụng một cách hữu ích. Hình 19,26 áp dụng cho C ++ LOC trên mỗi phương thức. Trung bình, Java và C ++ yêu cầu cùng số lượng LOC để thực hiện một chức năng tương tự [7,8].

Phương pháp tính toán thực hiện tính toán số, phương pháp dữ liệu thao tác dữ liệu (ví dụ: định dạng lại), phương pháp logic bao gồm chủ yếu là phân nhánh; phương pháp thiết lập khởi tạo tình huống, phương pháp văn bản thao tác văn bản. Ước tính cho các phương pháp kết hợp một vài trong số này có thể được tính bằng cách tính trung bình. Ví dụ, một phương pháp ngoại lệ ("trung bình") thực hiện các phép tính nhưng cũng có một thành phần logic đáng kể có thể được ước tính là có (11,25 + 15,98) / 2 = 13,62 dòng code.

Các mô tả như Rất nhỏ và Nhỏ là "mơ hồ" ở chỗ chúng mô tả các phạm vi thay vì số lượng chính xác. Các phạm vi này có thể chồng lấp, trong trường hợp đó có thể sử dụng trung bình các giá trị bảng tương ứng. (Đây thực sự là một sự đơn giản hóa của sự mơ hồ, nhưng phù hợp với mục đích của chúng tôi.) Mô tả mơ hồ là thực tế bởi vì chúng dễ hiểu. Chúng có thể được thực hiện chính xác hơn bằng cách phân loại với phân phối bình thường, như trong Hình 19.27.

Trung bình, khoảng 38% của các phương pháp nên được phân loại là "trung bình", 24% "nhỏ" và 7% "rất nhỏ" như minh họa trong Hình 19.27. Những con số này có được từ thực tế là khoảng 38% của các giá trị trong phân phối bình thường nằm trong một nửa độ lệch chuẩn của giá trị trung bình. Về mặt thực tế, ví dụ, nếu phần nhỏ của các phương thức bạn ước tính là "rất lớn" khác với 7%, thì bạn nên hài lòng rằng ứng dụng của bạn thực sự có số lượng phương thức rất lớn khác thường. Nếu không, bạn nên xem lại ước tính của mình.

Ví dụ, hãy ước tính kích thước của phương thức execute() của lớp Cam kết. Phương pháp này liên quan đến việc tính toán lại các giá trị chất lượng, là cơ chế thiết yếu để thực hiện quy trình cam kết. Vì lý do này, chúng ta có thể phân loại phương thức execute() thành "phép tính". Kích thước của phương thức execute() không đặc biệt đáng chú ý, vì nó bao gồm một tính toán khá đơn giản của các giá trị, vì vậy chúng tôi sẽ phân loại nó là "trung bình". Do đó, đóng góp ước tính của execute() là 11.25 LOC.

Một tổ chức cấp 5 (xem Chương 5 về Mô hình trưởng thành khả năng) thường sẽ vẽ các ước tính kích thước phương pháp theo các kích thước thực tế để cải thiện quy trình ước tính này. Trong nghiên cứu trường hợp, những ước tính này được áp dụng cho Encounter video game.

19.12 Case study: Thiết kế kỹ thuật của Encounter

Phần tiếp theo là thiết kế kỹ thuật cho Encounter,  dựa trên kiến ​​trúc được chỉ định trước đó trong cuốn sách này và sử dụng tiêu chuẩn IEEE. Mỗi use case được thực hiện như một sơ đồ tuần tự bằng cách quyết định, đối với mỗi bước của use case, đối tượng nào sẽ bắt đầu và nên thực hiện bước công việc liên quan. Các mô hình lớp nên chứa các lớp xuất hiện trong sơ đồ tuần tự.

	6. Thiết kế kỹ thuật trong framework game nhập vai
	 
	 6.1 Module thiết kế kỹ thuật
	  
	  Chú ý cho sinh viên: các phần này cung cấp tất cả các chi tiết không cần thiết trên mỗi mô-đun được mô tả trong Phần 3.1 trong ổ SSD này cho game framework
	  
	   6.1.1 Package game nhập vai
	   
	   Tất cả các sự kiện chuột đều được lắng nghe bởi đối tượng của lớp RPGMouseEventListener kế thừa từ MouseListener như trong hình 19.28. Mỗi đối tượng cần bắt sự kiện từ chuột yêu cầu một đối tương RPGame để xử lý sự kiện. RPGame truyền xử lý tới handleEvent() của đối tượng tập hợp lại là GameState. Sơ đồ tuần tự cho cái này được trình bày trong hình 19.29. Đối với bản phát hành hiện tại, các phương thức là tầm thường hoặc được hiển thị trong hình 19.29
	   
	   Mã giả cho các phương thức được chọn trong các lớp đã chọn có thể được bao gồm ở đây. Ngoài ra, các trường hợp sử dụng chi tiết có thể được bao gồm. Vì các phương thức và chi tiết của chúng vẫn là một hoặc hai dòng trong trường hợp này, nên việc xây dựng các phương thức không cần thiết (hầu như không) với ký hiệu như trong Hình 19.28 là đủ.
	   
	   6.1.2 Package nhân vật
	   
	   Phần này xây dựng trên phần 3.1.2 của SSD này. Có một lớp trong package Nhân vật: GameCharacter
	   
	    6.1.2.1 Lớp GameCharacter
		
		Phương thức của GameCharacter
		
		Mã giả:
		
	   6.1.3 Package GameEnviroment
	   
	   Package này được mô tả hoàn toàn trong hình 19.31 trong phần 3.1 của SSD này (Chương 18).
	   
	   6.1.4 Package hiện vật (artifact)
	   
	   Không áp dụng trong lần này.
	   
	6. Thiết kế kỹ thuật của Encounter
	  
	Kiến trúc chung, cái mà cho thấy mối quan hệ giữa các package và lớp domain được mô tả trong phần này, đươc trình bày trong hình 19.30.
	
	 6.1 Module thiết kế chi tiết cho Encounter
	 
	 Những phần này cung cấp tất cả các chi tiết cần cho mỗi mô đun đã mô tả ở phần 3.1 trong SSD này.
	 
	  6.1.1 Package EncounterGame
	  
	  Phần này cung cấp tất cả các chi tiết cần trong phần 3.1.1 trong SSD này. Nó mô tả tất cả lớp của package EncounterGame và tất cả các hành vi. Hầu hết chúng được mô tả bằng sơ đồ chuyển trạng thái. Để giữ cho mô hình lớp không bị lộn xộn, chúng tôi không hiển thị tất cả các tham chiếu đối tượng.
	  
	  Sơ đồ trạng thái cho Encounter được trình bày trong phần 2.1 của SRS (Hình 11.26 của chương 11). Để mô tả những trạng thái và sự chuyển đổi, package EncounterGame đối tượng lớp được thiết kế như hình 19.31.
