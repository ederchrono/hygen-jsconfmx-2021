---
inject: true
to: api/controller.js
after: hygen:api-endpoint-injector
---
router.use('/<%=name%>', <%=name%>)