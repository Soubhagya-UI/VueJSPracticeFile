var app = new Vue({
    el:'#myId',
    data:{
        name:'Soubhagya',
        time:new Date().toLocaleTimeString(),
        heading: 'Heading for 3rd tutorial'
    },
    methods : {
         run : function(msg){
             return 'I am running.'+" "+ msg
         },
         multily : function(m,n){        
            return m*n
         },
         thisKey : function(){
             return this.name+" "+this.time
         }
    }
});