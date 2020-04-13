# mofron-layout-relative
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

relative layout of mofron

## Feature
 - components are placed offset by 'relative' style value

# Install
```
npm install mofron mofron-layout-relative
```

# Sample
```html
<require>
    <tag module="mofron-comp-text">Text</tag>
    <tag module="mofron-layout-relative">Relat</tag>
</require>

<div layout=Relat:("top","0.2rem")>
    <Text>text 1</Text>
    <Text>text 2</Text>
    <Text>text 3</Text>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | contents | number | component index |
| | | component | target component |
| ◯  | type | string | direction type ["top"/"right"/"bottom"/"left"] |
| | offset | string(size) | offset value |
| ◯  | value | string | same as 'offset' parameter |
| | multiple | boolean | true: offset value is multiples values to the component index |
| | | | false: offset value not multiples |

