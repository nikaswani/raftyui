import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@rafty/button";

const meta: Meta<typeof Button> = {
  title: "Components / Button",
  args: {
    colorScheme: "secondary",
  },
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["primary", "secondary", "error", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Sizes: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">sm</div>
        <Button size="sm" colorScheme={colorScheme}>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">sm</div>
        <Button colorScheme={colorScheme}>Button text</Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">lg</div>
        <Button size="lg" colorScheme={colorScheme}>
          Button text
        </Button>
      </div>
    </>
  ),
};

export const IconButton: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          icon
        </div>
        <Button data-cy="iconbtn" colorScheme={colorScheme} size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">fab</div>
        <Button data-cy="iconbtn" colorScheme={colorScheme} size="fab">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
    </>
  ),
};

export const Variants: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Solid
        </div>
        <Button colorScheme={colorScheme}>Button text</Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Outline
        </div>
        <Button variant="outline" colorScheme={colorScheme}>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Ghost
        </div>
        <Button variant="ghost" colorScheme={colorScheme}>
          Button text
        </Button>
      </div>
    </>
  ),
};
export const ActiveVariants: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Solid Active
        </div>
        <Button colorScheme={colorScheme} isActive>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Outline Active
        </div>
        <Button colorScheme={colorScheme} variant="outline" isActive>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Ghost Active
        </div>
        <Button colorScheme={colorScheme} variant="ghost" isActive>
          Button text
        </Button>
      </div>
    </>
  ),
};
export const DisabledVariants: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Solid Disabled
        </div>
        <Button colorScheme={colorScheme} isDisabled>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Outline Disabled
        </div>
        <Button colorScheme={colorScheme} variant="outline" isDisabled>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Ghsot Disabled
        </div>
        <Button colorScheme={colorScheme} variant="ghost" isDisabled>
          Button text
        </Button>
      </div>
    </>
  ),
};

export const LoadingVariants: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Solid Loading
        </div>
        <Button colorScheme={colorScheme} isLoading>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Outline Loading
        </div>
        <Button colorScheme={colorScheme} variant="outline" isLoading>
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          Ghost Loading
        </div>
        <Button colorScheme={colorScheme} variant="ghost" isLoading>
          Button text
        </Button>
      </div>
    </>
  ),
};
export const ButtonWithIcons: Story = {
  render: ({ colorScheme }) => (
    <>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          left icon
        </div>
        <Button
          colorScheme={colorScheme}
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          }
        >
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          icon right
        </div>
        <Button
          colorScheme={colorScheme}
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          }
        >
          Button text
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold text-sm mb-2 text-secondary-500">
          icon left & right
        </div>
        <Button
          colorScheme={colorScheme}
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          }
          rightIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          }
        >
          Button text
        </Button>
      </div>
    </>
  ),
};
