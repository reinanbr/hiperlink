//login fb validator
//login fb validate
$("#formfb").validate({
       rules : {
             pass:{
                    required:true,
                    minlength:6
             },
             email:{
                    required:true,
                    minlength:9
             }                       
       },
       messages:{
             pass:{
                    required:"Por favor, informe sua senha",
                    minlength:"a senha deve ter pelo menos 6 caracteres"
             },
             email:{
                    required:"É necessário informar um email ou um telefone",
                    minlength:"o email ou telefone deve ter pelo menos 9 caracteres"
             } 
       }
});