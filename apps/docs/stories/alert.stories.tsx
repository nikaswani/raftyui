import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@rafty/alert";
import { Button } from "@rafty/button";

const meta: Meta<typeof Alert> = {
  title: "Components / Alert",
  args: {
    status: "info",
    size: "md",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["error", "warning", "info", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Variants: Story = {
  render: ({ status, size }) => (
    <div className="grid w-full max-w-6xl grid-cols-2 gap-10">
      <div className="flex flex-col gap-4">
        <p>Simple Variant</p>
        <Alert size={size} status={status}>
          <AlertIcon />
          <AlertTitle id="title">Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <p>Solid Variant</p>
        <Alert variant="solid" size={size} status={status}>
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <p>left-accent Variant</p>
        <Alert variant="left-accent" size={size} status={status}>
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
      <div className="flex flex-col gap-4">
        <p>top-accent Variant</p>
        <Alert variant="top-accent" size={size} status={status}>
          <AlertIcon />
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};
export const AlertWithAction: Story = {
  args: { variant: "simple" },
  argTypes: {
    variant: {
      control: "select",
      options: ["simple", "solid", "left-accent", "top-accent"],
    },
  },

  render: ({ status, size, variant }) => (
    <div className="flex w-full max-w-3xl flex-col gap-4">
      <Alert variant={variant} size={size} status={status}>
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
        <div className="flex-1" />
        <Button>Action</Button>
      </Alert>
    </div>
  ),
};