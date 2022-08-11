<?php
class PluginI18nReplace_html_from_attr{
  public function widget_include($data){
    wfPlugin::includeonce('wf/yml');
    $element = new PluginWfYml(__DIR__.'/element/widget_include.yml');
    wfDocument::renderElement($element);
  }
}