const midWare = function (req, res, next) {

    let currentDateTime = new Date();

    let dd = dateTime.getDate();
    let mm = dateTime.getMonth() + 1;
    let yyyy = dateTime.getFullYear();

    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();
 
    let dateTime= dd+'-'+mm+'-'+yyyy+" "+hour+':'+minute+':'+second;

    let reqRoute = req.Path();
    let ipAdddress = req.ip();

    const loggedTime = [dateTime, reqRoute, ipAdddress];

    console.log(loggedTime);

};

module.exports.midWare = midWare;