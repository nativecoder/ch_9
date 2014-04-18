module.exports = function(Handlebars) {

var templates = {};

templates["join"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"overlay\"></div>\n<div class=\"content\">\n   <span class=\"close\">close</span>\n   <h1>Register</h1>\n   <span class=\"error\"></span>\n   <form>\n   <fieldset>\n   <legend>Username</legend>\n   <label>\n     <input type=\"text\" name=\"username\" />\n    </label>\n   <span data-msg='username'></span>\n   </fieldset>\n   <fieldset>\n   <legend>Email Address</legend>\n   <label>\n   Email:\n   <input type=\"text\" name=\"email\" /> </label>\n   </fieldset>\n   <fieldset>\n   <legend>Password</legend>\n   <label>\n   Password:\n   <input type=\"password\" name=\"password\" /> </label>\n   <br />\n   <label>\n       Password (confirm):\n   <input type=\"password\" name=\"cpassword\" /> </label>\n   </fieldset>\n    <input type=\"submit\"></input>\n</div>\n";
  });

templates["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"overlay\"></div>\n  <div class=\"content\">\n  <span class=\"close\">close</span>\n  <h2>Login</h2>\n  <form id=\"login\">\n    <label for=\"username\">\n      Username:\n    </label>\n    <input name=\"username\" />\n    <br>\n    <label for=\"password\">\n      Password:\n    </label>\n    <input type=\"password\" name=\"password\" />\n    <br>\n    <input type=\"submit\"></input>\n  </form>\n</div>\n\n";
  });

templates["navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n  <!-- active user session -->\n  <a href=\"#\" class=\"logout\">Logout</a>\n";
  }

function program3(depth0,data) {
  
  
  return "\n  <!-- no user session -->\n  <a href=\"#\" class=\"login\">Login</a> |\n  <a href=\"#\" class=\"join\">Join</a>\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.session), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });

return templates;

};