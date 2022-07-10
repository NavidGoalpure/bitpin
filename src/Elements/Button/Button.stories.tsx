import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from ".";
import styled from "styled-components";
import { FaShareAlt } from "react-icons/fa";
export default {
  title: "Elements/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const IconButton = Template.bind({});
IconButton.args = {
  children: <IoIosArrowBack />,
};
export const TextButton = Template.bind({});
TextButton.args = {
  children: "Button",
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: "Button",
  disabled: true,
};
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: "Button",
  disabled: false,
  variant: `SECONDARY`,
};
const StyledTemplate: ComponentStory<typeof Button> = (args) => (
  <StyledButton {...args} />
);
const StyledButton = styled(Button)`
  width: 23rem;
`;
export const StyledLight = StyledTemplate.bind({});
StyledLight.args = {
  children: "Long Button",
};
export const ShareButton = Template.bind({});
ShareButton.args = {
  children: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "4rem",
      }}
    >
      <p style={{ margin: "0" }}>share</p>
      <FaShareAlt />
    </div>
  ),
};
