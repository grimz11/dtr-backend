module.exports = ({ env })=> {
  let age = 300000;
  (function runForever(){
    // Do something here
    age = 300000;
    setTimeout(runForever, 200000)
  })()

  return {
  upload: {
    providerOptions: {
      localServer: {
        maxage: age
      }
    }
  }
}};