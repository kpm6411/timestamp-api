const moment = require('moment');
module.exports = function(app){
    app.get('/:query', function (req, res) {
      var date = req.params.query;
      var unix = null;
      var natural = null;
      
      if(+date >= 0){
          unix = +date;
          natural = moment.unix(unix).format("MMMM D, YYYY");
      } else if (moment(date, "MMMM D, YYYY").isValid()) {
          unix = moment(date, "MMMM D, YYYY").format("X");
          natural = moment.unix(unix).format("MMMM D, YYYY");
      }
      
      var dateObj = { 'unix': unix, 'natural': natural };
      res.send(dateObj);
    });
};