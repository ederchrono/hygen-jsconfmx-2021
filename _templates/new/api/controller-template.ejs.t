---
to: api/<%=name%>/index.js
---
const express = require('express')
const router = express.Router()

function <%=name%>() {
  // TODO replace this with actual API behaviour
  throw(new Error('api/<%=name%>/index.js has not been implemented yet!'))
  return
}

router.get('/', async (req, res) => {
  res.json(<%=name%>())
})

module.exports = router

// export named function for unit tests
module.exports.<%=name%> = <%=name%>