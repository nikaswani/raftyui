---
title: Menu
nextjs:
  metadata:
    title: Menu
    description: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
    twitter:
      title: Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu
    openGraph:
      title: Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu
---

Displays a menu to the user—such as a set of actions or functions—triggered by a button. This component is made on top of [Radix UIs Dropdown Menu Component](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Menu,
  MenuTrigger,
  MenuItem,
  MenuCheckboxItem,
  MenuContent,
  MenuSeparator,
  MenuRadioGroup,
  MenuLabel,
  MenuRadioItem,
} from "@rafty/ui";

<Menu>
  <MenuTrigger />
  <MenuContent>
    <MenuItem />
    <MenuSeparator />
    <MenuCheckboxItem />
    <MenuLabel />
    <MenuRadioGroup>
      <MenuRadioItem />
    </MenuRadioGroup>
  </MenuContent>
</Menu>;
```

## Usage

{% example name="menu:usage" /%}

## Size

There are 3 `size` options in Menu: `sm`, `md` (default) & `lg`.

{% example name="menu:size" /%}

## SubMenu

{% example name="menu:submenu" /%}

## MenuCheckboxItem

{% example name="menu:menu_checkbox_item" /%}

## MenuRadioGroup

{% example name="menu:radio_group" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Menu.

{% example name="menu:unstyled" /%}

## UnStyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="menu:unstyledsub" /%}

## IsArrow

The `isArrow` prop exists in Menu Content subcomponent and is used to show/hide arrow on content. By default, its value is true.

{% example name="menu:isarrow" /%}

### API

---

### Root

| Property   | Description                                              | Type      | Default |
| ---------- | -------------------------------------------------------- | --------- | ------- |
| isUnstyled | Removes style from whole component and its subcomponents | `boolean` | false   |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isArrow    | Show arrow in content        | `boolean` | true    |
| isUnstyled | Removes style from component | `boolean` | false   |

### Arrow

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Item

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Label

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### CheckboxItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### RadioItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### MenuSeparator

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### SubTrigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### SubContent

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
