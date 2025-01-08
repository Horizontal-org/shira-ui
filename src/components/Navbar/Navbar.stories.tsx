import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";

//to do: remove this when migrate the mobile menu
const ExampleMobileMenu: React.FC<{
  onNavigate: (route: string) => void;
  onClose: () => void;
}> = ({ onClose }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "rgba(0,0,0,0.8)",
      zIndex: 10,
    }}
    onClick={onClose}
  >
    <div
      style={{
        background: "white",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      Mobile Menu Content
    </div>
  </div>
);

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color",
      description: "Background color of the navbar",
    },
    onNavigate: {
      description: "Callback function when navigation links are clicked",
    },
    translatedTexts: {
      description: "Object containing translated text for the navbar items",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default view
export const Default: Story = {
  args: {
    MobileMenu: ExampleMobileMenu,
    onNavigate: (route: string) => console.log("Navigate to:", route),
    translatedTexts: {
      home: "Home",
      about: "About",
      menu: "Menu",
      logIn: "Log in",
      createSpace: "Create space",
    },
  },
};

// With custom background color
export const CustomBackground: Story = {
  args: {
    ...Default.args,
    color: "#DBE3A3",
  },
};

// Mobile view
export const MobileView: Story = {
  args: {
    ...Default.args,
    translatedTexts: {
      home: "Home",
      about: "About",
      menu: "Menu",
      logIn: "Log in",
      createSpace: "Create space",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
