import { Grid } from "@rhinobase/storybook/components";
import { Toast, IToast } from "./Toast";

export default {
  title: "New/Toast",
  component: Toast,
  argTypes: {
    severity: { control: "select" },
  },
  args: {
    visible: true,
  },
};

export function Default(args: IToast) {
  return (
    <Grid>
      <Toast {...args} severity="error" />
      <Toast {...args} severity="info" />
      <Toast {...args} severity="success" />
      <Toast {...args} severity="warning" />
    </Grid>
  );
}

Default.args = {
  title: "Success Banner",
  message: "Data uploaded to the server. Fire on!",
};

// import { Canvas, Meta, Story, ArgsTable } from "@storybook/addon-docs";

// import { Examples, Example, Note, Title, Grid, CustomArgsTable } from "@rhinobase/storybook/components";
// import { Icon, Button, Toast } from "@rhinobase/ui";

// <Meta title="UI/Toast" component={Toast} />

// <Title title="Toasts" suffix="Brief" subtitle="Version 1.0 — Last Update: 26 Dec 2022" />

// ## Definition

// A succinct message that is displayed temporarily.

// ## Structure

// <CustomArgsTable of={Toast} />

// ## Example

// ### All Variants

// <Canvas>
//   <Story name="All variants">
//     <Grid>
//       <div className="w-full space-y-2">
//         <Toast severity="success" title="Success Banner" message="Data uploaded to the server. Fire on!" />
//         <Toast
//           severity="warning"
//           title="Warning Banner"
//           message="Seems your account is about expire, upgrade now"
//         />
//         <Toast severity="error" title="Error Banner" message="There was an error processing your request" />
//         <Toast
//           severity="info"
//           title="Info Banner"
//           message="Chakra is going live on August 30th. Get ready!"
//         />
//       </div>
//     </Grid>
//   </Story>
// </Canvas>
