---
to: public/<%=name%>/index.js
---
console.log('Hello from <%=name%> page js')

<% if(fetch){ %>
// TODO: set the endpoint
fetch('/api/set-your-endpoint')
  .then(response => {
    return response.json()
  }).then(data => {
    console.table(data)
  })
<% } // end if %>