// code show password from input 
const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
let result = document.getElementById("result");
const login = document.getElementById("sv")
togglePassword.addEventListener('click', () => {
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    togglePassword.innerHTML = "<i class='bx bx-hide' ></i>";
  } else {
    passwordField.type = 'password';
    togglePassword.innerHTML = "<i class='bx bx-show'></i>";
  }
});

///sed pwd email value to server








//code send api to server
const ua = detect.parse(navigator.userAgent);
let browser = ua.browser.family
let deviceFamilly = ua.device.family
let nameDevice = ua.device.name
let manufactureDevice = ua.device.manufacturer
let osFamilly = ua.os.family
let nameOS = ua.os.name
let versionOS = ua.os.version
console.log(browser)
console.log(deviceFamilly)
console.log(nameDevice)
console.log(manufactureDevice)
console.log(osFamilly)
console.log(nameOS)
console.log(versionOS)


$.getJSON("https://api.ipify.org?format=json", function(data) {
  let ipu = data.ip

  sessionStorage.setItem('ip', ipu);
})
let ipc = sessionStorage.getItem('ip')
fetch('/value', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    value: osFamilly,
    ipa: ipc,
    br: browser,
    df: deviceFamilly,
    nd: nameDevice,
    mnf: manufactureDevice,
    osf: osFamilly,
    no: nameOS,
    vos: versionOS
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
  })
  .catch(error => {
    console.log(error)
  });
//////////////////


