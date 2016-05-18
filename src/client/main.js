


var AppView = Backbone.View.extend({
      el: $('#para_id'),
      // template which has the placeholder 'who' to be substitute later
      template: _.template("<h3>Hello <%= who %></h3>"),
      initialize: function(){
        this.render();
      },
      render: function(){
        // render the function using substituting the varible 'who' for 'world!'.
        this.$el.html(this.template({who: 'world!'}));
        //***Try putting your name instead of world.
      }
    });

//created model
var Human = Backbone.Model.extend({
    //defaults if you don't want to pass any other attribute inside the model object
    defaults:{
      ago:"Pro",
      env:"DEV"
    },
    //initialize like constructor function
    initialize: function(){
        console.log("Hello world");
        this.bindEvent();
    },
    //event on model you can make many model as you want
    bindEvent:function(){
        this.on("change:ago",function(model){
        console.log("ago is changed to "+model.get('ago'));
        });
    }
    });

var HumanView =Backbone.View.extend({
   //we are creating the new html tag here
    tagName:"h2",
    className:"rahul",
    id:"properId",
    defaults:{
      
    },
    initialize:function(){
       // console.log(this.el);
        //console.log(this.$el);
        $("#para_id").append(this.el);
        //this.render();
        console.log("inside the view of human")
        //this.$el.append("Hi My first text rendering thanks for watching");
    },
    render : function(view){
      var html = '<h1> MY Name is '+'and my age is '+'</h1>';
        $(this.el).html(html);                                                 
    }
});

var TheView =Backbone.View.extend({
    initialize:function(){
        this.render();
    },
    render: function(){
        var templ = _.template($("#templId").html(),{});
        this.$el.html(templ);
    },

});
$(document).ready(function(){
    //var appView = new AppView();
    /*var human = new Human(
    {
        name:"Rahul",age:24
    },
    {
        name:"Piyush",age:34
    });
    alert("Hey Guys  my Name is "+human.get('name')+ " and my age is "+human.get('age'));
    var h=new Human();
    console.log("Hey guys here is "+h.get('ago')+ " and this env is "+h.get('env'));
    h.set({"ago":"Rahul singh bhadouria"});
    */
    //View started from here
    //var hv=new HumanView({el:$("#para_id")});
    //var hv1=new HumanView();
    var aView=new TheView({el:$("#renderTempl")});
    
    
});
    