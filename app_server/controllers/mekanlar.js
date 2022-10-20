var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
    res.render('anasayfa',
     { "baslik": 'Ana Sayfa',
        "sayfaBaslik":{
            "siteAd":"MekanBul",
            "slogan":"Civardaki Mekanları Keşfet!"
        },
        "mekanlar":[
            {
                "ad":"Palermo Kafe",
                "adres": "Iyaşın orda bir yerde",
                "puan": "5",
                "mesafe": "31km",
                "imkanlar": ["Kahve","Masa Oyunları",]
            },
            {
                "ad":"Modern Market",
                "adres": "Adliyenin Aşağısında",
                "puan": "4",
                "mesafe": "69km",
                "imkanlar": ["Market","Şarküteri",]
            }



        ]
    
    })
}
const mekanBilgisi = function (req, res, next) {
    res.render('mekanbilgisi',
     { "baslik": 'Mekan Bilgisi',
       "mekanBaslik":"Palermo Kafe",
       "mekanDetay":{
        "ad":"Palermo Kafe",
        "adres": "Iyaşın orda bir yerde",
        "puan": "5",
        "saatler": [
            {
                "gunler":"Pazartesi-Cuma",
                "acilis":"10.00",
                "kapanis":"23.00",
                "kapali": false


            },
            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"12.00",
                "kapanis":"01.00",
                "kapali": false

            }

        ],
        "imkanlar": ["Kahve","Masa Oyunları"],
        "koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
                "yorumYapan":"Ertuğrul Öztürk",
                "puan":"5",
                "tarih":"13 Ekim 2022",
                "yorumMetni":"Mekan on numara kahveler ucuz."
            },
            {
                "yorumYapan":"Behram Doğru",
                "puan":"4",
                "tarih":"20 Ekim 2022",
                "yorumMetni":"Maraştan daha iyi"
            }
        ]

       }
        
    
    
    
    })
}
const yorumEkle = function (req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' })
}
module.exports = {

    anaSayfa,
    mekanBilgisi,
    yorumEkle


}