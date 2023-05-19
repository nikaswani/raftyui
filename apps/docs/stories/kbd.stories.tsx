import { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "@rafty/kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components / Kbd",
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => (
    <>
      <Kbd>shift + K</Kbd>
    </>
  ),
};