(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');      
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (form.checkValidity() === false) {            
                event.stopPropagation();                
            }else{
                var alertsuccess=document.getElementById("alertsuccess");
                alertsuccess.classList.remove("d-none");
                setTimeout(() => {
                    alertsuccess.classList.add("d-none");
                    form.classList.remove('was-validated');
                    form.reset();
                }, 3000);
            }
            form.classList.add('was-validated');

            
        }, false);
      });
    }, false);
  })();