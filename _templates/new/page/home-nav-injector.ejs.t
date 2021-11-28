---
inject: true
to: public/index.html
before: hygen:home-nav-injector 
---
        <a href="/<%=name%>"><%=Name%></a>