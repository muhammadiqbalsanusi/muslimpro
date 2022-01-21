## API DOC - MUSLIM PRO - By Muhammad Iqbal
  _Ini adalah dokumentasi applikasi muslim pro individual project._

### INDIVIDUAL PROJECT : DOCUMENTATION
## 1. POST USER

  ### `POST` /users/register

 **Request Header:**
 
 not needed

 **Request Body:**
 {
    email,
    password,
  }

**Response : 201 (OK)**  <br/>
  {
        "success": true,
    "message": "Register user Succesfull",
    "id": 7,
    "email": "admin1@mail.com"
  }
**Response : 400 (BAD REQUEST)**  <br/>

 "err": [
        "Username Can Not Be Empty!",
        "Email can Not Be Empty!",
        "Format email invalid",
        "Password can Not Be Empty!",
        "Password Minimal Length Is 5 Characters & must be Unique!",
      ]
***

## 2. LOGIN USER

  ### `POST` /users/login

 **Request Header:**
 
 not needed

 **Parameters:**
 
 not needed

 **Request Body:**
 {
    username,
    email,
  }

**Response : 201 (OK)**  <br/>
  {
       "success": true,
    "message": "Login User Success",
    "access_token": <access_token>
}
**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "errMessage" : "Invalid username or email or password!"
  }

## 3. ADD BOOKMARK

  ### `POST` /BOOKMARK/

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
 {
      UserId: 
        SurahId: 
        nama: 
        arti: 
        type: 
        ayat: 
  }

**Response : 201 (OK)**  <br/>
{
    "success": true,
    "message": "Berhasil menambahkan bookmark",
    "data": {
        "id": 21,
        "UserId": 2,
        "SurahId": 1,
        "nama": "Al Fatihah",
        "arti": "Pembukaan",
        "type": "mekah",
        "ayat": 7,
        "updatedAt": "2022-01-21T08:41:34.173Z",
        "createdAt": "2022-01-21T08:41:34.173Z"
    }
}


**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}

## 4. GET BOOKMARK


 ### `GET` /BOOKMARK

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
 {
     userId
  }

**Response : 201 (OK)**  <br/>
{
    "success": true,
    "message": "Berhasil menambahkan bookmark",
    "data": {
        "id": 21,
        "UserId": 2,
        "SurahId": 1,
        "nama": "Al Fatihah",
        "arti": "Pembukaan",
        "type": "mekah",
        "ayat": 7,
        "updatedAt": "2022-01-21T08:41:34.173Z",
        "createdAt": "2022-01-21T08:41:34.173Z"
    }
}


**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}
 

**Response : 401 (NOT AUTHORIZED)**  <br/>

 {
   NONE
 }

## 5. DELETE BOOKMARK


  ### `DELETE` /BOOKMARK

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
  {
      SurahId: surah,
      UserId: user
  }

**Response : 201 (OK)**  <br/>
{
    message: 'Bookmark succesfull delete'
}


**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}
## 6. GET ALL SURAH

  ### `GET` /https://api-alquranid.herokuapp.com/surah

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
  {
      none
  }

**Response : 201 (OK)**  <br/>
{
    "author": "Alwan (wanrabbae) :)",
    "status": "success",
    "Donate": {
        "Gopay": "08995247131"
    },
    "data": [
        {
            "arti": "Pembukaan",
            "asma": "الفاتحة",
            "ayat": 7,
            "nama": "Al Fatihah",
            "type": "mekah",
            "urut": "5",
            "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/001AlFaatihah.mp3",
            "nomor": "1",
            "rukuk": "1",
            "keterangan": "Surat <i>Al Faatihah</i> (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut <i>Al Faatihah</i> (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan <i>Ummul Quran</i> (induk Al Quran) atau <i>Ummul Kitaab</i> (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.<br> Dinamakan pula <i>As Sab'ul matsaany</i> (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat."
        },
        {
            "arti": "Sapi Betina",
            "asma": "البقرة",
            "ayat": 286,
            "nama": "Al Baqarah",
            "type": "madinah",
            "urut": "87",
            "audio": "http://ia802609.us.archive.org/13/items/quraninindonesia/002AlBaqarah.mp3",
            "nomor": "2",
            "rukuk": "40",
            "keterangan": "Surat <i>Al Baqarah</i> yang 286 ayat itu turun di Madinah yang sebahagian besar diturunkan pada permulaan tahun Hijrah, kecuali ayat 281 diturunkan di Mina pada Hajji wadaa' (hajji Nabi Muhammad s.a.w. yang terakhir). Seluruh ayat dari surat Al Baqarah termasuk golongan Madaniyyah, merupakan surat yang terpanjang di antara surat-surat Al Quran yang di dalamnya terdapat pula ayat yang terpancang (ayat 282). Surat ini dinamai <i>Al Baqarah</i> karena di dalamnya disebutkan kisah penyembelihan sapi betina yang diperintahkan Allah kepada Bani Israil (ayat 67 sampai dengan 74), dimana dijelaskan watak orang Yahudi pada umumnya. Dinamai <i>Fusthaatul-Quran</i> (puncak Al Quran) karena memuat beberapa hukum yang tidak disebutkan dalam surat yang lain. Dinamai juga surat  <i>alif-laam-miim</i> karena surat ini dimulai dengan Alif-laam-miim."
        }, {
          AND OTHERS DATA
        }
    ]
}

**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}

## 7. GET ONE SURAH / READ

  ### `GET` /https://api-alquranid.herokuapp.com/surah/2

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
  {
      none
  }

