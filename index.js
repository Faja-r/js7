const imgBox=document.getElementById("imgBox");
const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");



function generateQr(){
    qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

}

