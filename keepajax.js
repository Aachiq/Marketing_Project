
  function sendata(){
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     alert(email + "" + message);
     let data = {email,message}
     fetch('/goemail',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{"Content-type":"application/json"}
     })
     .then(res=>res.json())
     .then(json=>console.log(json))
     .catch(err=>console.log(err))
    }