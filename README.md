# Buto-Plugin-I18nReplace_html_from_attr
Replace html in element from attributes.

## Example
- Replace value of attribute "replace-name" with string "[name]" in element html.
- Attributes must be prefixed with "replace-" to be handled.

```
-
  type: span
  attribute:
    id: org_name
    replace-name: Apple Inc
  innerHTML: Org [name] selling computers.
-
  type: script
  innerHTML: |
    PluginI18nReplace_html_from_attr.replace('org_name');
```
