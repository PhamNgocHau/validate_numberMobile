function validate_mobile_number(str) {
    regexp = /^\(\d{2}\)-\([0]\d{9}\)$/;

    if(regexp.test(str)){
        console.log('So dien thoai hop le!!');
    } else {
        console.log('So dien thoai khong hop le!!');
    }
}