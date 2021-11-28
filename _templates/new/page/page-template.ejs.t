---
to: public/<%=name%>/index.html
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello Hygen</title>
  <link rel="stylesheet" type="text/css" href="/css-reset.css">
  <link rel="stylesheet" type="text/css" href="/global.css">
  <link rel="stylesheet" type="text/css" href="/<%=name%>/index.css">
</head>
<body>
  <nav>
    <ul>
      <li>
        <a href="/">Back</a>
      </li>
    </ul>
  </nav>
  <h1 class="title">This is the <%=name%> page</h1>
  <script src="/<%=name%>/index.js"></script>
</body>
</html>