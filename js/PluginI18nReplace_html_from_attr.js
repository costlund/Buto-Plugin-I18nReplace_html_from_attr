function PluginI18nReplace_html_from_attr(){
  this.replace = function(id){
    var attrs = document.getElementById(id).attributes;
    $.each(attrs,function(i,elem){
      if(elem.name.substring(0, 8)=='replace-'){
        $("#"+id).html($("#"+id).html().replace('['+elem.name.substring(8)+']', elem.value));
      }
    });
    return null;
  }
}
var PluginI18nReplace_html_from_attr = new PluginI18nReplace_html_from_attr();
