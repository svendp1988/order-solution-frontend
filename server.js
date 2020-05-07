const express = require('express');
const application = express();

application.use(express.static('./dist/order-solution-frontend'));

application.listen(process.env.PORT || 8080 );
