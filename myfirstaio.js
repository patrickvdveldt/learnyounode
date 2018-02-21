var fs = require('fs')
var filePath = process.argv[2];

fs.readFile(filePath, function callback(err, data) {
  if(err){return err}

  var str = data.toString();
  var arr = str.split('\n');
  var l = arr.length-1;
  console.log(l);
})

// andere juiste oplossing

var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
