
function toggleAccordionImage(button) {
    const icon = button.querySelector(".accordion-icon");

    // Kiểm tra trạng thái aria-expanded của button
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
        icon.src = "./image/present_icon.png"; // Thay đổi thành icon mũi tên lên
    } else {
        icon.src = "/image/down_icon.png"; // Trở lại icon mũi tên xuống
    }
}
