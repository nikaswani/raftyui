---
title: Accordion
nextjs:
  metadata:
    title: Accordion
    description: The accordion component allows the user to show and hide sections of related content on a page.
    twitter:
      title: Accordion
      images:
        url: https://rafty.rhinobase.io/api/og?title=Accordion
    openGraph:
      title: Accordion
      images:
        url: https://rafty.rhinobase.io/api/og?title=Accordion
---

The accordion component allows the user to show and hide sections of related content on a page.

This component is made on top of [Radix UIs Accordion Component](https://www.radix-ui.com/primitives/docs/components/accordion) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@rafty/ui";

<Accordion>
  <AccordionItem>
    <AccordionTrigger />
    <AccordionContent />
  </AccordionItem>
</Accordion>;
```

## Usage

In Accordion parent element, `type` prop is mandatory as it decides whether a `single` item or `multiple` items can be expanded/collapsed at a same time.

{% example name="accordion:usage" /%}

## Collapsible

when using type `single`, the `collapsible` prop allows closing content when clicking trigger for an open item otherwise one accordion item remains open by default.

{% example name="accordion:collapsible" /%}

## Expand Multiple items at once

- If you set type `multiple` then the accordion will permit multiple items to be expanded at once.
- when using type `multiple` value and default value are `string [] ` and `onValueChange` function is like `(value: string []) => void`

{% example name="accordion:multi_item" /%}

## Expand Item With DefaultValue

{% example name="accordion:defaultvalue" /%}

## Size

There are 3 `size` options in accordion: `sm`, `md` (default) & `lg`.

{% example name="accordion:size" /%}

## Variant

There are 2 `variant` options in accordion: `solid` (default) & `ghost`.

{% example name="accordion:variant" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Accordion.

{% example name="accordion:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="accordion:unstyledsub" /%}

## API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isUnstyled | Removes style from whole component | `boolean` | false   |

### Trigger

`AccordionTrigger`composes `Button` component

| Property   | Description                                  | Type      | Default |
| ---------- | -------------------------------------------- | --------- | ------- |
| isUnstyled | Removes Style from a particular subcomponent | `boolean` | -       |

### Content

| Property   | Description                                  | Type      | Default |
| ---------- | -------------------------------------------- | --------- | ------- |
| isUnstyled | Removes Style from a particular subcomponent | `boolean` | -       |
