---
title: Date Picker
pageTitle: Date Picker - Rafty UI
description: Date Picker
---

## Import

DatePickers combine a DateField and a Calendar popover to allow users to enter or select a date and time value.

- DatePicker

```jsx
import { DatePicker } from "@rafty/ui";
```

## Usage

{% example name="date-picker:usage" /%}

### API

---

### Root

| Property     | Description | Type                                     | Default |
| ------------ | ----------- | ---------------------------------------- | ------- |
| variant      |             | `solid` / `outline` / `ghost`;           |         |
| size         |             | `sm` / `md` / `lg`;                      |         |
| onChange     |             | ((value: DateValue) => void) / undefined |         |
| defaultValue |             | DateValue / null / undefined             |         |
| value        |             | DateValue / null / undefined             |         |
| isRequired   |             | `boolean`                                | false   |
| isDisabled   |             | `boolean`                                | false   |
| isReadOnly   |             | `boolean`                                | false   |