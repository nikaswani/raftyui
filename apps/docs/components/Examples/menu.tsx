import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuCheckboxItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuGroup,
} from "@rafty/ui";
import { HiOutlineChevronDown } from "react-icons/hi2";

export const menu_examples = {
  "menu:usage": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
      </MenuContent>
    </Menu>
  ),
  "menu:size": (
    <Menu size="sm">
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
        <MenuSeparator />
        <MenuCheckboxItem checked>
          Show Bookmarks <div className="RightSlot">⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem>Show Full URLs</MenuCheckboxItem>
        <MenuSeparator />
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup value="1">
          <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
  "menu:submenu": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuSub>
          <MenuSubTrigger style={{ justifyContent: "space-between" }}>
            More Tools
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem className="justify-between">
              Save Page As… <div className="RightSlot">⌘+S</div>
            </MenuItem>
            <MenuItem>Create Shortcut…</MenuItem>
            <MenuItem>Name Window…</MenuItem>
            <MenuSeparator />
            <MenuItem>Developer Tools</MenuItem>
          </MenuSubContent>
        </MenuSub>
      </MenuContent>
    </Menu>
  ),
  "menu:menu_checkbox_item": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>
        All Feature
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>New Private Window </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuCheckboxItem>
          Show Bookmarks <div className="RightSlot">⌘+B</div>
        </MenuCheckboxItem>
        <MenuCheckboxItem>Show Full URLs</MenuCheckboxItem>
      </MenuContent>
    </Menu>
  ),
  "menu:radio_group": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup value="1">
          <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
  "menu:isarrow": (
    <Menu>
      <MenuTrigger rightIcon={<HiOutlineChevronDown />}>Actions</MenuTrigger>
      <MenuContent isArrow>
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem>New Private Window </MenuItem>
        <MenuLabel>People</MenuLabel>
        <MenuRadioGroup value="1">
          <MenuRadioItem value="1">Pedro Duarte</MenuRadioItem>
          <MenuRadioItem value="2">Colm Tuite</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
  "menu:barebone": (
    <Menu isBarebone>
      <MenuTrigger
        size="sm"
        className="bg-secondary-200 dark:bg-secondary-600 dark:bg-secondar-500 hover:bg-primary-dark dark:hover:bg-secondary-dark  flex items-center space-x-2 rounded-md border-none px-3 py-2 text-black dark:text-white"
        rightIcon={<HiOutlineChevronDown size={16} />}
      >
        Actions
      </MenuTrigger>

      <MenuContent
        isArrow={false}
        sideOffset={5}
        className="bg-secondary-100 dark:bg-secondary-800  dark:text-primary space-y-1 rounded-md p-1 text-black  shadow-md dark:text-white "
      >
        <MenuItem className="hover:bg-primary-dark hover:bg-secondary-300 dark:hover:bg-secondary-700 rounded-md p-1 ">
          New Tab
        </MenuItem>
        <MenuItem className="hover:bg-primary-dark hover:bg-secondary-300 dark:hover:bg-secondary-700  rounded-md p-1 ">
          New Window
        </MenuItem>
        <MenuItem className="text-primary dark:text-secondary rounded-md p-1">
          New Private Window
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
  "menu:unstyled": (
    <Menu>
      <MenuTrigger size="icon" rightIcon={<HiOutlineChevronDown />}>
        Actions
      </MenuTrigger>
      <MenuContent
        isUnstyled
        className="dark:bg-secondary-800 rounded-md bg-white p-2"
      >
        <MenuItem>New Tab</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuItem disabled>New Private Window </MenuItem>
      </MenuContent>
    </Menu>
  ),
};
