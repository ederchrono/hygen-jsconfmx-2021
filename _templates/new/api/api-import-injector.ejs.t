---
inject: true
to: api/controller.js
after: hygen:api-import-injector
---
const <%=name%> = require('./<%=name%>')