**Response : 201 (OK)**  <br/>
{
   {
    "author": "Alwan (wanrabbae) :)",
    "status": "success",
    "Donate": {
        "Gopay": "08995247131"
    },
    "data": [
        {
            "ar": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ الم",
            "id": "Alif laam miin.",
            "tr": "alif-l<u>aa</u>m-miim",
            "nomor": "1"
        },
        {
            "ar": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ",
            "id": "Kitab (Al Quraan) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertaqwa,",
            "tr": "<u>dzaa</u>lika <strong>a</strong>lkit<u>aa</u>bu l<u>aa</u> rayba fiihi hudan lilmuttaqiin<strong>a</strong>",
            "nomor": "2"
        },
         adnd others
    ]
}


**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}

## 8. GET ALL HADITS

  ### `GET` https://api-hadits.azharimm.site/books

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
  {
      none
  }

**Response : 201 (OK)**  <br/>
{
    "status": true,
    "data": [
        {
            "id": "abu-daud",
            "available": 4419,
            "name": "HR. Abu Daud"
        },
        {
            "id": "bukhari",
            "available": 6638,
            "name": "HR. Bukhari"
        },
        {
            "id": "ahmad",
            "available": 4305,
            "name": "HR. Ahmad"
        },
        {
            "id": "malik",
            "available": 1587,
            "name": "HR. Malik"
        },
        {
            "id": "darimi",
            "available": 2949,
            "name": "HR. Darimi"
        },
        {
            "id": "ibnu-majah",
            "available": 4285,
            "name": "HR. Ibnu Majah"
        },
        {
            "id": "nasai",
            "available": 5364,
            "name": "HR. Nasai"
        },
        {
            "id": "muslim",
            "available": 4930,
            "name": "HR. Muslim"
        },
        {
            "id": "tirmidzi",
            "available": 3625,
            "name": "HR. Tirmidzi"
        }
    ]
}

**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}

## 9. GET ONE HADITS

  ### `GET` https://api-hadits.azharimm.site/books/ahmad/1

 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
  {
      none
  }

**Response : 201 (OK)**  <br/>
    "status": true,
    "data": {
        "hadith": {
            "number": 1,
            "arab": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ نُمَيْرٍ قَالَ أَخْبَرَنَا إِسْمَاعِيلُ يَعْنِي ابْنَ أَبِي خَالِدٍ عَنْ قَيْسٍ قَالَقَامَ أَبُو بَكْرٍ رَضِيَ اللَّهُ عَنْهُ فَحَمِدَ اللَّهَ وَأَثْنَى عَلَيْهِ ثُمَّ قَالَ يَا أَيُّهَا النَّاسُ إِنَّكُمْ تَقْرَءُونَ هَذِهِ الْآيَةَ{ يَا أَيُّهَا الَّذِينَ آمَنُوا عَلَيْكُمْ أَنْفُسَكُمْ لَا يَضُرُّكُمْ مَنْ ضَلَّ إِذَا اهْتَدَيْتُمْ }وَإِنَّا سَمِعْنَا رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ إِنَّ النَّاسَ إِذَا رَأَوْا الْمُنْكَرَ فَلَمْ يُنْكِرُوهُ أَوْشَكَ أَنْ يَعُمَّهُمْ اللَّهُ بِعِقَابِهِ",
            "id": "Telah menceritakan kepada kami [Abdullah Bin Numair] dia berkata; telah mengabarkan kepada kami [Isma'il] dari [Qais] dia berkata; [Abu Bakar] berdiri lalu memuji Allah dan mensucikan-Nya kemudian berkata; wahai manusia sesungguhnya kalian membaca ayat ini: \"Hai orang-orang yang beriman, jagalah dirimu; tiadalah orang yang sesat itu akan memberi mudharat kepadamu apabila kamu telah mendapat petunjuk.\" (QS Al Maidah ayat 105). Dan sesungguhnya kami mendengar Rasulullah shallallahu 'alaihi wasallam bersabda: \"sesungguhnya jika manusia melihat kemungkaran kemudian mereka tidak mengingkarinya, maka hampir saja Allah akan menimpakan siksa kepada mereka semua.\""
        }
    }
    
**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}
## 10. GET JADWAL SHALAT

  ### `GET` https://api.myquran.com/v1/sholat/jadwal/${payload.kota}/${payload.year}/${payload.month}`
 **Request Header: (WITH OR WITHOUR HEADERS)**
  {
    "access_token": "< access token >"
  }
 **Parameters:**
 
 not needed

 **Request Body:**
  {
      id city,
      year,
      month
  }

**Response : 201 (OK)**  <br/>
{
    "status": true,
    "data": {
        "id": "1609",
        "lokasi": "KAB. KEDIRI",
        "daerah": "JAWA TIMUR",
        "koordinat": {
            "lat": -7.819372222222222,
            "lon": 112.04153611111111,
            "lintang": "7° 49' 9.74\" S",
            "bujur": "112° 02' 29.53\" E"
        },
        "jadwal": [
            {
                "tanggal": "Sabtu, 01/01/2022",
                "imsak": "03:45",
                "subuh": "03:55",
                "terbit": "05:15",
                "dhuha": "05:44",
                "dzuhur": "11:39",
                "ashar": "15:05",
                "maghrib": "17:56",
                "isya": "19:11",
                "date": "2022-01-01"
            },
            {
                "tanggal": "Minggu, 02/01/2022",
                "imsak": "03:45",
                "subuh": "03:55",
                "terbit": "05:15",
                "dhuha": "05:44",
                "dzuhur": "11:39",
                "ashar": "15:05",
                "maghrib": "17:56",
                "isya": "19:12",
                "date": "2022-01-02"
            }, {
              and others
            }
    }

**Response : 401 (NOT AUTHORIZED)**  <br/>

  {
    "message": "missing access_token"
}

