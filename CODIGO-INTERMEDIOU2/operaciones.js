function EcuArit() {//caso 1
    
  var ecuacion = document.getElementById('ecu').value; ////valor instroducido
 if(ecuacion != null){//verificamos que no sea nulo
        var expres = /\d{1,}]\s{0,}['+'|'/'|'-'|'*']\s{0,1}\d{1,}]/gi; //creamos buscador de operacion
        var opera = ecuacion.match(expres);//se hace un match y se guarda en operacion
        var a = 0; //iniciamos un contador
        var b = 'b';
        var resul = b + a + '=' + opera; 
        var x = ecuacion.replace(opera,b+a); //reemplazamos el valor de la operacion en la ecuación por la contadoro
        i++;//incrementamos el contador 
        var resul2 = b+a+'='+x; // y la otra operación la cocatenamos con la nueva temopral y la guardamos
        document.getElementById('para').value = resul +"\n"+resul2;
 }else{
        document.getElementById('para').value = "No se introdujo ninguna ecuación";//si es nulo se imprime el mensaje
 };
};// fin



function EcuAritAvanzado() {

 let saltoDeLinea = "\n"; //operador global para los saltos de linea en la impresión de datos

 function Infijo_Postfijo(infijo){
        //funcion que convertira de infijo a postfijo por medio de un arbol
        let converinfi = new Array();
        converinfi = infijo; //solo pasamos cadena en una posición de array
        let postfi = ""; //se almacena el resutltado 
        let pila = new Array();
        pila.push("-1"); 
        let retornar;//almacenara los valores de retorno de las prioridades de operación
        
        for(let i = 0; i < converinfi.length; i++){//en el for se realizara una busqueda completa con las prioridaes
               retornar = pila[pila.length -1]; //retono simpre tendra el valor de -1
               if (BuscaOperador(converinfi.charAt(i)) || converinfi.charAt(i) == ")"){//hacemos una busqueda 
                      if (retornar == "-1") {//si no a sufrido ninguna modificación quedara
                          pila.push(converinfi.charAt(i));//el valor encontrado ira a la pila
                      } else {// en caso contrario se hara esto
                             if (PrioridadOperador(converinfi.charAt(i)) == PrioridadOperador(retornar)) {//localizamos que tipo de operador con prioridad
                                    if (converinfi.charAt(i) == "(") {//si es igual al dato
                                           pila.push(converinfi.charAt(i));//en caso de que lo sea ira a la pila
                                    }else{
                                           postfi += pila.pop();//saca lo que tien pila y se concatena a postfix
                                           pila.push(converinfi.charAt(i));//y se introduce el nuevo valor
                                    };
                             }else if (PrioridadOperador(converinfi.charAt(i)) > PrioridadOperador(retornar)){//la prioridades de caracter es mayor al que se retorna
                                      pila.push(converinfi.charAt(i));//si lo es se introduce a la pila
                                    }else if (PrioridadOperador(converinfi.charAt(i)) < PrioridadOperador(retornar)){//en caso de que no lo sea
                                           while (retornar != "-1" && retornar != "(") { //haz lo siguiente, el retorno es diferente a -1 y no es el valor de operador
                                                  postfi += pila.pop();//saca de la pila el caracter, y concatenalo a postfix
                                                  retornar = pila[pila.length - 1];// y  el retorno conviertelo en -1
                                           };
                                           pila.push(converinfi.charAt(i));//introduce el nuevo caracter a la pila
                                           }else if (converinfi.charAt(i) == ")"){//o el caracter es igual
                                                  while (retornar != "(") {//mientras retorno no sea igual 
                                                         postfi += pila.pop();//saca el valor de pila y se concatena
                                                         retornar = pila[pila.length - 1];//y a retorno se regresa a -1
                                                  };
                                                  pila.pop(converinfi.charAt(i));//localiza el caracter, y sacalo
                                           };
                      };