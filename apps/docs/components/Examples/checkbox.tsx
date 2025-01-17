import { Checkbox } from "@rafty/ui";

export const checkbox_examples = {
  "checkbox:usage": (
    <Checkbox name="checkbox" id="1">
      Checkbox
    </Checkbox>
  ),
  "checkbox:default_checked": (
    <Checkbox defaultChecked id="2">
      Checkbox
    </Checkbox>
  ),
  "checkbox:disabled": (
    <Checkbox isDisabled id="3">
      Checkbox
    </Checkbox>
  ),
  "checkbox:checked": (
    <Checkbox checked id="4">
      Checkbox
    </Checkbox>
  ),
  "checkbox:required": (
    <Checkbox isRequired id="5">
      Checkbox
    </Checkbox>
  ),
  "checkbox:size": (
    <div className="space-y-3">
      <Checkbox size="sm" id="6">
        Checkbox
      </Checkbox>
      <Checkbox size="md" id="7">
        Checkbox
      </Checkbox>
      <Checkbox size="lg" id="8">
        Checkbox
      </Checkbox>
    </div>
  ),
};
