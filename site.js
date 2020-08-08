
let arananSayi = Math.floor(Math.random(1,100) * 100);
// alert(arananSayi);
document.getElementById("sayiGir").onkeypress = function (e) {   
    if (e.keyCode == 13){
        sayiEkle();        
    }
}
document.getElementById("sayiGirBtn").addEventListener("click", function (e) {
    sayiEkle();
});
let sayiDizisi = [];

function sayiEkle() {
    try {
        let s = document.getElementById("sayiGir").value;
        if (arananSayi < s) {
            // s'ten küçük sayı giriniz
            document.getElementsByClassName("kucuk").item(0).className ="text-danger kucuk goster";
            document.getElementsByClassName("buyuk").item(0).className ="text-danger buyuk gizle";
        }else if (arananSayi == s) {
            alert("Tebrikler Kazandınız. Puanınız : " + (100 - sayiDizisi.length) * 50);
            location.reload();
            return;
        } else {
             // s'ten büyük sayı giriniz
             document.getElementsByClassName("kucuk").item(0).className ="text-danger kucuk gizle";
             document.getElementsByClassName("buyuk").item(0).className ="text-danger buyuk goster";
        }
        sayiDizisi.push(s);    
        if (sayiDizisi.length >= 15) {
            alert("Game Over");
            location.reload();
            return;
        }
        let str=" ";   
        sayiDizisi.forEach(element => {
            str = str + element + " ";           
        });
        document.getElementsByClassName("cikanSayilar").item(0).textContent = str + " ";
    } catch (error) {
         alert(error);
    }       
}
