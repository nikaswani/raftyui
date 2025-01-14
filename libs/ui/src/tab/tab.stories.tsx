import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Tab, TabContent, TabList, TabTrigger } from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Components / Tab",
  args: {
    size: "md",
    orientation: "horizontal",
    variant: "line",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["enclosed", "line"] },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Variants: Story = {
  render: ({ size, orientation, variant }) => (
    <Tab
      defaultValue="tab1"
      size={size}
      orientation={orientation}
      variant={variant}
    >
      <TabList>
        <TabTrigger value="tab1">Tab1</TabTrigger>
        <TabTrigger value="tab2">Tab2</TabTrigger>
        <TabTrigger value="tab3">Tab2</TabTrigger>
      </TabList>
      <TabContent value="tab1">
        1 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab2">
        2 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
      <TabContent value="tab3">
        3 large-scale networks, high-radix switches reduce hop and switch count,
        which decreases latency and power
      </TabContent>
    </Tab>
  ),
};
