---
layout: post
title: Using NodeJS and FTP with Promises
category: javascript, nodejs, promises
---
I've played with node in the [past][1] but as of the new year I decided to try and make a more concerted effort to get stuck into node properly.  I decided to go back to the beginning to try and get a better appreciation for the language so read "JavaScript: The Good Parts by Douglas Crockford".  I found that exercise fulfilling and resulted in a few light bulb moments that made some dots join up so I'd recommend reading it if you haven't already.

###Real World App

As I stated earlier I have already played with node in the past using [Express][2] and have read quite a bit on node and read many examples but I wanted to write a non-web app as I felt this would give me a better opportunity to get to grips with the language and Node. Using Express allows you to get up and running very quickly without to much head scratching so I felt a standalone script would give me more exposure to things.

<!--excerpt-->

During the previous couple of weeks at work I wrote a console app that downloaded FTP files, extract the contents, read data in a XML file that was in the zip, do some string matching and upload the zip to another FTP server.  I figured this would be a good app to replicate in node so off I went.

After a bit of [npm][3] research I found the modules I needed and managed to get to the point of downloading files pretty easy with the below code:

    var path = require('path');
    var fs = require('fs');
    var Promise = require('bluebird');
    var Client = require('ftp');
    
    var c = new Client();
    
    var connectionProperties = {
        host: "myhost",
        user: "myuser",
        password: "mypwd"
    };
    
    c.on('ready', function () {
        console.log('ready');
        c.list(function (err, list) {
            if (err) throw err;
            list.forEach(function (element, index, array) {
                //Ignore directories
                if (element.type === 'd') {
                    console.log('ignoring directory ' + element.name);
                    return;
                }
                //Ignore non zips
                if (path.extname(element.name) !== '.zip') {
                    console.log('ignoring file ' + element.name);
                    return;
                }
                //Download files
                c.get(element.name, function (err, stream) {
                    if (err) throw err;
                    stream.once('close', function () {
                        c.end();
                    });
                    stream.pipe(fs.createWriteStream(element.name));
                });
            });
        });
    });


c.connect(connectionProperties);




  [1]: http://blog.jonathanchannon.com/2012/10/08/node-js-express-hello-world-formula-1-style/
  [2]: http://expressjs.com/