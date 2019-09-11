// Code goes here

let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
  // let a = str.split(';');
  
  // let d = {};
  // for (let i of a) {
  //   let y = i.indexOf(':');
  //   let key = i.substring(0, y);
  //   let value = i.substring(y).substring(2);
  //   d[key.trim()] = value;
  // }
  // console.log(d);
  return str
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((total, item) => {
      const [key, value] = item.split(':');
      console.log(key,value, item);
      return {...total, [key.trim()]: value.trim()}
    }, {});
}

console.log(styleToObject(style));